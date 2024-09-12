import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import "./Pricing.css";


const Pricing = () => {
  const pricingData = [
    {
      title: 'Free',
      price: '0',
      features: ['Aida dere', 'Nec feugiat nisl', 'Nulla at volutpat dola'],
      disabledFeatures: ['Pharetra massa', 'Massa ultricies mi'],
      buttonLabel: 'Buy Now',
      highlight: false
    },
    {
      title: 'Business',
      price: '19',
      features: ['Aida dere', 'Nec feugiat nisl', 'Nulla at volutpat dola', 'Pharetra massa'],
      disabledFeatures: ['Massa ultricies mi'],
      buttonLabel: 'Buy Now',
      highlight: true
    },
    {
      title: 'Developer',
      price: '29',
      features: ['Aida dere', 'Nec feugiat nisl', 'Nulla at volutpat dola', 'Pharetra massa', 'Massa ultricies mi'],
      buttonLabel: 'Buy Now',
      highlight: false
    },
    {
      title: 'Ultimate',
      price: '49',
      features: ['Aida dere', 'Nec feugiat nisl', 'Nulla at volutpat dola', 'Pharetra massa', 'Massa ultricies mi'],
      buttonLabel: 'Buy Now',
      highlight: false,
      ribbon: 'Advanced'
    }
  ];

  return (


    <>
    <div className='bg-light'>

    
    
    <section className="pricing-sec py-5 ">
      <Container className="text-center my-5">
      <div className="container-sec">
          <h2 className="h2-titel-sec fw-bolder text-center fs-2"> Pricing</h2>
          <div className="border-bottom mt-3  m-auto div-border-sec"></div>
          <p className="para-sec text-center mt-3">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <Row>
          {pricingData.map((plan, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className={`h-100 position-relative  card-pricing`}>
                {plan.ribbon && (
                  <div className="ribbon">
                    <span>{plan.ribbon}</span>
                  </div>
                )}
                <Card.Header className={`text-center ${plan.highlight ? 'acttive text-white' : ''}card-header-pricing`}>
                  <h5 className="my-2">{plan.title}</h5>
                </Card.Header>
                <Card.Body className="text-center card-body-pricing">
                  <h6 className="price display-4">
                    ${plan.price}
                    <span className="text-muted">/month</span>
                  </h6>
                  <ul className="list-unstyled">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                    {plan.disabledFeatures &&
                      plan.disabledFeatures.map((feature, i) => (
                        <li key={i} className="text-muted text-decoration-line-through">
                          {feature}
                        </li>
                      ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center border-0 bton-pricing">
                  <Button variant="info">{plan.buttonLabel}</Button>
                </Card.Footer>
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

export default Pricing;
