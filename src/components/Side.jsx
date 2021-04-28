import React from "react";
import { Col } from "react-bootstrap";
import Pier from "../assets/pier1.jpeg";

export default function Side() {
  return (
    <Col sm={2}>
      <div className="position-relative">
        <img
          src={Pier}
          style={{ width: "75%" }}
          alt="Pier"
          className="position-absolute"
        />
      </div>
    </Col>
  );
}
