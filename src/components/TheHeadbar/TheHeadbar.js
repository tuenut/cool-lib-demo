import React from "react";

import { Link } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { AUTHORS_PATH, BOOKS_PATH, HOME_PATH, LOGIN_PATH, PROFILE_PATH } from "../../settings/routesPath";

import { logOutUser, useUserContext } from "../App/Context";


export const TheHeadbar = () => {
  const [{authenticated, userData}, dispatch] = useUserContext();
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
            <NavDropdown title={userData.username} id="basic-nav-dropdown">
              <Link to={PROFILE_PATH} component={NavDropdown.Item}>
                Мой профиль
              </Link>
              <NavDropdown.Divider/>
              <NavDropdown.Item onSelect={() => dispatch(logOutUser())}>
                Выйти
              </NavDropdown.Item>
            </NavDropdown>
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

