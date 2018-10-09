import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menus from "components/Menus/Menus";

const { Fragment } = React;

import routes from "./routes";

ReactDOM.render(
  <Fragment>
    <Menus />
    <Router>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              strict={route.strict}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  </Fragment>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept(() => {}, () => {});
}
