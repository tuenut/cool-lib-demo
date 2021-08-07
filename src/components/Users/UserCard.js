import React from "react";

import { Link, Redirect } from "react-router-dom";

import { Card, Col, ListGroup, Row, Button } from "react-bootstrap";

import { withAuthRequired } from "../_lib";

import { addFriend, removeFriend, useUserContext } from "../User/UserContext";

import { HOME_PATH, PROFILE_EDIT_PATH } from "../../settings/routesPath";


const UserCardContext = React.createContext();
const useUserCardContext = () => React.useContext(UserCardContext);
const UserCardContextProvider = ({user, ...props}) => {
  const _user = React.useMemo(() => user, [user]);

  return ( <UserCardContext.Provider value={_user} {...props}/> )
};


const UserActions = () => {
  const user = useUserCardContext();
  const [{userData}, dispatch] = useUserContext();

  const inFriends = userData.friends.includes(user.id);

  const handleOnAddToFriends = () => inFriends
    ? dispatch(removeFriend(user.id))
    : dispatch(addFriend(user.id));

  return (
    <Card.Footer>
      <Button
        variant={inFriends ? "danger" : "success"}
        className={"mx-2 py-0 px-1"}
        onClick={handleOnAddToFriends}
      >
        {inFriends ? "Удалить друга" : "Добавить друга"}
      </Button>

      <Button variant={"light"}>
        Написать сообщение
      </Button>
    </Card.Footer>
  );
};

const ProfileActions = () => (
  <Card.Footer>
    <Link to={PROFILE_EDIT_PATH} component={Card.Link}>
      Редактировать информацию
    </Link>
  </Card.Footer>
);


const DefaultUserCard = withAuthRequired(({user, Actions}) => {
  console.log({Actions});

  return (
    <Card>

      <Card.Header as={"header"}>
        <h1>{user.username}</h1>
      </Card.Header>

      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs={4}>
              Email:
            </Col>
            <Col>
              {user.email}
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col xs={4}>
              Телефон:
            </Col>
            <Col>
              {user.phone}
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col xs={4}>
              Пол:
            </Col>
            <Col>
              {user.sex}
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <Card.Title>
          О себе:
        </Card.Title>

        <Card.Text>
          {user.info}
        </Card.Text>
      </Card.Body>

      {Actions && (
        <UserCardContextProvider user={user}>
          <Actions/>
        </UserCardContextProvider>
      )}
    </Card>
  );
});

export const ProfileCard = () => {
  const [{userData}] = useUserContext();

  return ( <DefaultUserCard user={userData} Actions={ProfileActions}/> );
};

export const UserCard = ({user}) => (
  <DefaultUserCard user={user} Actions={UserActions}/>
)