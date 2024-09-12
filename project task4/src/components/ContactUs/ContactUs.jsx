import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import "./ContactUs.css";
import { BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';
import Map from '../Map';

const ContactUs = () => {
  return (
    <section className="py-5 contact-sec">
      <Container className='pl-0' >
      <div className="container-sec">
          <h2 className="h2-titel-sec fw-bolder text-center fs-2"> Contact</h2>
          <div className="border-bottom mt-3  m-auto div-border-sec"></div>
          <p className="para-sec text-center mt-3">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <Map />

        <Row className="mb-4">
        
        </Row>

        <Row className='row-cont'>
          {/* أعمدة البطاقات */}
          <Col lg={6} className='connon'>
            <div className="border p-4 mb-4 text-center w-100 bgbgbg">
              <div className="border border-primary rounded-circle d-inline-flex justify-content-center align-items-center p-3 mb-3" style={{ width: '50px', height: '50px' }}>
                <BsGeoAlt className='bgbg'/>
              </div>
              <h5>Address</h5>
              <span>A108 Adam Street, New York, NY 535022</span>
            </div>

            <Row>
              <Col xs={12} md={6} className="mb-4">
                <div className="border p-4 text-center bgbgbg">
                  <div className="border border-primary rounded-circle d-inline-flex justify-content-center align-items-center p-3 mb-3" style={{ width: '50px', height: '50px' }}>
                    <BsTelephone className='bgbg'/>
                  </div>
                  <h5>Call Us</h5>
                  <span>+1 5589 55488 55</span>
                </div>
              </Col>

              <Col xs={12} md={6} className="mb-4">
                <div className="border p-4 text-center bgbgbg">
                  <div className="border border-primary rounded-circle d-inline-flex justify-content-center align-items-center p-3 mb-3" style={{ width: '50px', height: '50px' }}>
                    <BsEnvelope className='bgbg'/>
                  </div>
                  <h5>Email Us</h5>
                  <span>info@example.com</span>
                </div>
              </Col>
            </Row>
          </Col>

          {/* الفورم */}
          <Col lg={6} className='form-contactUs-app'>
            <Form className="bg-light p-4 form-contactUs">
              <Row>
                <Col xs={12} md={6} className="mb-3">
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Control type="text" placeholder="Enter the subject" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button className='btn-contact' type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
