import React from "react";
import styles from '../styles/Social.module.scss';
import { ReactComponent as VK } from '../assets/images/svg/vk.svg';
import { ReactComponent as GitHub } from '../assets/images/svg/github.svg';
import { ReactComponent as Inst } from '../assets/images/svg/in.svg';

export default function Social() {
  return (
    <ul className={styles.social}>
      <li className={styles['social__item']}>
        <a className={styles['social__link']} href="https://vk.com/id438060317">
          <VK className={styles['social__image']}/>
        </a>
      </li>
      <li className={styles['social__item']}>
        <a className={styles['social__link']} href="https://github.com/pisarevdmitry">
        <GitHub className={styles['social__image']}/>
        </a>
      </li>
      <li className={styles['social__item']}>
        <a className={styles['social__link']} href="/">
        <Inst className={styles['social__image']}/>
        </a>
      </li>
    </ul>
  );
}
