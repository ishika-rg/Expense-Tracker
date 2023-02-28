import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddForm.css";

import { useState } from "react";
import { categories } from "../../category/CategoryList";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { add_expense } from "../../redux/actions/action";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./SuccessModal";

const AddForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalopen] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    setAmount(val);
  };

  const handleCategory = (item) => {
    // console.log("helllooooooo");
    setCategory(item);
    console.log(category);
    setModalOpen(false);
  };

  const handleSubmit = () => {
    console.log("submit button");
    if (title === "" || amount === "" || category === "") {
      // console.log("Invalid details")

      // adding toaster
      const notify = () =>
        toast.error("Please enter all details!", {
          theme: "light",
        });
      notify();

      return;
    } else {
      const data = {
        title,
        amount,
        category,
        createdAt: new Date(),
      };
      // console.log(data)

      // dispatching the data to add_expense function
      dispatch(add_expense(data));

      // open the successModal after successful dispatch of data to expense function
      setSuccessModalopen(true);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />

      <ToastContainer />

      <SuccessModal
        successModalOpen={successModalOpen}
        setSuccessModalopen={setSuccessModalopen}
      />

      <Form className="add_form  w-50 m-auto mt-5 p-3 rounded-2">
        <Form.Group className="mb-3" controlId="expense">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter expense"
            onChange={(e) => handleTitle(e)}
            value={title}
          />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Amount ₹</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => handleAmount(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>

          <div
            className="category_dropdown"
            style={{ cursor: "pointer" }}
            onClick={() => setModalOpen(!modalOpen)}
          >
            <div className="head">
              <label>{category ? category.title : "Category"} </label>
              <i className="bi bi-caret-down-fill"></i>
            </div>
          </div>

          {modalOpen && (
            <div className="category_container">
              {categories.map((ele) => {
                return (
                  <div
                    className="cat_item"
                    key={ele.id}
                    onClick={() => handleCategory(ele)}
                    style={{
                      borderRight: `5px solid ${ele.color}`,
                    }}
                  >
                    <p> {ele.title} </p>
                    <img src={ele.icon} alt={ele.title} className="me-3" />
                  </div>
                );
              })}
            </div>
          )}
        </Form.Group>

        <Button variant="secondary" onClick={() => handleSubmit()}>
          Add Expense
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
