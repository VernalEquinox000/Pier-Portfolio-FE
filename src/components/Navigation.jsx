import React from "react";
import { Navbar } from "react-bootstrap";
import Post from "../assets/mondo.png";
import TextAnimation from "react-animate-text";

export default function Navigation() {
  return (
    <Navbar bg="light" style={{ height: "10vh" }}>
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src={Post}
          style={{
            height: "150px",
            position: "relative",
            top: "2vh",
            left: "2vh",
          }}
          /* className="d-inline-block align-top" */
          alt="logo"
        />
      </Navbar.Brand>
      {/* <TextAnimation style={{ color: "white" }}>
        Pierdomenico Apruzzese, web dev
      </TextAnimation> */}
    </Navbar>
  );
}
