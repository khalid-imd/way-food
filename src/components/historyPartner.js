import React from "react";
import historyimage from "../assets/historyimage.png";
import "./historyPartner.css";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";

const HistoryPartner = () => {
  return (
    <div className="mx-auto w-75 mt-5 d-flex">
      <div className="w-50">
        <p className="title mb-5">Profile Partner</p>
        <div className="d-flex">
          <div className="me-2">
            <div>
              <img src={historyimage} alt="" />
            </div>
            <div>
              <Link to="/edit-profile-partner">
                <button className="mt-2 w-100 button">edit profile</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="" className="sub">
                Name Partner
              </label>
              <p className="desc">Geprek bensu</p>
            </div>
            <div className="mb-4">
              <label htmlFor="" className="sub">
                Email
              </label>
              <p className="desc">bensu@gmail.com</p>
            </div>
            <div className="mb-4">
              <label htmlFor="" className="sub">
                phone
              </label>
              <p className="desc">083896833122</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-50">
        <div>
          <p className="title mb-5">History Order</p>
          <div className="d-flex justify-content-between bg p-2 rounded">
            <div>
              <label className="andi">Andi</label>
              <p className="day">Saturday, 12 March 2021</p>
              <p className="total">Total : Rp 45.000</p>
            </div>
            <div>
              <div>
                <img src={icon} alt="" />
              </div>
              <div className="bg-finish text-middle text-center p-1 mt-3 rounded">
                <p className="finished m-auto">Finished</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPartner;
