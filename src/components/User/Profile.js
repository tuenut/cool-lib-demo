import React from "react";

import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useUserContext } from "./UserContext";
import { HOME_PATH, PROFILE_EDIT_PATH } from "../../settings/routesPath";
import { Link, Redirect } from "react-router-dom";


export const Profile = () => {
  const [{authenticated, userData}, dispatch] = useUserContext();

  if ( !authenticated ) {
    return (
      <Redirect to={HOME_PATH}/>
    )
  }

  return (
    <Row>
      <Col xs={6}>

        <Card>

          <Card.Header as={"header"}>
            <h1>{userData.username}</h1>
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col xs={2}>
                  Email:
                </Col>
                <Col>
                  {userData.email}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col xs={2}>
                  Телефон:
                </Col>
                <Col>
                  {userData.phone}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col xs={2}>
                  Пол:
                </Col>
                <Col>
                  {userData.sex}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>

          <Card.Body>
            <Card.Title>
              О себе:
            </Card.Title>

            <Card.Text>
              {userData.info}
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <Link to={PROFILE_EDIT_PATH} component={Card.Link}>
              Редактировать информацию
            </Link>
          </Card.Footer>

        </Card>

      </Col>
    </Row>
  );
};

