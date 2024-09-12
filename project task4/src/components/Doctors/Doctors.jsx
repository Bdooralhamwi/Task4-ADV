import React, { useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Doctors.css";


const Doctors = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const profiles = [
    {
      name: "John Doe",
      title: "Web Developer",
      img: "/public/assets/img/doctors-1.jpg",
    },
    {
      name: "Jane Smith",
      title: "Graphic Designer",
      img: "/public/assets/img/doctors-2.jpg",
    },
    {
      name: "David Johnson",
      title: "Software Engineer",
      img: "/public/assets/img/doctors-3.jpg",
    },
    {
      name: "Emily Davis",
      title: "Product Manager",
      img: "/public/assets/img/doctors-4.jpg",
    },
  ];

  return (
    <>
    <div className="bg-light "> 

    
    <section className="doctor-sec py-5 bg-light ">
      <Container className="my-5">
        {/* Title Section */}
        <div className="container-sec">
          <h2 className="h2-titel-sec fw-bolder text-center fs-2"> Doctors</h2>
          <div className="border-bottom mt-3  m-auto div-border-sec"></div>
          <p className="para-sec text-center mt-3 mb-5">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        {/* Profiles Row */}
        <Row className="justify-content-center">
          {profiles.map((profile, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
              <Card className="profile-card shadow-sm">
                <div
                  className="position-relative image-container"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={profile.img}
                    fluid
                    className="profile-image"
                  />
                  <div
                    className={`icons-container ${
                      hoveredCard === index ? "show-icons" : ""
                    }`}
                  >
                    <a href="#" className="icon d-inline-block">
                      <FaXTwitter />
                    </a>
                    <a href="#" className="icon d-inline-block">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="icon d-inline-block">
                      <FaInstagram />
                    </a>
                    <a href="#" className="icon d-inline-block">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{profile.name}</Card.Title>
                  <Card.Text className="text-muted">{profile.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </div>

    </>

  );
};

export default Doctors;
