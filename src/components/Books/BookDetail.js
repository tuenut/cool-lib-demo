import React from "react";

import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import { Container, Button, Col, Row } from "react-bootstrap";

import { BOOK_CONTENT_PATH, ID_KEY, ID_REPLACER } from "../../settings/routesPath";
import { BOOKS } from "../../testData";
import { addFavoriteBook, removeFavoriteBook, useUserContext } from "../User/UserContext";


export const BookDetail = () => {
  const [{authenticated, userData}, dispatch] = useUserContext();

  const match = useRouteMatch();

  const bookId = match.params[ID_KEY];
  const book = BOOKS.find((book) => book.id === parseInt(bookId));

  const inFavoties = authenticated &&
    userData.favoriteBooks.find((favBook) => favBook === book.id);

  const hendleOnAddToFavorites = () => {
    if ( inFavoties ) {
      dispatch(removeFavoriteBook(book.id));
    }
    else {
      dispatch(addFavoriteBook(book.id));
    }
  };

  return (
    <Container>
      <Row as={"header"}>
        <Col xs={12} className={"text-center"}>
          <h3>{book.author.fullName}</h3>
          <h1>{book.title}</h1>
        </Col>
      </Row>

      <Row as={"section"}>
        <Col xs={8} as={"article"} className={"m-auto"}>
          <p>{book.description}</p>
        </Col>
      </Row>

      {authenticated && (
        <Row as={"section"}>
          <Col xs={8} className={"m-auto"}>
            <Link
              to={BOOK_CONTENT_PATH.replace(ID_REPLACER, book.id)}
              className={"mx-1 h-100"}
              component={Button}
            >
              Читать
            </Link>

            <Button
              variant={inFavoties ? "warning" : "secondary"}
              className={"h-100 "}
              onClick={hendleOnAddToFavorites}
            >
              ★ {!inFavoties ? "В избранное" : "В избранном"}
            </Button>
          </Col>
        </Row>

      )}
    </Container>
  );
};

