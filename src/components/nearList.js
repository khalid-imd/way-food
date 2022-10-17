import React from "react";
import Card from "react-bootstrap/Card";
import { Near } from "./near";
import "./nearList.css";
import { Link } from "react-router-dom";

const NearList = () => {
  console.log(Near);
  return (
    <div className="w-75 mx-auto mt-5 mb-5">
      <div className="d-flex justify-content-start">
        <h2 className="title-near">Restaurant Near You</h2>
      </div>
      <div className="d-md-flex mt-4 mb-3 flex-wrap gap-1 justify-content-between">
        {Near.map((item) => {
          return (
            <Link className="link" to="/menu">
              <Card style={{ width: "12rem" }}>
                <Card.Img src={item.image} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-start title-restaurant">
                    {item.name}
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-start title-restaurant">
                    {" "}
                    {item.distance}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NearList;
