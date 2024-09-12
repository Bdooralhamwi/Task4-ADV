import { Image } from "react-bootstrap";
import "./AboutUs.css";
import { BsCheck2All } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>
      <section className="about-sec">
        <div className="container-sec">
          <h2 className="h2-titel-sec fw-bolder text-center fs-2">About Us</h2>
          <div className="border-bottom mt-3  m-auto div-border-sec"></div>
          <p className="para-sec text-center mt-3">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start">
              <Image
                className="img-fluid "
                src="./assets/img/about.jpg"
                fluid
              />
             
              <a
                className="play-btn"
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              >
                <div className="icon-play">
                  <FaPlay />
                </div>
              </a>
            </div>
            <div className="col-lg-6 content">
              <h3 className="h3-titel-sec fs-3 fw-bolder">
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mb-3  ">
                <BsCheck2All  className="iecon-sec"/>
                <span className="span-sec ">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </div>
              <div className="mb-3 ">
                <BsCheck2All className="iecon-sec" />
                <span className="span-sec">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </div>
              <div className="mb-5 ">
                <BsCheck2All  className="iecon-sec"/>
                <span className="span-sec ">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </span>
              </div>
              <p className="p-about">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
