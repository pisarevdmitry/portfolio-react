import React, { PureComponent } from "react";
import "normalize.css/normalize.css";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./createStore";
import Header from "./components/Home";
import routes from "./routes";

class App extends PureComponent {
  renderRoutes() {
    return routes.map(route => {
      return(
        <Route key={route.path} exact={route.exact} component={route.component} path={route.path}/>
      )
    })
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            {this.renderRoutes()}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
