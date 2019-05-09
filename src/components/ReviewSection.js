import React, { PureComponent } from "react";
import styles from "../styles/ReviewSection.module.scss";
import { ReactComponent as Stars } from "../assets/images/svg/stars3.svg";
import Image1 from '../assets/images/jpg/reviewer1.jpg'
import Image2 from '../assets/images/jpg/reviewer2.jpg';
import FeedbackForm from './FeedbackForm';
export default class ReviewSection extends PureComponent {
  render() {
    return (
      <section className={styles["reviews"]}>
        <div className={styles["reviews__title"]}>
          Что обо мне говорят
          <span className={styles["rewiews__bg"]}>
            <Stars className={styles["rewiews__image"]} />
          </span>
        </div>
        <ul className={styles["reviewers"]}>
          <li className={styles["reviewer"]}>
            <div className={styles["reviewer__image"]}>
              <img
                className={`${styles["reviewer__picture"]} ${styles["reviewer__picture_big"]}`} 
                src={Image1}
                alt='reviewerImage'
              />
            </div>
            <div className={styles["reviewer__text"]}>
              Этот парень проходил обучение веб-разработке не где-то, а в
              LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных
              ночей!
            </div>
            <div className={styles["reviewer__signature"]}>
              <span className={styles["reviewer__name"]}>Ковальчук Дмитрий</span>
              <span>— основатель Loftschool</span>
            </div>
          </li>
          <li className={styles["reviewer"]}>
            <div className={styles["reviewer__image"]}>
              <img
                className={styles["reviewer__picture"]}
                src={Image2}
                alt='reviewerImage'
              />
            </div>
            <div className={styles["reviewer__text"]}>
              Этот код выдержит любые испытания. Только пожалуйста, не
              загружается сайт на слишком старых браузерах!
            </div>
            <div className={styles["reviewer__signature"]}>
              <span className={styles["reviewer__name"]}>Сабанцев Владимир</span>
              <span>— преподаватель</span>
            </div>
          </li>
        </ul>
        <FeedbackForm/>
      </section>
    );
  }
}
