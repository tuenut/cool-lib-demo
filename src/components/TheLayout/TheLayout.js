import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { TheHeadbar } from "../TheHeadbar";
import { TheSidebar } from "../TheSidebar";
import { TheContent } from "../TheContent";


export const TheLayout = () => {
  return (
    <>
      <TheHeadbar/>

      <Container fluid className={"p-0 vw-100 "}>
        <Row className={"mb-5"} />
        <Row className={"mx-0"}>
          <Col xs={2} className={"px-0"}>
            <TheSidebar/>
          </Col>

          <Col className={"mt-2"}>
            <TheContent/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

