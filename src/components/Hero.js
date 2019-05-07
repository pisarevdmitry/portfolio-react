import React from "react";
import {Link} from 'react-router-dom'
import panelStyles from "../styles/Panel.module.scss";
import Social from "./Social";
import styles from "../styles/Hero.module.scss";
import Photo from "../assets/images/jpg/photo1.jpg";
export default function Hero() {
  return (
    <div className={`${panelStyles.panel} ${panelStyles["panel_intro"]}`}>
      <div className={styles["hero-preview"]}>
        <div className={styles["hero-preview__image"]}>
          <img src={Photo} alt="myphoto" />
        </div>
        <h2 className={styles["hero-preview__title"]}>Дмитрий Писарев</h2>
        <span className={styles["hero-preview__text"]}>
          Личный сайт разработчика
        </span>
        <Social />
        <ul className={styles['hero__nav']}>
          <li className={styles['hero__nav-item']}>
            <Link className={styles['hero__nav-link']} to='/my-works'> 
              Мои работы
            </Link>
          </li>
          <li className={styles['hero__nav-item']}>
            <Link className={styles['hero__nav-link']} to='/about'> 
                Обо мне
            </Link>
          </li>
          <li className={styles['hero__nav-item']}>
            <Link className={styles['hero__nav-link']} to='/blog'> 
               Блог
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
