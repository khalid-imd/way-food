import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./editProfileUser.css";
import MapIcon from "../assets/mapicon.png";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import map3 from "../assets/mapspopup3.png";
import { Link } from "react-router-dom";

const EditProfileuser = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mx-auto mt-5 w-50">
      <h2 className="title">Edit Profile</h2>

      <Form className="mt-5">
        <Form.Group className="mb-3">
          <div className="d-flex">
            <Form.Control
              className="mb-3 me-3 w-75"
              type="text"
              placeholder="Full Name"
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
          <Form.Control
            className="mb-3"
            type="email"
            placeholder="Enter email"
          />
          <Form.Control className="mb-3" type="number" placeholder="Phone" />
          <div className="d-flex">
            <Form.Control
              className="mb-3 me-3 w-75"
              type="text"
              placeholder="Location"
            />
            <>
              <Button className="mb-3 w-25 button rounded" onClick={handleShow}>
                Select On Map <img src={MapIcon} alt="maps" />
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
            to="/profile-user"
            className="d-flex justify-content-end mt-5 text-decoration-none"
          >
            <button Button size="sm" type="submit" className="w-25 button ">
              Save
            </button>
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditProfileuser;
