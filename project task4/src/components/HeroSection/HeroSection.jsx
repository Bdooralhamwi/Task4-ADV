import { FaDna, FaHeartbeat, FaPills, FaThermometer } from "react-icons/fa";
import "./HeroSection.css";
import { Card } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <div className=" d-block ">
        <div className= " pt-5   " 
        
        >

          <Card
            className=" card mb-3  rounded border border-white  d-flex flex-row gap-4    "
            style={{ width: "90%" ,margin:"0 auto",   }}
          >
            <Card.Body className="padding shadow ">
              <div className="mb-3  color fs-2 ">
                <FaHeartbeat  />
              </div>
              <Card.Title className="fw-bold fs-5 mb-3 text-color">
                Lorem Ipsum
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </Card.Text>
            </Card.Body>

            <Card.Body className="padding  shadow">
              <div className="mb-3  color fs-2">
                <FaPills />
              </div>
              <Card.Title className="fw-bold fs-5 mb-3 text-color">
                Sed ut perspici
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </Card.Text>
            </Card.Body>

            <Card.Body className="padding shadow">
              <div className="mb-3 color fs-2">
                <FaThermometer />
              </div>
              <Card.Title className="fw-bold fs-5 mb-3 text-color">
                Magni Dolores
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </Card.Text>
            </Card.Body>
            <Card.Body className="padding shadow">
              <div className="mb-3  color fs-2">
                <FaDna />
              </div>
              <Card.Title className="fw-bold fs-5 mb-3 text-color">
                Nemo Enim
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
    </>
  );
};

export default HeroSection;
