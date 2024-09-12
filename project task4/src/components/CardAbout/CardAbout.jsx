import { CiHospital1 } from "react-icons/ci";
import "./CardAbout.css";

import { FaAward, FaFlask, FaUserMd } from "react-icons/fa";

const CardAbout = () => {
  return (
    <>
      <section className="stats section">
        <div className="container">
          <div className="row gy-4  ">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-75 shadow">
                <FaUserMd className="iecon-stats " /> 
                <div>
                  <span className="fs-1 fw-bold span-stats px-3">25</span>
                  <p className=" card-p  m-0 p-0 px-3">Doctors</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-75 shadow">
                <CiHospital1 className="iecon-stats " />
                <div>
                  <span className="fs-1 fw-bold span-stats px-3">15</span>
                  <p className=" card-p  m-0 p-0 px-3">Departments</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item d-flex align-items-center w-100 h-75 shadow">
                <FaFlask className="iecon-stats " />
                <div>
                  <span className="fs-1 fw-bold span-stats px-3">8</span>
                  <p className=" card-p  m-0 p-0 px-3">Research Labs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <div className="stats-item d-flex align-items-center w-100 h-75 shadow ">
                <FaAward className="iecon-stats  " />
                <div>
                  <span className="fs-1 fw-bold span-stats px-3">150</span>
                  <p className=" card-p m-0 p-0 px-3">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardAbout;
