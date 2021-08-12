import React from "react";

import { Link } from "react-router-dom";

import { Card, Col, Row, Spinner } from "react-bootstrap";
import {
  AUTHOR_DETAILS_PATTERN_PATH,
  ID_REPLACER
} from "../../settings/routesPath";

import { useAuthorsList } from "../../swrDataHooks";


export const Authors = () => {
  const {data: authors, isLoading} = useAuthorsList();

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
          Авторы
        </Col>
      </Row>

      <Row className={"d-flex flex-wrap"}>
        {authors.results.map((author) => (
          <Col xs={3} as={"section"} key={author.id} className={"my-2"}>
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
                  {author.fullName}
                </Card.Title>

                <Card.Text>
                  <span className={"text-muted"}>Родился: </span>
                  {author.date_of_birth}
                  <br/>
                  <span className={"text-muted"}>Умер: </span>
                  {author.date_of_death}
                </Card.Text>
              </Card.Body>

              <Card.Footer>
                <Link
                  to={AUTHOR_DETAILS_PATTERN_PATH.replace(ID_REPLACER, author.id)}
                  component={Card.Link}
                >
                  Подробнее...
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

