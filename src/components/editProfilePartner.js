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
    <div className="mx-auto mt-5 w-50">
      <h2 className="title">Edit Profile Partner</h2>

      <Form className="mt-5">
        <Form.Group className="mb-3">
          <div className="d-flex">
            <Form.Control
              className="mb-3 me-3 w-75"
              type="text"
              placeholder="Name Partner"
            />
            <div class="input-group mb-3 w-25">
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
          </div>
          <Form.Control className="mb-3" type="email" placeholder="Email" />
          <Form.Control className="mb-3" type="number" placeholder="Phone" />
          <div className="d-flex">
            <Form.Control
              className="mb-3 me-3 w-75"
              type="text"
              placeholder="Location"
            />
            <>
              <Button className="mb-3 w-25 button rounded" onClick={handleShow}>
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
          <div>
            <Link
              to="/profile-partner"
              className="d-flex justify-content-end mt-5 text-decoration-none"
            >
              <button size="sm" type="submit" className="w-25 button">
                Save
              </button>
            </Link>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditProfilePartner;
