import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import Side from "./Side";
import Pier from "../assets/pier1.jpeg";
import Post from "../assets/pierman.png";
import { getPier } from "../api/api";

export default function Home() {
  // const [value, setValue] = useState("");
  const [pier, setPier] = useState(null);

  const fetchPier = async () => {
    try {
      const response = await getPier();
      const data = await response.data;
      console.log(data);
      setPier(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={{ offset: 1, span: 4 }}>
          <img
            src={Pier}
            className="animate__animated animate__zoomIn"
            style={{ width: "75%" }}
            alt="Pier"
          />
        </Col>
        <Col sm={3} className="d-flex flex-row">
          <Form.Group>
            <div className="d-flex mt-3 mb-5 animate__animated animate__slideInLeft">
              <Form.Control
                placeholder="/about/Pierdomenico"
                disabled
                style={{ cursor: "pointer" }}
                //onClick={()=>setValue("")}
              />
              <Button
                className="ml-2"
                variant="success"
                onClick={() => fetchPier()}
              >
                GET
              </Button>
            </div>
            <div className="d-flex mb-5 animate__animated animate__slideInLeft">
              <Form.Control
                placeholder="/projects/Pierdomenico"
                disabled
                style={{ cursor: "pointer" }}
                //onClick={()=>setValue("")}
              />
              <Button className="ml-2" disabled variant="success">
                GET
              </Button>
            </div>
            <div className="d-flex animate__animated animate__slideInLeft">
              <Form.Control
                placeholder="/contact/Pierdomenico"
                disabled
                style={{ cursor: "pointer" }}
                //onClick={()=>setValue("")}
              />
              <Button className="ml-2" disabled variant="danger">
                POST
              </Button>
            </div>
          </Form.Group>
        </Col>
        <Col sm={2}>
          <img src={Post} style={{ width: "200px" }} alt="post" />
          <p style={{ fontSize: "10px" }}>Powered by PostPier</p>
        </Col>
      </Row>
      <Row className="mt-5">
        {pier && (
          <Col
            className="d-flex-column justify-content-start"
            sm={{ offset: 2, span: 7 }}
            style={{ border: "1px solid black", textAlign: "left" }}
          >
            {"{"}
            <p>
              <strong>name</strong>: {pier.name}{" "}
            </p>
            <p>
              <strong>surname</strong>: {pier.surname}
            </p>
            <p>
              <strong>location</strong>: {pier.location}
            </p>
            <p>
              <strong>about</strong>: {pier.about}
            </p>
            <p>
              <strong>experience</strong>:
            </p>
            {pier.experience.map((exp) => (
              <>
                <p>
                  {"   "}
                  {exp.company} {exp.position} {exp.year}
                </p>
                <p>{exp.description}</p>
              </>
            ))}
            {"}"}
          </Col>
        )}
      </Row>
    </Container>
  );
}
