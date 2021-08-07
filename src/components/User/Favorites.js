import React from "react";

import { Link } from "react-router-dom";

import { Row, Col, Alert, Button } from "react-bootstrap";

import { withAuthRequired } from "../_lib";

import { useUserContext } from "./UserContext";
import { AUTHORS_PATH, BOOKS_PATH } from "../../settings/routesPath";
import { BOOKS } from "../../testData";
import { BookAuthenticatedCard } from "../Books/BookCard";


export const Favorites = withAuthRequired(() => {
  const [{userData}, dispatch] = useUserContext();

  const favoriteBooks = userData.favoriteBooks.length
    ? BOOKS.filter((book) => userData.favoriteBooks.includes(book.id))
    : null;

  return (
    <>
      <Row as={"header"}>
        <Col xs={12} as={"h1"} className={"text-center"}>
          Ваши избранные книги
        </Col>
      </Row>

      <Row className={"d-flex flex-wrap"}>
        {favoriteBooks ? (
          favoriteBooks.map((book) => (
            <BookAuthenticatedCard key={book.id} book={book}/>
          ))
        ) : (
          <Alert variant={"info"}>
            {"Вы еще ничего не добавили в избранное. "}
            {"Посмотрите какие у нас есть "}
            <Link to={BOOKS_PATH}>
              книги
            </Link>
            {" или найдите своего "}
            <Link to={AUTHORS_PATH}>
              автора
            </Link>
            .
          </Alert>
        )}
      </Row>
    </>
  );
});