import React from "react";

import { Link } from "react-router-dom";

import { Card, Col, Button } from "react-bootstrap";

import { BOOK_DETAILS_PATTERN_PATH, ID_REPLACER } from "../../settings/routesPath";
import {
  addFavoriteBook,
  useUserContext,
  removeFavoriteBook
} from "../User/UserContext";


export const BookAuthenticatedCard = ({book}) => {
  const [{authenticated, userData}, dispatch] = useUserContext();

  const inFavoties =
    userData.favoriteBooks.find((favBook) => favBook === book.id);

  const hendleOnAddToFavorites = () => {
    if ( inFavoties ) {
      dispatch(removeFavoriteBook(book.id));
    }
    else {
      dispatch(addFavoriteBook(book.id));
    }
  }

  return (
    <Col xs={3} as={"section"} className={"my-2"}>
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
            className={"mr-2"}
          >
            Подробнее...
          </Link>
          <Button
            variant={inFavoties ? "warning" : "secondary"}
            className={"mx-2 py-0 px-1"}
            onClick={hendleOnAddToFavorites}
          >
            <span className={"h3"}>★ </span>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};


export const BookUnauthenticatedCard = ({book}) => (
  <Col xs={3} as={"section"} className={"my-2"}>
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


export const BookCard = ({book}) => {
  const [{authenticated}] = useUserContext();

  if ( authenticated ) {
    return ( <BookAuthenticatedCard book={book}/> );
  } else {
    return ( <BookUnauthenticatedCard book={book}/> );
  }
}