import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.scss";

export default class Navigation extends PureComponent {
  render() {
    return (
      <nav className={styles.navigation}>
        <ul className={styles["navigation__list"]}>
          <li>
            <Link className={styles["navigation__link"]} to="/my-works">
              <span className={styles["navigation__text"]}>Мои работы</span>
            </Link>
          </li>
          <li>
            <Link className={styles["navigation__link"]} to="/about">
              <span className={styles["navigation__text"]}>Обо мне</span>
            </Link>
          </li>
          <li>
            <Link className={styles["navigation__link"]} to="/blog">
              <span className={styles["navigation__text"]}>Блог</span>
            </Link>
          </li>
          <li>
            <Link className={styles["navigation__link"]} to="/">
              <span className={styles["navigation__text"]}>Авторизация</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
