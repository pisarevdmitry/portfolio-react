import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';
import {getPopupState, getPopupMsg , clearPopUp } from '../../modules/popup'
import Header from "./Header";
import Nav from "./Nav";
import PopUp from './PopUp'
import { adminRoutes } from "../../routes";
import styles from '../../styles/admin/AdminPage.module.scss'
class AdminPage extends PureComponent {
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
    const {clearPopUp, popup} = this.props;
    if(popup) {
      clearPopUp()
    }
  }
  closePopup = () => {
    const {clearPopUp} = this.props;
    clearPopUp()
  }
  render() {
    const {popup,msg} = this.props
    return (
      <div className={styles['admin-page']}>
        <Header />
        <Nav />
        <div className={styles.content}>
          <Switch>{this.renderRoutes()}</Switch>
          {popup && <PopUp msg={msg} onClose={this.closePopup}/>}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  popup: getPopupState(state),
  msg : getPopupMsg(state) 
})
export default connect(mapStateToProps, {clearPopUp})(AdminPage)