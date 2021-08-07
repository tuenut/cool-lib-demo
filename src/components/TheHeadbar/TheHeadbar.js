import React from "react";

import { Link } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { AUTHORS_PATH, BOOKS_PATH, HOME_PATH, LOGIN_PATH, PROFILE_PATH } from "../../settings/routesPath";

import { logOutUser, useUserContext } from "../User/UserContext";
import { UserDropdownMenu } from "./UserDropdownMenu";


export const TheHeadbar = () => {
  const [{authenticated}] = useUserContext();

  return (
    <Navbar fixed={"top"} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to={HOME_PATH}>Уютненько</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={HOME_PATH} component={Nav.Link}>Главная</Link>
          <Link to={BOOKS_PATH} component={Nav.Link}>Книги</Link>
          <Link to={AUTHORS_PATH} component={Nav.Link}>Авторы</Link>
        </Nav>
        <Nav>
          {authenticated ? (
            <UserDropdownMenu/>
          ) : (
            <Link to={LOGIN_PATH} component={Nav.Link}>
              Войти
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

