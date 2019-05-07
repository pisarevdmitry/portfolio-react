import React, { PureComponent } from "react";
import styles from '../styles/FeedbackForm.module.scss'
export default class FeedbackForm extends PureComponent {
  render() {
    return (
      <div className={styles.feedback}>
        <h2 className={styles['feedback__title']}>Связаться со мной</h2>
      </div>
    );
  }
}
