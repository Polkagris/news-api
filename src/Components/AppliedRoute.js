import React from "react";
import { Route } from "react-router-dom";

function AppliedRoute({ component: C, ...rest }) {
  return <Route {...rest} render={props => <C {...props} />} />;
}

export default AppliedRoute;
