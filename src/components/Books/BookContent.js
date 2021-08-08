import React from "react";

import { useLocation, useRouteMatch } from "react-router";

import { Col, Row } from "react-bootstrap";

import { withAuthRequired } from "../_lib";

import { ID_KEY } from "../../settings/routesPath";
import { BOOKS } from "../../testData";
import { TEXTS } from "../../testDataBookTexts";


export const BookContent = withAuthRequired(() => {
  const match = useRouteMatch();
  const location = useLocation();

  const bookId = match.params[ID_KEY];
  const book = BOOKS.find((book) => book.id === parseInt(bookId));

  const {content} = TEXTS.find((obj) => obj.id === book.id);

  React.useEffect(() => {
    document.title = `${book.title}`;
  }, [location]);

  return (
    <>
      <Row>
        <Col as={"header"} xs={12} className={"text-center"}>
          <h3 >{book.author.fullName}</h3>
          <h1>{book.title}</h1>
        </Col>
      </Row>

      <Row className={"my-5 py-5"}>
        <Col xs={6} className={"m-auto"} as={"section"}>

          {content
            .split("\n")
            .filter((line) => line !== "/n")
            .map((paragraph, idx) => (
              idx ? (
                <p key={idx.toString()+paragraph[0]} className={"my-3"}>
                  {paragraph}
                </p>
              ) : (
                <p key={idx.toString()+paragraph[0]} className={"my-3"}>
                  <span
                    style={{
                      fontSize: "200%",
                      color: "red",
                      fontWeight: "bold",
                    }}
                    className={"me-1"}
                  >
                    {paragraph[0]}
                  </span>
                  {paragraph.slice(1)}
                </p>
              )
            ))
          }

        </Col>
      </Row>
    </>
  );
});