import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { addCategorybyadmin } from "../../redux/slice/adminproductSlice/adminproductSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function ProductCategory() {
  const [inpval, setInpval] = useState({
    categoryname: "",
    description: "",
  });
  const dispatch = useDispatch();
  const handlechange = (e) => {
    const { name, value } = e.target;
    setInpval({
      ...inpval,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (inpval.categoryname === "") {
      toast.error("category name is required");
    } else if (inpval.description === "") {
      toast.error("description is required");
    } else {
      dispatch(addCategorybyadmin(inpval))
        .then((res) => {
          setInpval({ ...inpval, categoryname: "", description: "" });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <section style={{ marginTop: "10rem" }}>
      <Row className="justify-content-center">
        <h2 className="text-center">Add Product Category</h2>
        <Col md={6}>
          <form action="">
            <label htmlFor="">Category Name</label>
            <input
              type="text"
              id=""
              style={{ width: "100%" }}
              name="categoryname"
              className="mb-4"
              value={inpval.categoryname}
              placeholder="Product Name"
              onChange={handlechange}
            />
            <label htmlFor="">Description</label>
            <textarea
              name="description"
              rows={5}
              cols={10}
              value={inpval.description}
              id=""
              style={{ width: "100%" }}
              placeholder="Description"
              onChange={handlechange}
            ></textarea>
            <button
              className="btn btn-secondary mt-3 p-3"
              onClick={handlesubmit}
              style={{ width: "100%" }}
            >
              Add
            </button>
          </form>
        </Col>
      </Row>
    </section>
  );
}
