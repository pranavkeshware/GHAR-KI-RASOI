// import React, { useEffect } from "react";
// import {
//   CardGroup,
//   Card,
//   CardBody,
//   CardImg,
//   CardText,
//   CardTitle,
//   CardSubtitle,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
// import { UncontrolledCarousel } from "reactstrap";

// const Home = () => {
//   useEffect(() => {
//     document.title = "Home || Ghar Ki Rasoi";
//   }, []);

//   const items = [
//     {
//       src: "https://www.krishnaangiraphotography.com/img/indian-food-1.jpg",
//       altText: "Slide 1",
//       caption:
//         "This is a Tiffin Management System that tends to provide Tiffin Services to the Customers (Bachelors) and simultaneously provide Employment to the Homemakers.",
//       header: "GHAR KI RASOI",
//       key: "1",
//     },
//     {
//       src: "https://www.krishnaangiraphotography.com/img/indian-food-6.jpg",
//       altText: "Slide 2",
//       caption: "Craving mitigations for Bachelors in a budget",
//       header: "Craving mitigations for Bachelors",
//       key: "2",
//     },
//     {
//       src: "https://www.krishnaangiraphotography.com/img/indian-food-5.jpg",
//       altText: "Slide 3",
//       caption: "Employment opportunities for Home Makers",
//       header: "Employment for Home Makers",
//       key: "3",
//     },
//   ];

//   return (
//     <div>
//       <div
//         style={{
//           backgroundColor: "#333",
//           padding: "2rem",
//           textAlign: "center",
//         }}
//       >
//         <h1 style={{ color: "white" }}>Welcome to Ghar Ki Rasoi</h1>
//         <UncontrolledCarousel items={items} />
//       </div>
//       <Container className="mt-4">
//         <Row>
//           <Col md="4" className="mb-4">
//             <Card>
//               <CardImg
//                 top
//                 width="100%"
//                 height="300px"
//                 src="https://i.pinimg.com/originals/5f/8d/e8/5f8de8ccdf8c63c081347690ce87b3ce.png"
//                 alt="Mini Package"
//               />
//               <CardBody>
//                 <CardTitle tag="h5">Mini Package</CardTitle>
//                 <CardSubtitle tag="h6" className="mb-2 text-muted">
//                   Serves 1 - Perfect for quick cravings
//                 </CardSubtitle>
//                 <CardText>
//                   Designed for those who prefer a light, quick meal without
//                   compromising taste.
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col md="4" className="mb-4">
//             <Card>
//               <CardImg
//                 top
//                 width="100%"
//                 height="300px"
//                 src="https://i.pinimg.com/originals/d4/30/1c/d4301c6b1ff43529fd646fe49166e9e1.jpg"
//                 alt="Classic Package"
//               />
//               <CardBody>
//                 <CardTitle tag="h5">Classic Package</CardTitle>
//                 <CardSubtitle tag="h6" className="mb-2 text-muted">
//                   Serves 2 - A proper home-cooked delicacy
//                 </CardSubtitle>
//                 <CardText>
//                   This package offers a hearty meal, just like home-cooked food,
//                   for two people.
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col md="4" className="mb-4">
//             <Card>
//               <CardImg
//                 top
//                 width="100%"
//                 height="300px"
//                 src="https://i.pinimg.com/736x/3f/aa/04/3faa04682ec48de810f1260988847aab.jpg"
//                 alt="Jumbo Package"
//               />
//               <CardBody>
//                 <CardTitle tag="h5">Jumbo Package</CardTitle>
//                 <CardSubtitle tag="h6" className="mb-2 text-muted">
//                   Serves 4 - Perfect for group sharing
//                 </CardSubtitle>
//                 <CardText>
//                   Ideal for family gatherings or sharing with friends, this
//                   package serves up to four people.
//                 </CardText>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { UncontrolledCarousel } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home || Ghar Ki Rasoi";
  }, []);

  const items = [
    {
      src: "https://www.krishnaangiraphotography.com/img/indian-food-1.jpg",
      altText: "Slide 1",
      caption:
        "This is a Tiffin Management System that tends to provide Tiffin Services to the Customers (Bachelors) and simultaneously provide Employment to the Homemakers.",
      header: "GHAR KI RASOI",
      key: "1",
    },
    {
      src: "https://www.krishnaangiraphotography.com/img/indian-food-6.jpg",
      altText: "Slide 2",
      caption: "Craving mitigations for Bachelors in a budget",
      header: "Craving mitigations for Bachelors",
      key: "2",
    },
    {
      src: "https://www.krishnaangiraphotography.com/img/indian-food-5.jpg",
      altText: "Slide 3",
      caption: "Employment opportunities for Home Makers",
      header: "Employment for Home Makers",
      key: "3",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: "#333",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white" }}>Welcome to Ghar Ki Rasoi</h1>
        <UncontrolledCarousel items={items} />
      </div>
      <Container className="mt-4">
        <Row>
          <Col md="4" className="mb-4">
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardImg
                top
                width="100%"
                height="300px"
                src="https://i.pinimg.com/originals/5f/8d/e8/5f8de8ccdf8c63c081347690ce87b3ce.png"
                alt="Mini Package"
              />
              <CardBody style={{ flexGrow: 1 }}>
                <CardTitle tag="h5">Mini Package</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Serves 1 - Perfect for quick cravings
                </CardSubtitle>
                <CardText>
                  Designed for those who prefer a light, quick meal without
                  compromising taste.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardImg
                top
                width="100%"
                height="300px"
                src="https://i.pinimg.com/originals/d4/30/1c/d4301c6b1ff43529fd646fe49166e9e1.jpg"
                alt="Classic Package"
              />
              <CardBody style={{ flexGrow: 1 }}>
                <CardTitle tag="h5">Classic Package</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Serves 2 - A proper home-cooked delicacy
                </CardSubtitle>
                <CardText>
                  This package offers a hearty meal, just like home-cooked food,
                  for two people.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="mb-4">
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardImg
                top
                width="100%"
                height="300px"
                src="https://i.pinimg.com/736x/3f/aa/04/3faa04682ec48de810f1260988847aab.jpg"
                alt="Jumbo Package"
              />
              <CardBody style={{ flexGrow: 1 }}>
                <CardTitle tag="h5">Jumbo Package</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Serves 4 - Perfect for group sharing
                </CardSubtitle>
                <CardText>
                  Ideal for family gatherings or sharing with friends, this
                  package serves up to four people.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
