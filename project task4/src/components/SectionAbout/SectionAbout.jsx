import {
  FaHandHoldingMedical,
  FaLungs,
  FaStaffSnake,
  FaSuitcaseMedical,
} from "react-icons/fa6";
import "./SectionAbout.css";

const SectionAbout = () => {
  return (
    <>
      <section className="sec-about">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div className="features-image col-lg-6">
              <img className="w-100 h-100" src="./assets/img/features.jpg" alt="features" />
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3 className="h3-text fs-3 fw-bolder">Enim quis est voluptatibus aliquid consequatur fugiat</h3>
              <div className="border-bottom mt-3  div-border-sec"></div>
              <p className="mt-4">
                Esse voluptas cumque vel exercitationem. Reiciendis est hic
                accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
                voluptate sed facere corporis dolores excepturi
              </p>
              <div className="icon d-flex ">
                <div className="d-flex justify-content-center align-items-center icon-features shadow rounded-2 me-3">
                <FaHandHoldingMedical className="icon-sec" />
                </div>
                <div>
                  <h4  className="fs-5">
                    <a className="text-decoration-none h4-color" href="#" >
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p >
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div className="icon d-flex ">
              <div className="d-flex justify-content-center align-items-center icon-features shadow rounded-2 me-3">
                <FaSuitcaseMedical className="icon-sec"  />
                </div>
                <div>
                  <h4  className="fs-5">
                    <a className="text-decoration-none h4-color" href="#" >
                      Nemo Enim
                    </a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div className="icon d-flex ">
              <div className="d-flex justify-content-center align-items-center icon-features shadow rounded-2 me-3">
                <FaStaffSnake className="icon-sec"   />
                </div>
                <div>
                  <h4  className="fs-5">
                    <a className="text-decoration-none h4-color" href="#">
                      Dine Pad
                    </a>
                  </h4>
                  <p>
                    Explicabo est voluptatum asperiores consequatur magnam. Et
                    veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                  </p>
                </div>
              </div>
              <div className="icon d-flex ">
              <div className="d-flex justify-content-center align-items-center icon-features shadow rounded-2 me-3">
                <FaLungs className="icon-sec"   />
                </div>
                <div>
                  <h4 className="fs-5">
                    <a className="text-decoration-none h4-color "  href="#" >
                      Tride clov
                    </a>
                  </h4>
                  <p>
                    Est voluptatem labore deleniti quis a delectus et. Saepe
                    dolorem libero sit non aspernatur odit amet. Et eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionAbout;
