import React, { PureComponent } from "react";
import styles from "../styles/Preloader.module.scss";
export default class Prelloader extends PureComponent {
  calcDashArray() {
    const {percents} = this.props
    return (2 *Math.PI * 25) * percents
  }
  render() {
    const {percents} = this.props
    return (
      <div className={styles["preloader"]}>
        <div className={styles["spinner"]}>
          <svg
            className={styles["spinner__image"]}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="80.586px"
            height="80.73px"
            viewBox="0 0 48.586 75.73"
            enableBackground="new 0 0 52.586 63.73"
          >
            <text
              className={styles["text"]}
              x="24"
              y="30"
              fontFamily="'ArialMT'"
              fontSize="24"
            >
              {percents * 100}
            </text>
            <circle
              className={styles["inner"]}
              fill="none"
              stroke="#000000"
              strokeDasharray={`${this.calcDashArray()} ${2 *Math.PI * 25}`}
              strokeWidth="2.5864"
              strokeMiterlimit="10"
              cx="26.293"
              cy="37.438"
              r="25"
              transform="rotate(-90 25 38)"
            />
            <circle className={styles["outer"]} cx="26.293" cy="4.5" r="4.5" />
          </svg>
        </div>
      </div>
    );
  }
}
