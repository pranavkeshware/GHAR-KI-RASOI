import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import SessionService from "../service/SessionService";
import AdminService from "../service/AdminService";
import CustomerService from "../service/CustomerService";
import HomeMakerService from "../service/HomeMakerService";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [role, setRole] = useState();
  const [service, setService] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
    const currentUser = SessionService.getCurrentUser();
    setUser(currentUser ? currentUser : { email: "", password: "" }); // Set user to empty object if null
    setRole(SessionService.getRole());
  }, []);

  const showLoginForm = (role) => {
    setRole(role);
    if (role === "admin") {
      document.title = "Admin Login";
      setService(AdminService);
    }

    if (role === "customer") {
      document.title = "Customer Login";
      setService(CustomerService);
    }

    if (role === "homeMaker") {
      document.title = "HomeMaker Login";
      setService(HomeMakerService);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      toast.warning("Please fill all the required fields!", {
        position: "bottom-center",
      });
      return;
    }

    if (!service) {
      toast.error("Please select a role first!", { position: "bottom-center" });
      return;
    }

    service.authenticateUser(user.email, user.password).then(
      (response) => {
        if (response.status === 204) {
          toast.warning("Invalid Credentials!", { position: "bottom-center" });
        } else {
          toast.success(`Login successful. Welcome ${response.data.name}`, {
            position: "bottom-center",
          });

          SessionService.storeUser(response.data);
          SessionService.setRole(role);
          navigate("/user");
          window.location.reload();
        }
      },
      () => {
        toast.error("Something went wrong! Please try again.", {
          position: "bottom-center",
        });
      }
    );
  };

  return (
    <div>
      <ToastContainer />
      <Container>
        {!role && (
          <Container className="py-5">
            <Row className="justify-content-center">
              <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className="text-center shadow-sm">
                  <CardBody>
                    <CardTitle tag="h5" className="fw-bold text-primary">
                      Admin
                    </CardTitle>
                    <CardText>
                      Manage Customers, Home Makers, Orders, and more.
                    </CardText>
                    <Button
                      color="primary"
                      onClick={() => {
                        showLoginForm("admin");
                      }}
                    >
                      Admin Login
                    </Button>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className="text-center shadow-sm">
                  <CardBody>
                    <CardTitle tag="h5" className="fw-bold text-success">
                      Customer
                    </CardTitle>
                    <CardText>
                      Manage Profile, Food Packages, Home Makers, and more.
                    </CardText>
                    <Button
                      color="success"
                      onClick={() => {
                        showLoginForm("customer");
                      }}
                    >
                      Customer Login
                    </Button>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4} md={6} sm={12} className="mb-4">
                <Card className="text-center shadow-sm">
                  <CardBody>
                    <CardTitle tag="h5" className="fw-bold text-warning">
                      Home Maker
                    </CardTitle>
                    <CardText>
                      Manage Profile, Customers, Orders, and more.
                    </CardText>
                    <Button
                      color="warning"
                      onClick={() => {
                        showLoginForm("homeMaker");
                      }}
                    >
                      Home Maker Login
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        )}

        {role && user && (
          <Card className="mt-5 shadow-lg">
            <CardBody>
              <Fragment>
                <Form onSubmit={handleForm}>
                  <h3 className="text-center mb-4 text-primary fw-bold">
                    {role === "admin"
                      ? "Admin Login"
                      : role === "customer"
                      ? "Customer Login"
                      : "Home Maker Login"}
                  </h3>
                  <FormGroup>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      className="form-control-lg mb-3"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      className="form-control-lg mb-3"
                    />
                  </FormGroup>
                  <div className="text-center">
                    <Button
                      color="primary"
                      size="lg"
                      className="me-3"
                      type="submit"
                    >
                      Login
                    </Button>
                    <Button
                      color="secondary"
                      size="lg"
                      type="reset"
                      onClick={() => setUser({ email: "", password: "" })}
                    >
                      Clear
                    </Button>
                  </div>
                </Form>
              </Fragment>
            </CardBody>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default Login;
