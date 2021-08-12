import React from "react";

import { createUseStyles } from "react-jss";

import { TheLayout } from "../TheLayout";
import { withUserContext, useUserContext, verifyUser } from "../User/UserContext";


const useStyles = createUseStyles({
  App: {
    height: "100%"
  }
});


export const App = withUserContext(() => {
  const classes = useStyles();
  const [satte, dispatch] = useUserContext();

  React.useEffect(() => {
    // dispatch(verifyUser());
  }, []);

  return (
    <div className={classes.App}>
      <TheLayout/>
    </div>
  );
});
