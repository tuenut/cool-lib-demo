import React from "react";

import { useRouteMatch } from "react-router";

import { Col, Row, Spinner } from "react-bootstrap";

import { ID_KEY } from "../../settings/routesPath";
import { AUTHORS, BOOKS } from "../../testData";
import { BookCard } from "../Books";
import { useAuthorDetails } from "../../swrDataHooks";


export const AuthorDetails = () => {
  const match = useRouteMatch();
  const authorId = parseInt(match.params[ID_KEY]);

  const {data: author, isLoading} = useAuthorDetails(authorId);

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
        <Col xs={12} className={"text-center"} as={"h3"}>
          {author.full_name}
        </Col>
      </Row>

      <Row as={"section"} className={"px-5 m-5"}>
        <Col as={"article"} xs={8} className={"m-auto"}>
          <p>{author.short_biography}</p>
        </Col>
      </Row>

      <Row as={"section"} className={"d-flex flex-wrap"}>
        <Col as={"header"} xs={12}>
          <h3>Книги автора</h3>
        </Col>
        {author.books.map((book) => (
            <BookCard book={book} author={author}/>
          ))}
      </Row>
    </>
  );
};

