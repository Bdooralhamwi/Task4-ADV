import Slider from "react-slick";
import { Container, Card, Image } from 'react-bootstrap';
import "./Testimonials.css";


const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-sec bg-light py-5 bg-white">
      <Container className="my-5  "  >
        {/* Title Section */}
        <div className="container-sec">
          <h2 className="h2-titel-sec fw-bolder text-center fs-2"> Testimonials</h2>
          <div className="border-bottom mt-3  m-auto div-border-sec"></div>
          <p className="para-sec text-center mt-3 mb-5">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        {/* Slider */}
        <Slider className="slider" {...settings}>
          {[
            {
              text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
              img: "/public/assets/img/testimonials-1.jpg",
              name: "Matt Brandon",
              title: "Freelancer",
            },
            {
              text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
              img: "/public/assets/img/testimonials-2.jpg",
              name: "John Larson",
              title: "Entrepreneur",
            },
            {
              text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
              img: "/public/assets/img/testimonials-3.jpg",
              name: "Saul Goodman",
              title: "CEO & Founder",
            },
            {
              text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
              img: "/public/assets/img/testimonials-4.jpg",
              name: "Saul Goodman",
              title: "CEO & Founder",
            },
          ].map((testimonial, index) => (
            <div key={index}>
              <Card className="text-center border-0 mb-4 ">
                <Card.Body className=" bg-light ">
                  <blockquote className="blockquote border-0 mb-0">
                    <p>{testimonial.text}</p>
                  </blockquote>
                </Card.Body>
                <Card.Footer className="border-0 text-left ">
                  <Image
                    src={testimonial.img}
                    roundedCircle
                    width="75"
                    className="mb-3 imi"
                  />
                  <h5>{testimonial.name}</h5>
                  <small className="text-muted ">{testimonial.title}</small>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default TestimonialsSlider;
