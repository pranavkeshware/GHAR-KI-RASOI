import axios from "axios";
import { toast } from "react-toastify";
import Base_URL from "./Base_Url";

class PaymentService {
  constructor() {
    this.PAYMENT_API_BASE_URL = `${Base_URL}/api/payment`;
  }

  // navigateTo = (navigate, path) => {
  //   if (typeof navigate === "function") {
  //     navigate(path);
  //   } else {
  //     console.error("Navigate is not a function");
  //   }
  // };

  initiateRazorpayPayment = async (
    customerId,
    homeMakerId,
    amount,
    navigate
  ) => {
    try {
      console.log("Initiating Razorpay payment...");

      const createOrderResponse = await axios.post(
        `${this.PAYMENT_API_BASE_URL}/createOrder`,
        null,
        {
          params: {
            customerId,
            homeMakerId,
            amount,
          },
        }
      );

      console.log("Full createOrderResponse:", createOrderResponse);

      // Extract order details
      const { result: orderData } = createOrderResponse.data;
      console.log("Extracted order data:", orderData);
      const {
        id: orderId,
        key,
        amount: orderAmount,
        currency,
      } = orderData || {};

      if (!orderId || !key) {
        console.error(
          "Invalid order data received from the backend:",
          orderData
        );
        throw new Error("Invalid order data received from the backend");
      }

      console.log("Razorpay order data:", {
        orderId,
        key,
        orderAmount,
        currency,
      });

      const options = {
        key,
        amount: orderAmount,
        currency,
        name: "Ghar Ki Rasoi",
        description: "Payment for your order",
        order_id: orderId,
        handler: async (response) => {
          console.log("Payment successful:", response);
          const paymentStatusResponse = await axios.post(
            `${this.PAYMENT_API_BASE_URL}/paymentStatus`,
            null,
            {
              params: {
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                status: "SUCCESS",
                receipt: response.razorpay_order_id,
              },
            }
          );

          console.log("Payment status response:", paymentStatusResponse);

          if (
            paymentStatusResponse.data.message ===
            "Payment Status Updated Successfully"
          ) {
            toast.success("Payment successful! Thank You For Your Order", {
              position: "top-center",
            });
          } else {
            toast.error("Failed to update payment status.", {
              position: "top-center",
            });
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#F37254",
        },
      };

      console.log("Razorpay options before opening payment page:", options);

      const rzp = new window.Razorpay(options);
      console.log("Razorpay instance created:", rzp);
      rzp.open();

      rzp.on("payment.failed", async (response) => {
        console.error("Payment failed:", response);
        await axios.post(`${this.PAYMENT_API_BASE_URL}/paymentStatus`, null, {
          params: {
            paymentId: response.error.metadata.payment_id,
            orderId: response.error.metadata.order_id,
            status: "FAILED",
            receipt: response.error.metadata.order_id,
          },
        });
        toast.error("Payment failed. Please try again.", {
          position: "top-center",
        });
      });
    } catch (error) {
      console.error("Error during Razorpay payment initiation:", error);
      toast.error(
        error.message || "Payment initiation failed. Please try again.",
        {
          position: "top-center",
        }
      );
    }
  };
}

export default new PaymentService();
