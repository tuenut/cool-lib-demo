import React from "react";

import { Link } from "react-router-dom";

import { Alert, Button, Col, Form, Row } from "react-bootstrap";

import { withouthAuthRequired } from "../_lib";

import { logInUser, useUserContext } from "../User/UserContext";

import { SIGN_UP } from "../../settings/routesPath";


export const LogIn = withouthAuthRequired(() => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [{error}, dispatch] = useUserContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if ( login && password ) {
      console.log("Send request");

      dispatch(logInUser(login, password));
    }
  };

  const handleOnChangeEmail = (e) => setLogin(e.target.value);
  const handleOnChangePassword = (e) => setPassword(e.target.value);

  return (
    <Row className={"my-5 py-5"}>
      <Col xs={4} className={"m-auto"}>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              id={"cool-library-email"}
              type="email"
              placeholder="Введите ваш email"
              value={login}
              onChange={handleOnChangeEmail}
            />
            <Form.Text className="text-muted">
              Мы никогда и никому не покажем ваш email (нет)
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ваш пароль"
              value={password}
              onChange={handleOnChangePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Запомнить меня"/>
          </Form.Group>

          {error && (
            <Alert variant={"danger"}>
              Не верный email или пароль
            </Alert>
          )}

          <Button className="mr-3" variant="primary" type={"submit"}>
            Войти
          </Button>

          <Link
            to={SIGN_UP}
            component={Button}
            className="mx-3"
            variant="light"
          >
            <b>Еще нет аккаунта?</b>
          </Link>
        </Form>

      </Col>
    </Row>
  );
});

