import React from "react";
import { defaultState, userReducer } from "./reducer";


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

