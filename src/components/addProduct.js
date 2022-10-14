import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./addProduct.css";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="mx-auto mt-5 w-50">
      <h2 className="title">Add Product</h2>

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
          <Form.Control className="mb-3" type="text" placeholder="Price" />
          <div>
            <Link
              to="/income-transaction"
              className="d-flex justify-content-end mt-5 text-decoration-none"
            >
              <Button
                variant="secondary"
                size="sm"
                type="submit"
                className="w-25 button"
              >
                Save
              </Button>
            </Link>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddProduct;
