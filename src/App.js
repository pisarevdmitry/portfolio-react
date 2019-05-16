import React, { PureComponent } from "react";
import "normalize.css/normalize.css";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./createStore";
import PrivateRoute from "./components/PrivateRoute";
import routes from "./routes";

class App extends PureComponent {
  renderPrivateRoute = Component => {
    return (
      <PrivateRoute>
        <Component />
      </PrivateRoute>
    );
  };
  renderRoutes() {
    return routes.map(route => {
      if (route.authRequired) {
        return (
          <Route
            key={route.path}
            exact={route.exact}
            render={this.renderPrivateRoute.bind(this, route.component)}
            path={route.path}
          />
        );
      }
      return (
        <Route
          key={route.path}
          exact={route.exact}
          component={route.component}
          path={route.path}
        />
      );
    });
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">{this.renderRoutes()}</div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
