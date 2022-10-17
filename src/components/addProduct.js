import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./addProduct.css";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="mx-auto mt-5 w-75 row">
      <h2 className="title col-12">Add Product</h2>

      <Form className="mt-5 row">
        <div className="col-lg-9 order-lg-1 order-1 pb-3">
          <Form.Control type="text" placeholder="Name Partner" />
        </div>
        <div className="col-lg-3 order-lg-1 order-2 pb-3">
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
          <Form.Control className="mb-3" type="text" placeholder="Price" />
        </div>

        <Link
          to="/income-transaction"
          className="col-lg-3 offset-lg-9 order-lg-3 order-4 pb-5 text-decoration-none"
        >
          <Button
            style={{ width: "100%" }}
            type="submit"
            className="button w-100"
          >
            Save
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddProduct;
