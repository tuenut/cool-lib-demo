import React from "react";

import { useRouteMatch } from "react-router";

import { Button, Col, Row } from "react-bootstrap";

import { ID_KEY } from "../../settings/routesPath";
import { BOOKS } from "../../testData";
import { useUserContext } from "../App/Context";


export const BookDetail = () => {
  const [{authenticated}] = useUserContext();

  const match = useRouteMatch();

  const bookId = match.params[ID_KEY];
  const book = BOOKS.find((book) => book.id === parseInt(bookId));

  return (
    <>
      <Row as={"header"}>
        <Col xs={12} className={"text-center"}>
          <h3>{book.author.fullName}</h3>
          <h1>{book.title}</h1>
        </Col>
      </Row>
      <Row as={"section"} className={"px-5 m-5"}>
        <Col as={"article"}>
          <p>{book.description}</p>
        </Col>
      </Row>
      {authenticated && (
        <Row as={"section"}>
          <Col>
            <Button>
              Читать
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

