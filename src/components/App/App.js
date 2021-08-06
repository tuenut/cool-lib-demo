import React from "react";

import { createUseStyles } from "react-jss";

import { TheLayout } from "../TheLayout";
import { withUserContext } from "./Context";


const useStyles = createUseStyles({
  App: {
    height: "100%"
  }
});


export const App = withUserContext(() => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <TheLayout/>}
    </div>
  );
});

