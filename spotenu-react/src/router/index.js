import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/footer";

export const routes = {
  feed: "/",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.feed} component={Footer} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
