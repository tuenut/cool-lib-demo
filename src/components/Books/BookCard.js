import React from "react";

import { Link } from "react-router-dom";

import { Card, Col, Button } from "react-bootstrap";

import { BOOK_DETAILS_PATTERN_PATH, ID_REPLACER } from "../../settings/routesPath";
import {
  addFavoriteBook,
  useUserContext,
  removeFavoriteBook
} from "../User/UserContext";


const DeafultBookCard = ({book, Actions}) => (
  <Col xs={3} as={"section"} className={"my-2 align-items-stretch"}>
    <Card className={"h-100"}>
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
      </Card.Body>
      {Actions && (
        <Card.Footer>
          <Actions book={book}/>
        </Card.Footer>
      )}
    </Card>
  </Col>
);

const AuthenticatedActions = ({book}) => {
  const [{userData}, dispatch] = useUserContext();

  const inFavoties =
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
    <>
      <Link
        to={BOOK_DETAILS_PATTERN_PATH.replace(ID_REPLACER, book.id)}
        component={Card.Link}
        className={"mr-2"}
      >
        Подробнее...
      </Link>
      <Button
        variant={inFavoties ? "warning" : "secondary"}
        className={"ms-3 py-0 px-1"}
        onClick={hendleOnAddToFavorites}
      >
        ★ {!inFavoties ? "В избранное" : "В избранном"}
      </Button>
    </>
  );
};

const UnauthenticatedActions = ({book}) => (
  <Link
    to={BOOK_DETAILS_PATTERN_PATH.replace(ID_REPLACER, book.id)}
    component={Card.Link}
  >
    Подробнее...
  </Link>
);


export const BookAuthenticatedCard = ({book}) => (
  <DeafultBookCard book={book} Actions={AuthenticatedActions}/>
);

export const BookUnauthenticatedCard = ({book}) => (
  <DeafultBookCard book={book} Actions={UnauthenticatedActions}/>
);


export const BookCard = ({book}) => {
  const [{authenticated}] = useUserContext();

  if ( authenticated ) {
    return ( <BookAuthenticatedCard book={book}/> );
  } else {
    return ( <BookUnauthenticatedCard book={book}/> );
  }
};