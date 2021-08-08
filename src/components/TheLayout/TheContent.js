import React from "react";

import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import routes from "../../settings/routes";
import { HOME_PATH } from "../../settings/routesPath";


const TITLE = "Уютненькая Библиотечка";

export const TheContent = () => {
  const location = useLocation();

  React.useEffect(() => {
    const currentRoute = routes.find((route) =>
      ( route.path === location.pathname )
    );

    const suffix = currentRoute?.title ? ": " + currentRoute.title : "";

    document.title = `${TITLE}${suffix}`;
  }, [location]);

  return (
    <Switch>
      {routes.map(({component: Component, ...routeConfig}, idx) => (
        <Route key={idx} {...routeConfig}>
          <Component/>
        </Route>
      ))}
      <Redirect from={"/"} to={HOME_PATH}/>
    </Switch>
  );
};

