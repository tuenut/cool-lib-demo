import React from "react";

import { Link } from "react-router-dom";

import { Card, Col, Row } from "react-bootstrap";
import {
  AUTHOR_DETAILS_PATTERN_PATH,
  ID_REPLACER
} from "../../settings/routesPath";
import { AUTHORS } from "../../testData";


export const Authors = () => {
  return (
    <>
      <Row as={"header"}>
        <Col xs={12} as={"h1"} className={"text-center"}>
          Авторы
        </Col>
      </Row>

      <Row className={"d-flex flex-wrap"}>
        {AUTHORS.map((author) => (
          <Col xs={3} as={"section"} key={author.id} className={"my-2"}>
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
                  {author.fullName}
                </Card.Title>

                <Card.Text>
                  <span className={"text-muted"}>Родился: </span>
                  {author.dateOfBirth}
                  <br/>
                  <span className={"text-muted"}>Умер: </span>
                  {author.dateOfDeath}
                </Card.Text>

                <Link
                  to={AUTHOR_DETAILS_PATTERN_PATH.replace(ID_REPLACER, author.id)}
                  component={Card.Link}
                >
                  Подробнее...
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

