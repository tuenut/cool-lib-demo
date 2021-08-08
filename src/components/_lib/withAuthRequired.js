import React from "react";

import { Redirect } from "react-router-dom";

import { useUserContext } from "../User/UserContext";

import { HOME_PATH } from "../../settings/routesPath";


export const withAuthRequired = (Component) => (props) => {
  const [{authenticated}] = useUserContext();

  if ( !authenticated ) {
    return ( <Redirect to={HOME_PATH}/> );
  } else {
    return ( <Component {...props}/> );
  }
};

export const withouthAuthRequired = (Component) => (props) => {
  const [{authenticated}] = useUserContext();

  if ( authenticated ) {
    return ( <Redirect to={HOME_PATH}/> );
  } else {
    return ( <Component {...props}/> );
  }
};