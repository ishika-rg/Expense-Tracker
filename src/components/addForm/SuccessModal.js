import React from "react";
import Modal from "react-modal";
import modal_img from "../../images/modal_img.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const SuccessModal = ({ successModalOpen, setSuccessModalopen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      backgroundColor: "rgb(248,249,250)",
    },
  };

  return (
    <div>
      <Modal
        isOpen={successModalOpen}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div
          className="cross_btn"
          style={{ float: "right" }}
          onClick={() => setSuccessModalopen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </div>

        <div
          className="modal_inner"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label>Expense Added Successfully !</label>
          <img
            src={modal_img}
            alt="expense added "
            className="modal_image"
            style={{
              height: "300px",
            }}
          />

          <div className="home_btn">
            <Link to="/">
              <Button variant="outline-secondary">
                <i className="bi bi-house-fill"></i>Home
              </Button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SuccessModal;
