import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./editProfilePartner.css";
import { useState } from "react";
import MapIcon from "../assets/mapicon.png";
import map3 from "../assets/mapspopup3.png";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const EditProfilePartner = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mx-auto mt-5 w-75 row">
      <h2 className="title col-12">Edit Profile Partner</h2>

      <Form className="mt-5 row">
        <div className="col-lg-9 order-lg-1 order-1 pb-3">
          <Form.Control type="text" placeholder="Name Partner" />
        </div>
        <div class="col-lg-3 order-lg-1 order-2 pb-3">
          <label
            class="input-group-text w-100 rounded-end"
            for="inputGroupFile01"
          >
            Attach File
          </label>
          <input
            type="file"
            class="form-control"
            id="inputGroupFile01"
            hidden
          />
        </div>

        <div className="col-lg-12 order-lg-2 order-3 pb-3">
          <Form.Control className="mb-3" type="email" placeholder="Email" />
        </div>
        <div className="col-lg-12 order-lg-3 order-4 pb-3">
          <Form.Control className="mb-3" type="number" placeholder="Phone" />
        </div>
        <div className="col-lg-9 order-lg-4 order-5">
          <Form.Control type="text" placeholder="Location" />
        </div>
        <div className="col-lg-3 order-lg-4 order-6 rounded pb-3">
          <>
            <Button
              style={{ width: "100%" }}
              onClick={handleShow}
              className="button"
            >
              select on map <img src={MapIcon} alt="maps" />
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              size="xl"
            >
              <Modal.Body>
                <img className="w-100" src={map3} alt="" />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Confirm Location
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
        <Link
          to="/profile-partner"
          className="col-lg-3 offset-lg-9 order-lg-5 order-8 pt-5 text-decoration-none"
        >
          <Button
            style={{ width: "100%" }}
            type="submit"
            className="button w-100%"
          >
            Save
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default EditProfilePartner;
