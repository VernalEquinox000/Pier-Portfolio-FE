import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import Side from "./Side";
import Pier from "../assets/pier1.jpeg";
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
    <Container>
      <Row>
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
        <Col sm={8}>
          <div style={{ width: "500px" }}>
            <Form.Group>
              <Form.Control
                placeholder="/about/Pierdomenico"
                disabled
                style={{ cursor: "pointer" }}
                //onClick={()=>setValue("")}
              />
              <Button variant="success" onClick={() => fetchPier()}>
                GET
              </Button>{" "}
            </Form.Group>
          </div>
          {pier && <p>{JSON.stringify({ pier })}</p>}
        </Col>
      </Row>
    </Container>
  );
}
