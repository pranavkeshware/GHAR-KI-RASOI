package com.app.controller;

import com.app.dto.ResponseDTO;
import com.app.pojos.Orders;
import com.app.service.OrdersServiceImpl;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.util.StreamUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;


@CrossOrigin
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private OrdersServiceImpl ordersService;

    @Value("${razorpay.webhook.secret}")
    private String razorpayWebhookSecret; // Fetch webhook secret from properties file

    @Value("${razorpay.key.id}")
    private String keyId; // Razorpay Key ID

    // Endpoint to create an order and initiate payment with Razorpay
    @PostMapping("/createOrder")
    public ResponseEntity<ResponseDTO> createOrder(@RequestParam int customerId, @RequestParam int homeMakerId, @RequestParam String amount) {
        try {
            Orders order = ordersService.createOrder(customerId, homeMakerId, amount);

            // Create response object with order details and Razorpay key
            Map<String, Object> orderResponse = new HashMap<>();
            orderResponse.put("id", order.getOrderId()); // Razorpay order ID
            orderResponse.put("key", keyId); // Add the Razorpay API Key ID
            orderResponse.put("amount", Long.parseLong(amount) * 100); // Amount in paise
            orderResponse.put("currency", "INR"); // Currency

            return ResponseEntity.ok(new ResponseDTO("Order Created Successfully", orderResponse));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ResponseDTO("Failed to create order", null));
        }
    }

    // Endpoint to handle Razorpay payment status update after transaction
    @PostMapping("/paymentStatus")
    public ResponseEntity<ResponseDTO> updatePaymentStatus(
            @RequestParam String paymentId,
            @RequestParam String orderId,
            @RequestParam String status,
            @RequestParam String receipt) {

        Orders updatedOrder = ordersService.updatePaymentStatus(paymentId, orderId, status, receipt);
        if (updatedOrder != null) {
            return ResponseEntity.ok(new ResponseDTO("Payment Status Updated Successfully", updatedOrder));
        } else {
            return ResponseEntity.status(404).body(new ResponseDTO("Order Not Found", null));
        }
    }
}

