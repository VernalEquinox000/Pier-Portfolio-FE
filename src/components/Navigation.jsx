import React from "react";
import { Navbar } from "react-bootstrap";
import Mondo from "../assets/mondo.png";
import TextAnimation from "react-animate-text";

export default function Navigation() {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#home">
        <img
          src={Mondo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <TextAnimation style={{ color: "white" }}>
        Pierdomenico Apruzzese, web dev
      </TextAnimation>
      ;
    </Navbar>
  );
}
