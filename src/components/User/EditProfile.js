import React from "react";

import { Redirect } from "react-router-dom";

import { Button, Col, Form, Row } from "react-bootstrap";

import { withAuthRequired } from "../_lib";

import { editProfile, useUserContext } from "./UserContext";
import { PROFILE_PATH } from "../../settings/routesPath";


export const EditProfile = withAuthRequired(() => {
  const [{userData}, dispatch] = useUserContext();

  const [email, setEmail] = React.useState(userData.email);
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [username, setUserName] = React.useState(userData.username);
  const [info, setUserInfo] = React.useState(userData.info);
  const [phone, setUserPhone] = React.useState(userData.phone);
  const [sex, setUserSex] = React.useState(userData.sex);

  const [saved, setSaved] = React.useState(false);

  if ( saved ) {
    return ( <Redirect to={PROFILE_PATH}/> );
  }

  const handleOnChangeEmail = (e) => setEmail(e.target.value);
  const handleOnChangeOldPassword = (e) => setOldPassword(e.target.value);
  const handleOnChangePassword = (e) => setNewPassword(e.target.value);
  const handleOnChangeUserName = (e) => setUserName(e.target.value);
  const handleOnChangeUserInfo = (e) => setUserInfo(e.target.value);
  const handleOnChangeUserPhone = (e) => setUserPhone(e.target.value);
  const handleOnChangeUserSex = (e) => setUserSex(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(editProfile({email, username, sex, phone, info}));

    setSaved(true);
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
              value={email}
              onChange={handleOnChangeEmail}
            />
            <Form.Text className="text-muted">
              Мы никогда и никому не покажем ваш email (нет)
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Старый пароль</Form.Label>

            <Form.Control
              id={"password"}
              type="password"
              placeholder="Ваш пароль"
              value={oldPassword}
              onChange={handleOnChangeOldPassword}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>

            <Form.Control
              id={"password"}
              type="password"
              placeholder="Ваш пароль"
              value={newPassword}
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
              value={username}
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
              value={phone}
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
              value={sex}
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
              value={info}
              onChange={handleOnChangeUserInfo}
            />
            <Form.Text className="text-muted">
              Пускай все знают!
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type={"submit"}>
            Сохранить
          </Button>
        </Form>

      </Col>
    </Row>
  );
});