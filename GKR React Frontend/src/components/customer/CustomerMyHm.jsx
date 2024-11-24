import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Container,
  Table,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import SessionService from "../../service/SessionService";
import CustomerService from "../../service/CustomerService";
import PaymentService from "../../service/PaymentService"; // Import PaymentService
import { useNavigate } from "react-router-dom";

const CustomerMyHm = () => {
  const [homeMaker, setHomeMaker] = useState({});
  const [user, setUser] = useState(SessionService.getCurrentUser());
  const history = useNavigate();

  useEffect(() => {
    document.title = "My Home Maker";
    CustomerService.getMyHomeMaker(SessionService.getCurrentUser().id)
      .then((response) => {
        setHomeMaker(response.data.result);
        SessionService.storeHomeMaker(response.data.result);
      })
      .catch((error) => {
        toast.error("Failed to load home maker details", {
          position: "bottom-center",
        });
      });
  }, []);

  const removeHomeMaker = () => {
    CustomerService.removeMyHomeMaker(SessionService.getCurrentUser().id)
      .then((response) => {
        toast.success(response.data);
        setHomeMaker(null);
        SessionService.removeHomeMaker();
        history("/customer/HomeMaker");
      })
      .catch((error) => {
        toast.error("Failed to remove home maker", {
          position: "bottom-center",
        });
      });
  };

  const buttonHandle = (pack, price) => {
    const planType = document.getElementById("plan-type").value;
    const homeMakerId = homeMaker.id;
    const customerId = user.id;
    CustomerService.updatePackage(planType, pack)
      .then((response) => {
        SessionService.storeUser(response.data.result);
        setUser(SessionService.getCurrentUser());
        SessionService.setPrice(price);
        PaymentService.initiateRazorpayPayment(customerId, homeMakerId, price);
      })
      .catch((error) => {
        toast.error("Failed to update package", { position: "bottom-center" });
      });
  };

  const cardStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    overflow: "hidden",
    width: "300px",
    height: "400px",
    textAlign: "center",
    margin: "0 auto",
  };

  const cardImgStyle = {
    height: "250px",
    objectFit: "cover",
  };

  return (
    <div className="text-center">
      <Container
        className="text-center"
        style={{
          background: "darkgray",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Selected HomeMaker Details
        </h1>
        <p style={{ fontSize: "16px", color: "#555" }}>
          You can manage your home makers here...
        </p>
        {homeMaker ? (
          <>
            <Table
              className="table table-striped"
              hover
              bordered
              style={{ marginTop: "20px", borderRadius: "5px" }}
            >
              <thead
                style={{
                  background: "#333",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{homeMaker.name}</td>
                  <td>{homeMaker.email}</td>
                  <td>{homeMaker.phoneNo}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={removeHomeMaker}
                      style={{ borderRadius: "5px", padding: "8px 12px" }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Container
              className="text-center"
              style={{
                backgroundColor: "#333",
                padding: "20px",
                borderRadius: "8px",
                marginTop: "30px",
              }}
            >
              {user.planType && (
                <h2
                  style={{
                    color: "white",
                    fontSize: "22px",
                    marginBottom: "20px",
                  }}
                >
                  Your selected plan:{" "}
                  <span
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    {user.planType}
                  </span>{" "}
                  and package:{" "}
                  <span
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    {user.planPackage}
                  </span>
                </h2>
              )}
              <h2
                style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
              >
                Select/Change Your Plan
              </h2>
              <p style={{ color: "white", fontSize: "16px" }}>
                You can manage your Plans here...
              </p>
              <select
                className="form-select selectpicker my-3 btn btn-info"
                id="plan-type"
                style={{ borderRadius: "5px", padding: "8px 12px" }}
              >
                <option defaultValue value="VEG">
                  Veg
                </option>
                <option value="NON_VEG">Non-veg</option>
              </select>

              <CardDeck
                style={{
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                {[
                  {
                    title: "Mini",
                    subtitle: "Curb Instant Cravings",
                    price: 1800,
                    img: "https://i.pinimg.com/originals/5f/8d/e8/5f8de8ccdf8c63c081347690ce87b3ce.png",
                  },
                  {
                    title: "Classic",
                    subtitle: "Serves 2 - A Proper Home-Cooked Delicacy",
                    price: 2400,
                    img: "https://i.pinimg.com/originals/d4/30/1c/d4301c6b1ff43529fd646fe49166e9e1.jpg",
                  },
                  {
                    title: "Jumbo",
                    subtitle: "Serves 4 - Sharing Is Caring",
                    price: 3000,
                    img: "https://i.pinimg.com/736x/3f/aa/04/3faa04682ec48de810f1260988847aab.jpg",
                  },
                ].map((pkg, index) => (
                  <Card key={index} style={cardStyle}>
                    <CardImg
                      top
                      src={pkg.img}
                      alt={`${pkg.title} image`}
                      style={cardImgStyle}
                    />
                    <CardBody>
                      <CardTitle
                        tag="h5"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        {pkg.title}
                      </CardTitle>
                      <CardSubtitle
                        tag="h6"
                        className="mb-2 text-muted"
                        style={{ fontSize: "14px" }}
                      >
                        {pkg.subtitle}
                      </CardSubtitle>
                      <Button
                        className="btn-info"
                        onClick={() =>
                          buttonHandle(pkg.title.toUpperCase(), pkg.price)
                        }
                        style={{
                          marginTop: "10px",
                          padding: "10px 20px",
                          borderRadius: "5px",
                          fontSize: "16px",
                        }}
                      >
                        &#8377;{pkg.price}
                      </Button>
                    </CardBody>
                  </Card>
                ))}
              </CardDeck>
            </Container>
          </>
        ) : (
          history("/customer/HomeMaker")
        )}
      </Container>
    </div>
  );
};

export default CustomerMyHm;
