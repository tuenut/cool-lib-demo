import React from "react";

import { Link } from "react-router-dom";

import { NavDropdown } from "react-bootstrap";

import { logOutUser, useUserContext } from "../App/Context";

import { FAVORITES_PATH, FRIENDS_PATH, HOME_PATH, MESSAGES_PATH, PROFILE_PATH } from "../../settings/routesPath";
import { Nav } from "react-bootstrap/esm/index";


export const UserDropdownMenu = () => {
  const [{userData}, dispatch] = useUserContext();

  return (
    <NavDropdown title={userData.username} id="basic-nav-dropdown">
      <Link to={PROFILE_PATH} component={NavDropdown.Item}>
        Мой профиль
      </Link>
      <Link to={FAVORITES_PATH} component={NavDropdown.Item}>
        Избранное
      </Link>
      <Link to={MESSAGES_PATH} component={NavDropdown.Item}>
        Сообщения
      </Link>
      <Link to={FRIENDS_PATH} component={NavDropdown.Item}>
        Друзья
      </Link>

      <NavDropdown.Divider/>

      <NavDropdown.Item onSelect={() => dispatch(logOutUser())}>
        Выйти
      </NavDropdown.Item>
    </NavDropdown>
  );
};