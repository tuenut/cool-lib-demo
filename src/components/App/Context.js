import React from "react";

import { USERS } from "../../testData";


const defaultState = {
  authenticated: false,
  userData: null,
  error: null
};

export const LOGIN_USER_ACTION = "LOGIN_USER_ACTION";
export const LOGOUT_USER_ACTION = "LOGOUT_USER_ACTION";

export const logInUser = (login, password) => ({
  type: LOGIN_USER_ACTION,
  login,
  password
});

export const logOutUser = () => ({
  type: LOGOUT_USER_ACTION
});

const userReducer = (state = defaultState, action) => {
  switch ( action.type ) {
    case LOGIN_USER_ACTION:
      const userData = USERS.find((user) => user.email === action.login);

      if ( userData ) {
        return ({
          ...state,
          authenticated: true,
          userData,
          error: null
        });
      }
      else {
        return ({
          ...state,
          error: 404
        });
      }

    case LOGOUT_USER_ACTION:
      return ({
        ...defaultState,
      });

    default:
      return state;
  }
};

const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(userReducer, defaultState);

  const value = React.useMemo(() => [state, dispatch], [state]);

  return (
    <UserContext.Provider value={value} {...props}/>
  );
};


export const useUserContext = () => React.useContext(UserContext);

export const withUserContext = (Component) => (props) => (
  <UserContextProvider>
    <Component {...props}/>
  </UserContextProvider>
);

