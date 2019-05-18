import React from "react";
import styles from '../../styles/SliderPreview.module.scss';
import PropTypes from 'prop-types';

export default function SliderPreview(props) {
  const {work} = props
  console.log(work)
  return (
    <div className={styles["preview"]}>
      <div className={styles["preview__image"]}>
        <img className={styles["preview__picture"]} src={`/upload/${work.file.filename}`} />
      </div>
    </div>
  );
}
SliderPreview.propTypes = {
  work: PropTypes.object.isRequired
}