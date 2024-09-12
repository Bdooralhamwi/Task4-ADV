import {
  FaDna,
  FaHospitalUser,
  FaNotesMedical,
  FaPills,
  FaWheelchair,
} from "react-icons/fa6";
import "./Services.css";
import { FaHeartbeat } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";

const Services = () => {
  const services = [
    {
      icon: <FaPills />, 
      title: "Nesciunt Mete",
      description:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      icon: <FaHeartbeat />, 
      title: "Eosle Commodi",
      description:
        "Ut autem aut autem non a. Sint sint sit facilis nam justo sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    },
    {
      icon: <FaHospitalUser />, 
      title: "Ledo Markt",
      description:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    },
    {
      icon: <FaDna />, // Replace with actual icon paths or components
      title: "Asperiores Commodit",
      description:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    },
    {
      icon: <FaWheelchair />, // Replace with actual icon paths or components
      title: "Velit Doloremque",
      description:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi ut autem alias eius labore.",
    },
    {
      icon: <FaNotesMedical />, // Replace with actual icon paths or components
      title: "Dolori Architecto",
      description:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    },
  ];
  return (
    <>
      <section className="Services-sec">
        <div className="container-sec">
          <h2 className="h2-titel-sec fw-bolder text-center fs-2"> Services</h2>
          <div className="border-bottom mt-3  m-auto div-border-sec"></div>
          <p className="para-sec text-center mt-3 mb-5">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4 text-center ">
              <Card className=" border-0 card-services  ">
                <Card.Body>
                  <div className="mb-3">
                    {/* You can use an <img> or <i> element for the icon */}
                    <div className="photo-services">{service.icon}</div>
                  </div>
                  <Card.Title className="fw-bold title-services">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="mt-4">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Services;
