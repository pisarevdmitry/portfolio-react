import React from "react";
import styles from '../../styles/SlideItem.module.scss'
import PropTypes from 'prop-types';

export default function SliderItem(props) {
  return (
    <div className={styles["slider__image"]}>
      <img
        className={styles["slider__picture"]}
        src={`/upload/${props.slide.file.filename}`}
        alt="slideitem"
      />
    </div>
  );
}
SliderItem.propTypes = {
  slide: PropTypes.object.isRequired
}