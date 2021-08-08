import React from "react";

import { useHistory } from "react-router";

import { createUseStyles } from "react-jss";

import { Container, Row, Col, Button } from "react-bootstrap";

import { TheHeadbar } from "../TheHeadbar";
// import { TheSidebar } from "../TheSidebar";
import { TheContent } from "../TheContent";


const useStyles = createUseStyles({
  backwardButton: {
    top: "4rem",
    left: 0,
    position: "fixed",
    height: "100%",
    width: "10rem",
    borderRadius: 0,
    border: 0,
    fontSize: "9rem",
    color: "#f2f2f2",
    '&:hover': {
      color: "lightgrey"
    }
  }
});


export const TheLayout = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleOnClickBack = React.useCallback(() => history.goBack(), [history]);

  return (
    <>
      <TheHeadbar/>

      <Container fluid className={"p-0 w-100 "}>
        <Row className={"mb-5"}>
        </Row>

        <Row className={"mx-0"}>
          <Col xs={1} className={"px-0"}>
            <Button
              variant={"outline-light"}
              className={classes.backwardButton}
              onClick={handleOnClickBack}
            >
              {"<"}
            </Button>
            {/*<TheSidebar/>*/}
          </Col>

          <Col className={"mt-2"}>
            <TheContent/>
          </Col>

          <Col xs={1}>
          </Col>
        </Row>
      </Container>
    </>
  );
};

