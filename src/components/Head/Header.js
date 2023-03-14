import React from "react";
import logo from "../../images/expense.png";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="header">
      <Navbar className="px-3 px-md-5" bg="light">
        <Container>
          <Navbar.Brand href="">
            {" "}
            <img className="logo" alt="monefy_logo" src={logo} /> MONEFY{" "}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="outline-dark" className="button_a">
                {" "}
                <a
                  href="https://github.com/ishika-rg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="devicon-github-original colored"></i>
                  <span className="star_btn"> Star </span>
                </a>
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
