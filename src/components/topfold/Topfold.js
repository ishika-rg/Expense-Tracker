import React from "react";
import "./Topfold.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Topfold = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  //   console.log(window.location.pathname)
  return (
    <div className="container">
      {window.location.pathname === "/" ? (
        <div className="topfold mt-4 d-flex justify-content-between px-5">
          <div className="home-top">
            <InputGroup className="mb-3 search_box">
              <Form.Control
                size="sm"
                placeholder="Search Expenses..."
                aria-label="Search Expenses..."
                aria-describedby="basic-addon2"
                value={query}
                onChange={(e) => handleQuery(e)}
              />
              <Button variant="outline-secondary" id="button-addon2">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </div>

          <Link to="/add_expense">
            <div className="add_btn">
              <Button variant="outline-secondary">
                <i className="bi bi-plus-lg"></i>Add
              </Button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold mt-4 d-flex justify-content-between px-5">
          <Link to="/">
            <Button variant="outline-secondary" className="back_btn">
              <i className="bi bi-chevron-left"></i> Back
            </Button>
          </Link>

          <Link to="/">
            <Button variant="outline-secondary" className="cancel_btn">
              <i className="bi bi-x-lg"></i> Cancel
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Topfold;
