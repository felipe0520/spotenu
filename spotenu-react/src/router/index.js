import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../containers/login";
import Register from "../containers/register";
import Feed from "../containers/feed";

export const routes = {
  login: "/login",
  register: "/register",
  feed: "/",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.register} component={Register} />
        <Route exact path={routes.feed} component={Feed} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
