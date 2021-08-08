import React from "react";

import { Button, Col, Form, Row } from "react-bootstrap";

import { withouthAuthRequired } from "../_lib";

import { registerNewUser, useUserContext } from "../User/UserContext";


export const SignUp = withouthAuthRequired(() => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userInfo, setUserInfo] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userSex, setUserSex] = React.useState("");

  const [, dispatch] = useUserContext();

  const handleOnChangeEmail = (e) => setLogin(e.target.value);
  const handleOnChangePassword = (e) => setPassword(e.target.value);
  const handleOnChangeUserName = (e) => setUserName(e.target.value);
  const handleOnChangeUserInfo = (e) => setUserInfo(e.target.value);
  const handleOnChangeUserPhone = (e) => setUserPhone(e.target.value);
  const handleOnChangeUserSex = (e) => setUserSex(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const allFields = [
      login, userName, password, userSex, userPhone, userInfo
    ];

    if ( allFields.every(i => i) ) {
      dispatch(registerNewUser(
        login, userName, password, userSex, userPhone, userInfo
      ));
    }
  };

  return (
    <Row className={"my-5 py-5"}>
      <Col xs={4} className={"m-auto"}>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
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

          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>

            <Form.Control
              required
              id={"password"}
              type="password"
              placeholder="Ваш пароль"
              value={password}
              onChange={handleOnChangePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ник</Form.Label>

            <Form.Control
              required
              id={"cool-library-username"}
              type="text"
              placeholder="Придумайте себе ник"
              value={userName}
              onChange={handleOnChangeUserName}
            />
            <Form.Text className="text-muted">
              Так вас узнают из тысячи
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Телефон</Form.Label>

            <Form.Control
              required
              id={"cool-library-phone"}
              placeholder="Укажите ваш телефон"
              value={userPhone}
              onChange={handleOnChangeUserPhone}
            />
            <Form.Text className="text-muted">
              Мы вам обязательно позвоним...
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Пол</Form.Label>

            <Form.Select
              id={"sex"}
              aria-label="Пол"
              value={userSex}
              onChange={handleOnChangeUserSex}
            >
              <option>Укажите свой пол</option>
              <option value="male">Мальчик</option>
              <option value="female">Девочка</option>
              <option value="jedi">Джедай</option>
            </Form.Select>

            <Form.Text className="text-muted">
              Все девочки с Венеры, все мальчики с Марса, а джедаи с Татуина...
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Расскажите о себе</Form.Label>

            <Form.Control
              id={"cool-library-info"}
              as={"textarea"}
              rows={7}
              placeholder="Какой вы?"
              value={userInfo}
              onChange={handleOnChangeUserInfo}
            />
            <Form.Text className="text-muted">
              Пускай все знают!
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type={"submit"}>
            Зарегистрировать
          </Button>
        </Form>

      </Col>
    </Row>
  );
});


