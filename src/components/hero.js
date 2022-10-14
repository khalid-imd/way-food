import React from "react";
import "./hero.css";
import Pizza from "../assets/pizzaimage.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="d-md-flex justify-content-center w-75 align-items-center">
        <div className="w-50">
          <div>
            <p className="title">Are You Hungry ?</p>
            <p className="title">Express Home Delivery</p>
          </div>

          <div className="d-flex justify-content-between">
            <div className="w-25 me-3">
              <hr className="line" />
            </div>
            <div className="w-75">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
        <div className="w-50 d-flex justify-content-end">
          <img className="w-100" src={Pizza} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
