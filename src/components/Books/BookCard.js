import React from "react";

import { Link } from "react-router-dom";

import { Card, Col } from "react-bootstrap";

import { BOOK_DETAILS_PATTERN_PATH, ID_REPLACER } from "../../settings/routesPath";


export const BookCard = ({book}) => (
  <Col xs={3} as={"section"} key={book.id}>
    <Card>
      <Card.Img
        variant="top"
        src=""
        height={"200px"}
        width={"150px"}
        className="d-block bg-secondary m-auto"
      />

      <Card.Body>
        <Card.Title>
          {book.title}
        </Card.Title>

        <Card.Text>
          {book.author.fullName}
        </Card.Text>

        <Link
          to={BOOK_DETAILS_PATTERN_PATH.replace(ID_REPLACER, book.id)}
          component={Card.Link}
        >
          Подробнее...
        </Link>
      </Card.Body>
    </Card>
  </Col>
);

