import React from "react";

import { Col, Row, Spinner } from "react-bootstrap";

import { BookCard } from "./BookCard";

import { useBooksList } from "../../swrDataHooks";


export const Books = () => {
  const {data: books, isLoading} = useBooksList();

  if ( isLoading ) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">
          Loading...
        </span>
      </Spinner>
    );
  }

  return (
    <>
      <Row as={"header"}>
        <Col xs={12} as={"h1"} className={"text-center"}>
          Наши книги
        </Col>
      </Row>

      <Row className={"d-flex flex-wrap"}>
        {books.results.map((book) => (
          <BookCard key={book.id} book={book}/>
        ))}
      </Row>
    </>
  );
};

