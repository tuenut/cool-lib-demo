import React from "react";

import { useRouteMatch } from "react-router";

import { Col, Row } from "react-bootstrap";

import { ID_KEY } from "../../settings/routesPath";
import { AUTHORS, BOOKS } from "../../testData";
import { BookCard } from "../Books";


export const AuthorDetails = () => {
  const match = useRouteMatch();
  const authorId = parseInt(match.params[ID_KEY]);
  const author = AUTHORS.find((book) => book.id === authorId);

  return (
    <>
      <Row as={"header"}>
        <Col xs={12} className={"text-center"} as={"h3"}>
          {author.fullName}
        </Col>
      </Row>

      <Row as={"section"} className={"px-5 m-5"}>
        <Col as={"article"}>
          <p>{author.bio}</p>
        </Col>
      </Row>

      <Row as={"section"} className={"d-flex flex-wrap"}>
        <Col as={"header"} xs={12}>
          <h3>Книги автора</h3>
        </Col>
        {BOOKS
          .filter((book) => book.author.id === author.id)
          .map((book) => (
            <BookCard book={book}/>
          ))}
      </Row>
    </>
  );
};

