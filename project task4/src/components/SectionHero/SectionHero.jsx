import "./SectionHero.css";

const SectionHero = () => {
  return (
    <>
      <section className="section-c">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3 className="fs-2 h3-sec fw-bold ">
                  In an emergency? Need help now?
                </h3>
                <p className="p-sec">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a
                  className="sec-btn border border-white border border-2 rounded-1 text-decoration-none  fs-5 d-inline-block m-3"
                  href="#"
                >
                  Make an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionHero;
