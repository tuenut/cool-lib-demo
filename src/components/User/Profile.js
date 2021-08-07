import React from "react";

import { Link, Redirect } from "react-router-dom";

import { Card, Col, ListGroup, Row } from "react-bootstrap";

import { withAuthRequired } from "../_lib";

import { ProfileCard } from "../Users";

import { HOME_PATH, PROFILE_EDIT_PATH } from "../../settings/routesPath";


export const Profile = withAuthRequired(() => {

  return (
    <Row>
      <Col xs={6}>

        <ProfileCard/>

      </Col>
    </Row>
  );
});

