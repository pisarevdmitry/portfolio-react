import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPopupState, getPopupMsg, clearPopUp } from "../../modules/popup";
import Header from "./Header";
import Nav from "./Nav";
import PopUp from "./PopUp";
import ErrorPage from "../ErrorPage";
import { adminRoutes } from "../../routes";
import styles from "../../styles/admin/AdminPage.module.scss";
class AdminPage extends PureComponent {
  static propTypes = {
    popup: PropTypes.bool.isRequired,
    msg: PropTypes.string,
    clearPopUp: PropTypes.func.isRequired
  };
  renderRoutes() {
    return adminRoutes.map(route => {
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
  componentWillUnmount() {
    const { clearPopUp, popup } = this.props;
    if (popup) {
      clearPopUp();
    }
  }
  closePopup = () => {
    const { clearPopUp } = this.props;
    clearPopUp();
  };
  render() {
    const { popup, msg } = this.props;
    return (
      <div className={styles["admin-page"]}>
        <Helmet>
          <title>AdminPage</title>
        </Helmet>
        <Header />
        <Nav />
        <div className={styles.content}>
          <Switch>
            {this.renderRoutes()}
            <Route component={ErrorPage} />
          </Switch>
          {popup && <PopUp msg={msg} onClose={this.closePopup} />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  popup: getPopupState(state),
  msg: getPopupMsg(state)
});
export default connect(
  mapStateToProps,
  { clearPopUp }
)(AdminPage);
