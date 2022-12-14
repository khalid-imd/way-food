import React from "react";
import userpicture from "../assets/userpicture.png";
import "./historyTransaction.css";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";

const HistoryTransaction = () => {
  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100vh" }}>
      <div className="mx-auto w-75 row">
        <div className="col-lg-6 order-lg-1 order-1">
          <p className="title mb-5 mt-5">My Profile</p>
          <div className="row">
            <div className="col-6">
              <div>
                <img width="100%" src={userpicture} alt="" />
              </div>
              <div>
                <Link to="/edit-profile-user">
                  {" "}
                  <button className="mt-2 w-100 button">edit profile</button>
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-4">
                <label htmlFor="" className="sub">
                  Full Name
                </label>
                <p className="desc">Geprek bensu</p>
              </div>
              <div className="mb-4">
                <label htmlFor="" className="sub">
                  Email
                </label>
                <p className="desc">andigans@mail.com</p>
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

        <div className="col-lg-6 order-lg-2 order-2">
          <p className="title mb-5 mt-5">History Order</p>
          <div className="row bg-history rounded p-2">
            <div className="col-8">
              <label className="andi">Andi</label>
              <p className="day">Saturday, 12 March 2021</p>
              <p className="total">Total : Rp 45.000</p>
            </div>
            <div className="col-4">
              <div>
                <img width="100%" src={icon} alt="" />
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

export default HistoryTransaction;
