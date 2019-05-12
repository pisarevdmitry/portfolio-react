import React, { PureComponent, Fragment } from "react";
import cx from "classnames";
import FixedMenu from "./FixedMenu";
import styles from "../styles/HamburgerMenu.module.scss";
export default class HamburgerMenu extends PureComponent {
  state = {
    opened: false
  };
  onClickHandler = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  };
  closeMenu = () => {
    this.setState({
      opened: false
    });
  }
  render() {
    const { opened } = this.state;
    return (
      <Fragment>
        <button onClick={this.onClickHandler} className={styles["fixed-menu"]}>
          <div
            className={cx(styles["fixed-menu-bars"], {
              [styles["fixed-menu-bars_opened"]]: opened
            })}
          />
        </button>
        <FixedMenu opened={opened} onRouteChange ={this.closeMenu}/>
      </Fragment>
    );
  }
}
