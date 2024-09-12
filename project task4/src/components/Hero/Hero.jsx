import { Button, Carousel } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="Hero-section">
        <Carousel className="w-100 vh-100">
          <Carousel.Item>
            <img
              src="/assets/img/hero-carousel-1.jpg"
              alt="hero-carousel-1"
              className="w-100 vh-100 d-block"
            />
            <Carousel.Caption className="bg-white  bg-opacity-75 border-top-4 top-50 start-50 translate-middle margin-bottom  ">
              <h2 className="hero-text fw-bold  fs-1">
                Temporibus autem quibusdam
              </h2>
              <p className="hero-p">
                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt omnis iste natus error sit voluptatem accusantium.
              </p>
              <Button
                variant="primary"
                className=" buts bg-my-primary border border-0 rounded-2 px-4 "
              >
                Read More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/assets/img/hero-carousel-2.jpg"
              alt="hero-carousel-2"
              className="w-100 vh-100 d-block"
            />
            <Carousel.Caption className="bg-white  bg-opacity-75 border-top-4 top-50 start-50 translate-middle margin-bottom   ">
              <h2 className="hero-text fw-bold fs-1">
                Temporibus autem quibusdam
              </h2>
              <p className="hero-p">
                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt omnis iste natus error sit voluptatem accusantium.
              </p>
              <Button
                variant="primary"
                className="bg-my-primary border border-0 rounded-2 px-4"
              >
                Read More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/assets/img/hero-carousel-3.jpg"
              alt="hero-carousel-3"
              className="w-100 vh-100 d-block"
            />
            <Carousel.Caption className=" bg-white  bg-opacity-75 border-top-4 top-50 start-50 translate-middle margin-bottom ">
              <h2 className="hero-text fw-bold fs-1">
                Temporibus autem quibusdam
              </h2>
              <p className="hero-p">
                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt omnis iste natus error sit voluptatem accusantium.
              </p>
              <Button
                variant="primary"
                className="   bg-my-primary  border border-0 rounded-2 px-4 "
              >
                Read More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
