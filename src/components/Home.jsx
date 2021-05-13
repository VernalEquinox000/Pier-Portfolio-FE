import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function HomeEx() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <p style={{ fontSize: "20px" }}>
              my portfolio will be back soon, sorry for the hassle <br />
              please check my{" "}
              <a
                href="https://www.linkedin.com/in/pierdomenico-apruzzese/"
                alt="Linkedin"
              >
                Linkedin
              </a>{" "}
              and{" "}
              <a href="https://github.com/VernalEquinox000" alt="Github">
                Github
              </a>{" "}
              in the meantime. - Pierdomenico
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
