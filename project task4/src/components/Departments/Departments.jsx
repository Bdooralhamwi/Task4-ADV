import { useState } from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import './Departments.css';


function Departments() {
  const [activeDepartment, setActiveDepartment] = useState('Ophthalmologists');

  const handleDepartmentClick = (department) => {
    setActiveDepartment(department);
  };

  return (
    <section className='departments-sec'>
      <Container className="my-5">
        {/* Title */}
        <div className="container-sec">
          <h2 className="h2-titel-sec fw-bolder text-center fs-2"> Departments</h2>
          <div className="border-bottom mt-3  m-auto div-border-sec"></div>
          <p className="para-sec text-center mt-3 mb-5">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <Row>
          <Col md={3} xs={12} className="order-1 order-md-1">
            <ListGroup>
              {['Ophthalmologists', 'Cardiology', 'Neurology', 'Hepatology', 'Pediatrics'].map((department) => (
                <ListGroup.Item
                  key={department}
                  className={`custom-border ${activeDepartment === department ? 'active-department' : ''}`}
                  onClick={() => handleDepartmentClick(department)}
                  action
                >
                  {department}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Main Content */}
          <Col md={6} xs={12} className="order-3 order-md-2">
            <h3 className='mb-3'>{activeDepartment}</h3>
            <h5 className="text-muted mb-3">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</h5>
            <p>
              Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui.
              Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel.
            </p>
          </Col>

          {/* Image */}
          <Col md={3} xs={12} className="order-2 order-md-3">
            <Image
              src="/public/assets/img/departments-1.jpg"
              alt="Ophthalmology department"
              fluid
              rounded
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Departments;
