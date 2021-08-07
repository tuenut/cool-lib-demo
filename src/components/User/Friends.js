import React from "react";

import { Link } from "react-router-dom";

import { Row, Col, Alert, Button } from "react-bootstrap";

import { withAuthRequired } from "../_lib";

import { useUserContext } from "./UserContext";

import { USERS } from "../../testData";
import { USERS_PATH } from "../../settings/routesPath";
import { UserCard } from "../Users";


export const Friends = withAuthRequired(() => {
  const [{userData}, dispatch] = useUserContext();

  const friends = userData.friends.length
    ? USERS.filter(user => userData.friends.includes(user.id))
    : null;

  return (
    <>
      <Row as={"header"}>
        <Col xs={12} as={"h1"} className={"text-center"}>
          Ваши друзья
        </Col>
      </Row>

      <Row className={"d-flex flex-wrap"}>
        {friends ? (
          friends.map((user) => (
            <Col key={user.id} xs={4} className={"m-2"}>
              <UserCard user={user}/>
            </Col>
          ))
        ) : (
          <Alert variant={"info"}>
            {"Вы еще не завели себе друзей. "}
            <Link to={USERS_PATH}>
              Найти новых друзей
            </Link>
            .
          </Alert>
        )}
      </Row>
    </>
  );
});