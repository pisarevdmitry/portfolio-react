import React from "react";
import styles from "../styles/Contacts.module.scss";
import { ReactComponent as Skype } from '../assets/images/svg/skype_n.svg';
import { ReactComponent as Phone } from '../assets/images/svg/phone_n.svg';
import { ReactComponent as Envelope } from '../assets/images/svg/envelope_n.svg';
import { ReactComponent as MapIcon } from '../assets/images/svg/map_n.svg';
export default function Contacts() {
  return (
    <div className={styles["contacts"]}>
      <div className={styles["contacts__title"]}>
        <div className={styles["contacts__subtitle"]}>Контакты</div>
      </div>
      <ul className={styles["contacts__list"]}>
        <li className={styles["contacts__item"]}>
          <div className={styles["contacts__icon"]}>
            <Skype className={styles["contacts__image"]}/>
          </div>
          <div className={styles["contacts__content"]}>
            <span className={styles['contacts__text']}>+79060761095</span>
          </div>
        </li>
        <li className={styles["contacts__item"]}>
          <div className={styles["contacts__icon"]}>
          <Phone className={styles["contacts__image"]}/>
          </div>
          <div className={"contacts__item"}>
            <span className={styles['contacts__text']}>+79060761095</span>
          </div>
        </li>
        <li className={styles["contacts__item"]}>
          <div className={styles["contacts__icon"]}>
          <Envelope className={styles["contacts__image"]}/>     
          </div>
          <div className={"contacts__item"}>
            <span className={styles['contacts__text']}>pisarev_dmitry@mail.ru</span>
          </div>
        </li>
        <li className={styles["contacts__item"]}>
          <div className={styles["contacts__icon"]}>
          <MapIcon className={styles["contacts__image"]}/>
          </div>
          <div className={styles["contacts__content"]}>
            <span className={styles['contacts__text']}>г.Москва</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
