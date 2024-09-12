import React from 'react';
import Slider from 'react-slick';
import { Container, Image } from 'react-bootstrap';
import "./Gallery.css";


const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (


    <>
    <div className=' bg-light'>

    
    <section className="  gallery-sec py-5 ">
      <Container className="text-center my-5 ">
      <div className="container-sec">
          <h2 className="h2-titel-sec fw-bolder text-center fs-2"> Gallery</h2>
          <div className="border-bottom mt-3  m-auto div-border-sec"></div>
          <p className="para-sec text-center mt-3">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <Slider {...settings}>
          <div className="p-3">
            <Image 
              src="/public/assets/img/gallery-1.jpg" 
              alt="Gallery Image 1" 
              className="img-fluid rounded custom-gallery-image" 
            />
          </div>
          <div className="p-3">
            <Image 
              src="/public/assets/img/gallery-2.jpg" 
              alt="Gallery Image 2" 
              className="img-fluid  rounded custom-gallery-image" 
            />
          </div>
          <div className="p-3">
            <Image 
              src="/public/assets/img/gallery-3.jpg" 
              alt="Gallery Image 3" 
              className="img-fluid  rounded custom-gallery-image" 
            />
          </div>
          <div className="p-3">
            <Image 
              src="/public/assets/img/gallery-4.jpg" 
              alt="Gallery Image 4" 
              className="img-fluid  rounded custom-gallery-image" 
            />
          </div>
          <div className="p-3">
            <Image 
              src="/public/assets/img/gallery-5.jpg" 
              alt="Gallery Image 5" 
              className="img-fluid  rounded custom-gallery-image" 
            />
          </div>
          <div className="p-3">
            <Image 
              src="/public/assets/img/gallery-6.jpg" 
              alt="Gallery Image 6" 
              className="img-fluid  rounded custom-gallery-image" 
            />
          </div>
        </Slider>
      </Container>
    </section>
    </div>

    </>

  );
};

export default Gallery;
