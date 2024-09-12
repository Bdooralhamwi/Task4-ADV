import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // يمكنك تخصيص الألوان والأحجام هنا
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="custom-footer bg-light text-muted py-5">
      <Container>
        <Row>
          <Col md={3} sm={12} className="mb-4">
            <h5 className="text-uppercase">Medicio</h5>
            <p>A108 Adam Street<br />New York, NY 535022</p>
            <p> <b>Phone</b>: +1 5589 55488 55</p>
            <p> <b>Email</b>: info@example.com</p>
            <div className="social-icons">
                <FaXTwitter className='tt'/>
                <FaFacebook className='tt'/>
                <FaInstagram className='tt'/>
                <FaLinkedin className='tt'/>
            </div>
          </Col>

          <Col md={2} sm={6} className="mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </Col>

          <Col md={2} sm={6} className="mb-4">
            <h5>Hic solutasetp</h5>
            <ul className="list-unstyled">
              <li><a href="#">Molestiae accusamus iure</a></li>
              <li><a href="#">Excepturi dignissimos</a></li>
              <li><a href="#">Suscipit distinctio</a></li>
              <li><a href="#">Dilecta</a></li>
              <li><a href="#">Sit quas consectetur</a></li>
            </ul>
          </Col>

          <Col md={2} sm={6} className="mb-4">
            <h5>Nobis illum</h5>
            <ul className="list-unstyled">
              <li><a href="#">Ipsam</a></li>
              <li><a href="#">Laudantium dolorum</a></li>
              <li><a href="#">Dinera</a></li>
              <li><a href="#">Trodellas</a></li>
              <li><a href="#">Flexo</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <p className="mt-4">© Copyright <strong>Medicio</strong>. All Rights Reserved<br />
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
