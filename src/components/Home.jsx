import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Pier from "../assets/pier1.jpeg";
import Post from "../assets/pierman.png";
import { getPier } from "../api/api";

export default function Home() {
  const [action, setAction] = useState("GET");
  const [url, setUrl] = useState("/about/Pierdomenico");
  const [pier, setPier] = useState(null);
  const [value, setValue] = useState(["GET", "POST"]);
  const val = value.map((val) => val);

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

  const handleChange = (e) => {
    console.clear();
    console.log(value[e.target.value]);
  };

  /* const [addrtype, setAddrtype] = useState(["Work", "Home", "school"]);
 const Add = addrtype.map((Add) => Add);
 const handleAddrTypeChange = (e) => {
   console.clear(), console.log(addrtype[e.target.value]);
 };

 return (
   <select
     onChange={(e) => handleAddrTypeChange(e)}
     className="browser-default custom-select"
   >
     {Add.map((address, key) => (
       <option key={key} value={key}>
         {address}
       </option>
     ))}
   </select>
 ); */

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={3}>
          {/* xs={{ offset: 1, span: 4 }}> */}
          <img
            src={Pier}
            className="animate__animated animate__zoomIn"
            style={{ width: "75%" }}
            alt="Pier"
          />
        </Col>
        <Col
          xs={8}
          className="d-flex flex-row"
          style={{ border: "2px solid black" }}
        >
          <Form.Group>
            <div className="d-flex mt-3 mb-5 animate__animated animate__slideInLeft">
              <Form.Control
                as="select"
                size="lg"
                style={{ width: "150px" }}
                /* custom */
                onChange={(e) => handleChange(e)}
              >
                {val.map((nonso, key) => (
                  <option key={key} value={key}>
                    {nonso}
                  </option>
                ))}
                {/* <option>GET</option>
                  <option>POST</option> */}
              </Form.Control>
              <Form.Control
                as="select"
                size="lg"
                style={{ width: "450px" }}
                custom
              >
                <option>/about/Pierdomenico</option>
                <option>/projects/Pierdomenico</option>
                <option>/contact/Pierdomenico</option>
              </Form.Control>
              <Button
                className="ml-2"
                disabled
                variant="success"

                /* onClick={() => {
                    fetchPier();
                  }} */
              >
                Send
              </Button>
              <img src={Post} style={{ width: "50px" }} alt="post" />
            </div>
          </Form.Group>
          )
          {/* <Form.Control
                placeholder="pier-portofolio.vercel.app/about/Pierdomenico"
                disabled
                size="lg"
                style={{
                  cursor: "pointer",
                  border: "2px solid black",
                  width: "fit-content",
                }}
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
              </Button> */}
        </Col>
        {/* <Col sm={2}>
          <img src={Post} style={{ width: "200px" }} alt="post" />
          <p style={{ fontSize: "10px" }}>Powered by PostPier</p>
        </Col> */}
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
