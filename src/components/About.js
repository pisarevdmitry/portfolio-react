import React from "react";
import styles from "../styles/About.module.scss";
import { ReactComponent as Stars } from "../assets/images/svg/stars2.svg";
import Skills from "./Skills/Skills";
export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles["about__left"]}>
        <div className={styles["about__left-title"]}>
          <div className={styles["about-title"]}>
            Обо мне
            <span className={styles["about-bg"]}>
              <Stars className={styles["about__image"]} />
            </span>
          </div>
        </div>
        <div className={styles["about__left-content"]}>
          <div className={styles["user-description"]}>
            <div className={styles["user-description__image"]} />
            <div className={styles["user-description__title"]}>
              <div className={styles["user-description__subtitle"]}>Кто я</div>
            </div>
            <div className={styles["user-description__text"]}>
              <p className={styles["main-text"]}>
                Я веб разработчик из Москвы. Мне 31 год. Я занимаюсь разработкой
                современных сайтов и приложений. Мне нравится делать интересные
                и современные проекты.
              </p>
              <p className={styles["main-text"]}>
                Этот сайт я сделал в рамках обучения в Школе онлайн образования
                LoftSchool. Чуть позже я освежу в нём свой контент. А пока
                посмотрите,как тут всё классно и красиво!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["about__right"]}>
        <div className={styles["about__right-title"]}>
          <div className={styles["user-description__subtitle"]}>
            Чем я могу быть вам полезен
          </div>
        </div>
        <div className={styles["about__right-text"]}>
          <p className={styles["main-text"]}>
            Больше всего меня привлекет Frontend разработка, но я также знаком и
            могу решать не сложные задачи на Backend. Но давайте по порядку.
          </p>
        </div>
        <div className={styles["about__right-content"]}>
          <Skills />
        </div>
      </div>
    </section>
  );
}
