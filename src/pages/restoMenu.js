import React from "react";
import { Card } from "react-bootstrap";
import { Menu } from "../components/dummy/menuRestaurant";
import "./restoMenu.css";

const RestoMenu = () => {
  return (
    <div className="bg-menu">
      <div className="w-75 mx-auto">
        <div className="d-flex justify-content-start title">
          <h2 className="mt-5">Geprek Bensu, Menus</h2>
        </div>
        <div className="row ">
          {Menu.map((item) => {
            return (
              <div className="col-3 col-lg-3 col-md-6 col-12 mb-lg-0 mb-3 pt-3">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text className="text-red">{item.price}</Card.Text>
                    <button className="w-100 bg-order rounded border-0">
                      Order
                    </button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestoMenu;
