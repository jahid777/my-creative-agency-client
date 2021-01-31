import React from 'react';
import carousel1 from '../../images/carousel-1.png';
import carousel2 from '../../images/carousel-2.png';
import carousel3 from '../../images/carousel-3.png';
import carousel4 from '../../images/carousel-4.png';
import carousel5 from '../../images/carousel-5.png';
import './Carousel.css';



const Carousel = () => {
    return (
      <div>
      <div id="carouselExampleIndicators" className="carousel slide pl-5 py-5 my-5" style={{ background: "#111430" }} data-ride="carousel">
          <h3 style={{ fontSize: "2.2rem" }} className="text-center text-white font-weight-bold mb-5 mt-3" > Provide awesome <p style={{ fontSize: "2.2rem" }}  className="text-green font-weight-bold d-inline"> services </p> </h3>

          <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active "></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
          </ol>
          <div className="carousel-inner pl-2 mb-5" style={{ maxHeight: " 500px" }}>
              <div className="carousel-item active">
                  <div className="d-flex">
                      <img src={carousel1} className="d-inline-block " style={{ width: "40%", height: "14rem" }} alt="..." />
                      <img src={carousel2} className="d-inline-block ml-4 " style={{ width: "40%", height: "14rem" }} alt="..." />
                      <img src={carousel3} className="d-inline-block ml-4" style={{ width: "40%", height: "14rem" }} alt="..." />
                  </div>
              </div>
              <div className="carousel-item ">
                  <div className="d-flex">
                      <img src={carousel3} className="d-inline-block " style={{ width: "40%", height: "14rem" }} alt="..." />
                      <img src={carousel4} className="d-inline-block ml-4 " style={{ width: "40%", height: "14rem" }} alt="..." />
                      <img src={carousel5} className="d-inline-block ml-4" style={{ width: "40%", height: "14rem" }} alt="..." />
                  </div>

              </div>
              <div className="carousel-item ">
                  <div className="d-flex">
                      <img src={carousel5} className="d-inline-block " style={{ width: "40%", height: "14rem" }} alt="..." />
                      <img src={carousel1} className="d-inline-block ml-4 " style={{ width: "40%", height: "14rem" }} alt="..." />
                      <img src={carousel2} className="d-inline-block ml-4" style={{ width: "40%", height: "14rem" }} alt="..." />
                  </div>
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
      </div>

  </div>
    );
};

export default Carousel;