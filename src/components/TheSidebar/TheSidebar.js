import React from "react";

import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

import { HOME_PATH } from "../../settings/routesPath";


export const TheSidebar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={"position-fixed vh-100 align-items-start col-2"}
    >
      <Nav className={"flex-column"}>
        <Link to={HOME_PATH} component={Nav.Link}>Избранное</Link>
        <Link to={HOME_PATH} component={Nav.Link}>Сообщения</Link>
        <Link to={HOME_PATH} component={Nav.Link}>Друзья</Link>
      </Nav>
    </Navbar>
  );
};

