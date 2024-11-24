import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="mb-4">
          {/* Column 1 */}
          <Col md={3} sm={6} className="mb-3">
            <h5 className="fw-bold text-uppercase mb-3">Ghar Ka Khana</h5>
            <ul className="list-unstyled">
              <li className="mb-2">+91-7000329812</li>
              <li className="mb-2">Paud Road, Kothrud</li>
              <li>Pune, INDIA</li>
            </ul>
          </Col>
          {/* Column 2 */}
          <Col md={3} sm={6} className="mb-3">
            <h5 className="fw-bold text-uppercase mb-3">For Customers</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Code of Conduct
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Blogger Help
                </a>
              </li>
            </ul>
          </Col>
          {/* Column 3 */}
          <Col md={3} sm={6} className="mb-3">
            <h5 className="fw-bold text-uppercase mb-3">For Home Makers</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="" className="text-light text-decoration-none">
                  Claim your listing
                </a>
              </li>
              <li className="mb-2">
                <a href="" className="text-light text-decoration-none">
                  Business App
                </a>
              </li>
              <li>
                <a href="" className="text-light text-decoration-none">
                  Products for Businesses
                </a>
              </li>
            </ul>
          </Col>
          {/* Column 4 */}
          <Col md={3} sm={6} className="mb-3 text-center">
            <h5 className="fw-bold text-uppercase mb-3">Connect With Us</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none mx-2"
              >
                <img
                  src="/icons8-insta-48.png"
                  alt="Instagram"
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none mx-2"
              >
                <img
                  src="/icons8-fb-48.png"
                  alt="Facebook"
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none mx-2"
              >
                <img
                  src="/icons8-linkedin-48.png"
                  alt="LinkedIn"
                  className="img-fluid"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <div className="text-center text-muted mt-3">
          <p className="mb-0 text-decoration-none text-light">
            Copyright &copy; {new Date().getFullYear()} GHAR Ki Rasoi™ | GKR® is
            a registered trademark of the Ghar ki Rasoi, Inc. | All Rights
            Reserved |{" "}
            <a href="#" className="text-decoration-none text-light">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#" className="text-decoration-none text-light">
              Privacy Policy
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
