import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import HeaderSection from "./HeaderSection";
import Footer from "./Footer";
import { mainRoutes } from "../routes";
export default class Main extends PureComponent {
    renderRoutes() {
        return mainRoutes.map(route => {
          return(
            <Route key={route.path} exact={route.exact} component={route.component} path={route.path}/>
          )
        })
      }
  render() {
    return (
      <div style={{position: 'relative'}}>
        <HeaderSection location={this.props.location} />
        <Switch>{this.renderRoutes()}</Switch>
        <Footer isAbsolute={this.props.location.pathname !== "/blog"} /> 
      </div>
    );
  }
}
