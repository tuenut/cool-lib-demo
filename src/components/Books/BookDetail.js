import React from "react";

import { useRouteMatch } from "react-router";

import { Button, Col, Row } from "react-bootstrap";

import { ID_KEY } from "../../settings/routesPath";
import { BOOKS } from "../../testData";
import { addFavoriteBook, useUserContext } from "../User/UserContext";


export const BookDetail = () => {
  const [{authenticated}, dispatch] = useUserContext();

  const match = useRouteMatch();

  const bookId = match.params[ID_KEY];
  const book = BOOKS.find((book) => book.id === parseInt(bookId));

  const hendleOnAddToFavorites = () => dispatch(addFavoriteBook(bookId));

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
            <Button className={"mx-1 h-100"}>
              Читать
            </Button>

            <Button
              className={"mx-1 h-100"}
              variant={"warning"}
              onClick={hendleOnAddToFavorites}
            >
              <span className={"h3"}>★ </span>
              <span className={"align-text-bottom"}>В избранное</span>
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

