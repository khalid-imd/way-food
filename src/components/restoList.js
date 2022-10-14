import React from "react";
import { Popular } from "./popular";
import "./restoList.css";

const RestoList = () => {
  return (
    <div className="w-75 mx-auto mt-5">
      <div className="d-flex justify-content-start">
        <h2 className="title-popular">Popular Restaurant</h2>
      </div>
      <div className="d-flex gap-4 justify-content-between mt-4">
        {Popular.map((item) => {
          return (
            <div className="d-flex justify-content-starta align-items-center border shadow p-2 rounded-3 label">
              <img src={item.image} alt="image" className="me-2" />
              <h3 className="d-flex justify-content-center title-restaurant text-align-center">
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestoList;
