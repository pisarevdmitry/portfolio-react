import React, { PureComponent } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import cx from "classnames";
import styles from "../styles/Navigation.module.scss";

class Navigation extends PureComponent {
  static propTypes = {
    isFixed: PropTypes.bool,
    onRouteChange: PropTypes.func,
    location: PropTypes.object.isRequired
  }
  render() {
    const {
      isFixed,
      onRouteChange,
      location: { pathname }
    } = this.props;
    return (
      <nav
        className={cx(styles.navigation, {
          [styles["navigation_fixed"]]: isFixed
        })}
      >
        <ul className={styles["navigation__list"]}>
          <li>
            <Link
              onClick={onRouteChange || null}
              className={cx(styles["navigation__link"], {
                [styles["navigation__link_current"]]: pathname === "/my-works"
              })}
              to="/my-works"
            >
              <span className={styles["navigation__text"]}>Мои работы</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={onRouteChange || null}
              className={cx(styles["navigation__link"], {
                [styles["navigation__link_current"]]: pathname === "/about"
              })}
              to="/about"
            >
              <span className={styles["navigation__text"]}>Обо мне</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={onRouteChange || null}
              className={cx(styles["navigation__link"], {
                [styles["navigation__link_current"]]: pathname === "/blog"
              })}
              to="/blog"
            >
              <span className={styles["navigation__text"]}>Блог</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={onRouteChange || null}
              className={cx(styles["navigation__link"], {
                [styles["navigation__link_current"]]: pathname === "/"
              })}
              to="/"
            >
              <span className={styles["navigation__text"]}>Авторизация</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default withRouter(Navigation);
