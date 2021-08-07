import React from "react";

import { Col, Row } from "react-bootstrap";
import { USERS } from "../../testData";
import { UserCard } from "./UserCard";
import { useUserContext } from "../User/UserContext";


export const Users = () => {
  const [{userData}] = useUserContext();

  return (
    <>
      <Row as={"header"}>
        <Col xs={12} as={"h1"} className={"text-center"}>
          Пользователи нашего сайта
        </Col>
      </Row>

      <Row className={"d-flex flex-wrap"}>
        {USERS
          .filter((user) => user.id !== userData.id)
          .map((user) => (
            <Col key={user.id} xs={4} className={"m-2"}>
              <UserCard user={user}/>
            </Col>
          ))}
      </Row>
    </>
  );
};