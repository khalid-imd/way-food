import React from "react";
import "./cartPage.css";
import Form from "react-bootstrap/Form";
import MapIcon from "../assets/mapicon.png";
import paketgeprek from "../assets/reviewpaketgeprek.png";
import paketgeprekkeju from "../assets/reviewpaketgeprekkeju.png";
import bin from "../assets/bin.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import map1 from "../assets/mapspopup1.png";
import map4 from "../assets/mapspopup4.png";

const CartPage = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const handleCloseLocation = () => setShowLocation(false);
  const handleShowLocation = () => setShowLocation(true);
  const handleCloseOrder = () => setShowOrder(false);
  const handleShowOrder = () => setShowOrder(true);

  return (
    <div>
      <div className="w-75 mx-auto mt-5">
        <p className="mb-5 title">Geprek Bensu</p>
        <div>
          <div>
            <label htmlFor="" className="sub">
              Delivery Location
            </label>
            <div className="d-flex mt-2">
              <Form.Control
                className="mb-3 me-3 w-75"
                type="text"
                placeholder="Location"
              />
              <>
                <button
                  className="mb-3 w-25 button rounded"
                  onClick={handleShowLocation}
                >
                  Select On Map <img src={MapIcon} alt="maps" />
                </button>
                <Modal
                  show={showLocation}
                  onHide={handleCloseLocation}
                  backdrop="static"
                  keyboard={false}
                  size="xl"
                >
                  <Modal.Body>
                    <img className="w-100" src={map1} alt="" />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLocation}>
                      Confirm Location
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
          </div>
          <div>
            <label htmlFor="" className="sub">
              Review Your Order
            </label>
            <div className="d-flex">
              <div className="w-75 me-4">
                <div className="d-flex mb-3 border-bottom border-dark">
                  <div className="d-flex w-75 mt-3">
                    <div className="me-3 mb-4">
                      <img src={paketgeprek} alt="" />
                    </div>
                    <div>
                      <p className="menu-name">Paket Geprek</p>
                      <p>
                        <button className="btn btn-light">-</button> 1{" "}
                        <button className="btn btn-light">+</button>
                      </p>
                    </div>
                  </div>
                  <div className="w-25">
                    <p className="d-flex justify-content-end price">
                      Rp. 15.000
                    </p>
                    <div className="d-flex justify-content-end">
                      <img src={bin} alt="" />
                    </div>
                  </div>
                </div>

                <div className="d-flex mb-3 mt-3 border-bottom border-dark">
                  <div className="d-flex w-75">
                    <div className="me-3 mb-4">
                      <img src={paketgeprekkeju} alt="" />
                    </div>
                    <div>
                      <p className="menu-name">Paket Geprek Keju</p>
                      <p>
                        <button className="btn btn-light">-</button> 1{" "}
                        <button className="btn btn-light">+</button>
                      </p>
                    </div>
                  </div>
                  <div className="w-25">
                    <p className="d-flex justify-content-end price">
                      Rp. 20.000
                    </p>
                    <div className="d-flex justify-content-end">
                      <img src={bin} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-25">
                <div className="border-bottom border-dark">
                  <div>
                    <div className="d-flex justify-content-between">
                      <p>Sub Total</p> <p className="price">Rp. 35.000</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Qty</p> <p>2</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>ongkir</p> <p className="price">Rp. 10.000</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <p>Total</p> <p className="price">Rp. 45.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <>
            <button
              className="mb-3 w-25 button rounded mt-5 p-1"
              onClick={handleShowOrder}
            >
              Order
            </button>
            <Modal
              show={showOrder}
              onHide={handleCloseOrder}
              keyboard={false}
              size="xl"
            >
              <Modal.Body>
                <img className="w-100" src={map4} alt="" />
              </Modal.Body>
            </Modal>
          </>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
