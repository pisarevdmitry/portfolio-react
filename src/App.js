import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import "normalize.css/normalize.css";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import store from "./createStore";
import ErrorPage from './components/ErrorPage'
import PrivateRoute from "./components/PrivateRoute";
import Preloader from "./components/Preloader";
import routes from "./routes";

class App extends PureComponent {
  state = { loaded: false, RequiredAssets: 1, currentlyLoadded: 0 };
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
  preloadAssets = onLoad => {
    return new Promise(resolve => {
      const image = import("./assets/images/png/Layer 1-min.png");
      image.then(module => {
        const img = document.createElement("img");
        img.src = module.default;
        img.onload = () => {
          onLoad();
          resolve()
        };
      });
    });
  };
  onLoad = () => {
    this.setState(state => ({
      currentlyLoadded: state.currentlyLoadded + 1
    }));
  };
  componentDidMount() {
    const preload = this.preloadAssets(this.onLoad);
    preload.then(() => {
      setTimeout(() => {
        this.setState({ loaded: true });
      }, 1000);
    });
  }
  render() {
    const { loaded, RequiredAssets, currentlyLoadded } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Helmet>
            <meta content="ie=edge" httpEquiv="x-ua-compatible" />
          </Helmet>
          {!loaded && <Preloader  percents ={(currentlyLoadded / RequiredAssets)}/>}
          <div className="App">
            <Switch>
              {this.renderRoutes()}
              <Route component={ErrorPage}/>
            </Switch>
          
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
