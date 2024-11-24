import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Card,
} from "reactstrap";
import SessionService from "../service/SessionService";
import CustomerService from "../service/CustomerService";
import HomeMakerService from "../service/HomeMakerService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("");
  const [user, setUser] = useState({});
  const [service, setService] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  const showSignupForm = (role) => {
    setRole(role);
    document.title =
      role === "customer" ? "Customer Signup" : "Home Maker Signup";
    setService(role === "customer" ? CustomerService : HomeMakerService);
  };

  const validateForm = () => {
    const {
      email,
      password,
      name,
      phoneNo,
      primaryAddress,
      city,
      state,
      country,
      pincode,
    } = user;
    if (
      !email ||
      !password ||
      !name ||
      !phoneNo ||
      !primaryAddress ||
      !city ||
      !state ||
      !country ||
      !pincode
    ) {
      toast.error("Please fill in all the required fields!", {
        position: "bottom-center",
      });
      return false;
    }
    return true;
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    service
      .addUser(user)
      .then((response) => {
        toast.success(
          `Status: ${response.status} Name: ${response.data.result.name}`,
          { position: "bottom-center" }
        );

        SessionService.storeUser(response.data.result);
        SessionService.setRole(role);

        navigate("/user", { state: { role } });

        window.location.reload();
      })
      .catch((error) => {
        toast.warning("User exists with this email", {
          position: "bottom-center",
        });
      });
  };

  return (
    <div>
      <ToastContainer />
      {!role && (
        <Container className="signup-component mt-5">
          <Row className="d-flex justify-content-center">
            <Col md={5} className="mb-4">
              <Card className="shadow-lg rounded p-4 text-center">
                <h5 className="mb-3">Customer</h5>
                <Button
                  color="warning"
                  className="font-weight-bold btn-block"
                  onClick={() => showSignupForm("customer")}
                >
                  Sign Up as Customer
                </Button>
              </Card>
            </Col>
            <Col md={5} className="mb-4">
              <Card className="shadow-lg rounded p-4 text-center">
                <h5 className="mb-3">Home Maker</h5>
                <Button
                  color="warning"
                  className="font-weight-bold btn-block"
                  onClick={() => showSignupForm("homeMaker")}
                >
                  Sign Up as Home Maker
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      )}

      {role && (
        <Container className="signup-form mt-5">
          <Card className="shadow-lg rounded p-4">
            <Fragment>
              <Form onSubmit={handleForm}>
                <h3 className="text-center my-4">Register as {role}</h3>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="email"
                        placeholder="Enter Email"
                        className="form-control-lg"
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="password"
                        placeholder="Enter Password"
                        className="form-control-lg"
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        placeholder="Enter Name"
                        className="form-control-lg"
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="form-control-lg"
                        onChange={(e) =>
                          setUser({ ...user, phoneNo: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Enter Primary Address"
                    className="form-control-lg"
                    onChange={(e) =>
                      setUser({ ...user, primaryAddress: e.target.value })
                    }
                  />
                </FormGroup>
                <Row>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        type="text"
                        placeholder="City"
                        className="form-control-lg"
                        onChange={(e) =>
                          setUser({ ...user, city: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        type="text"
                        placeholder="State"
                        className="form-control-lg"
                        onChange={(e) =>
                          setUser({ ...user, state: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        type="text"
                        placeholder="Country"
                        className="form-control-lg"
                        onChange={(e) =>
                          setUser({ ...user, country: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Input
                        type="number"
                        placeholder="Pincode"
                        className="form-control-lg"
                        onChange={(e) =>
                          setUser({ ...user, pincode: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="text-center">
                    <Button type="submit" color="success" className="btn-lg">
                      Sign Up
                    </Button>
                  </Col>
                  <Col md={6} className="text-center">
                    <Button
                      type="reset"
                      color="warning"
                      className="btn-lg"
                      onClick={() => setUser({})}
                    >
                      Clear
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Fragment>
          </Card>
        </Container>
      )}
    </div>
  );
};

export default Signup;
