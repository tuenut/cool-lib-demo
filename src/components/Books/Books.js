import React from "react";

import { Col, Row } from "react-bootstrap";

import { BOOKS } from "../../testData";
import { BookCard } from "./BookCard";


export const Books = () => {
  return (
    <>
      <Row as={"header"}>
        <Col xs={12} as={"h1"} className={"text-center"}>
          Наши книги
        </Col>
      </Row>

      <Row className={"d-flex flex-wrap"}>
        {BOOKS.map((book) => (
          <BookCard key={book.id} book={book}/>
        ))}
      </Row>
    </>
  );
};

