import { Button, Form, InputGroup } from "react-bootstrap";
import "./Appointment.css";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

const Appointment = () => {
  return (
    <>
      <section className="Appointment-sec">
        <div className="container-sec">
          <h2 className="h2-titel-sec fw-bolder text-center fs-2">
            {" "}
            MAKE AN APPOINTMENT
          </h2>
          <div className="border-bottom mt-3  m-auto div-border-sec"></div>
          <p className="para-sec text-center mt-3">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <Form className="mt-5 ">
          <div className="row">
            <div className="col-md-4 form-group ">
              <Form.Group className="mb-3 " controlId="formBasicName">
                <Form.Control type="name" placeholder="Your Name" />
              </Form.Group>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control type="phone" placeholder="Your Phone" />
              </Form.Group>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
          <input className="w-100 h-100 border border-1 px-2 rounded-2 "  type="date" name="date" id="date" />

            </div>
            <div className="col-md-4 form-group mt-3">
              <Form.Select aria-label="Default select example">
              <option value="">Select Department</option>
              <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
                <option value="Department 3">Department 3</option>
              </Form.Select> </div>
            <div className="col-md-4 form-group mt-3">
              <Form.Select aria-label="Default select example">
                <option>Select Doctor</option>
                <option value="Doctor 1">Doctor1</option>
                <option value="Doctor 2">Doctor 2 </option>
                 <option value="Doctor 3">Doctor 3</option>
              </Form.Select>
            </div>

            
           
          </div>
          <div className="form-group mt-3">
            <textarea
              class="form-control"
              name="message"
              rows="5"
              placeholder="Message (Optional)"
            ></textarea>
          </div>
          <div className=" text-center mt-4 ">
            <Button
              className="bg-my-primary border border-0 rounded-2 px-4 py-2"
              variant="primary"
              type="submit"
            >
              Make an Appointment
            </Button>
          </div>
        </Form>
      </section>
    </>
  );
};

export default Appointment;
