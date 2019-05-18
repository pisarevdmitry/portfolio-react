import React from "react";
import styles from "../../styles/SliderDetails.module.scss";
import PropTypes from 'prop-types';

export default function SliderDetails(props) {
  const {work} = props
  return (
    <div className={styles["details"]}>
      <div className={styles["details__title"]} >{work.title}</div>
      <div className={styles["details__tech"]} >{work.tech}</div>
      <div className={styles["details__link"]}>
        <a className={styles["details__btn"]} href={work.link}>
          <span className={styles["details__btn-text"]}>Посмотреть сайт</span>
        </a>
      </div>
    </div>
  );
}

SliderDetails.propTypes = {
  work: PropTypes.object.isRequired
}