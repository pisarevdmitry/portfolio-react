import React from "react";
import cx from "classnames";
import Social from "./Social";
import Signature from "./Signature";
import Navigation from './Navigation'
import styles from "../styles/Footer.module.scss";
const Footer = props => {
  console.log(props);
  return (
    <footer
      className={cx(styles.footer, {
        [styles["footer_absolute"]]: props.isAbsolute
      })}
    >
      <div className={styles["footer__column"]}>
        <span className={styles["footer__text"]}>
          Этот сайт я сделал в рамках обучения в Школе онлайн образования
          LoftSchool.
        </span>
      </div>
      <div className={styles["footer__column"]}>
        <Navigation/>
        <Social />
      </div>
      <div className={styles["footer__column"]}>
        <span className={styles["footer__text"]}>Skype: +79060761095</span>
        <span className={styles["footer__text"]}>pisarev_dmitry@mail.ru</span>
        <span className={styles["footer__text"]}>+7 906 076 10 95</span>
        <span className={styles["footer__text"]}>г.Москва</span>
      </div>
      <div className={styles["footer__signature"]}>
        <Signature />
      </div>
    </footer>
  );
};

export default Footer;
