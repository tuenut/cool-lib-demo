import React from "react";

import { Link } from "react-router-dom";

import { createUseStyles } from "react-jss";

import { Navbar, Nav, Container } from "react-bootstrap";

import { AUTHORS_PATH, BOOKS_PATH, HOME_PATH, LOGIN_PATH } from "../../settings/routesPath";

import { useUserContext } from "../User/UserContext/index";
import { UserDropdownMenu } from "./UserDropdownMenu";


const useStyles = createUseStyles({
  headbar: {
    height: "4rem"
  }
});


export const TheHeadbar = () => {
  const [{authenticated}] = useUserContext();

  const classes = useStyles();

  return (
    <Navbar fixed={"top"} bg="dark" variant="dark" className={classes.headbar}>
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

