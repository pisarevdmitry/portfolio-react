import React, { PureComponent } from "react";
import styles from "../../styles/SkillItem.module.scss";

export default class SkillItem extends PureComponent {
  constructor(props) {
    super(props)
    const {skill} = props;
    this.state = {
        strokeDashArray : this.calcDashArray(skill.percents)
    }
  }
  calcDashArray = (percents) => {
      return (2 *Math.PI * 45 * (percents / 100))
  };

  render() {
    const { skill } = this.props;
    const {strokeDashArray} = this.state
    return (
      <div className={styles["skill"]}>
        <svg
          className={styles["skill__circle"]}
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
        >
          <circle
            className={styles["skill__circle-first"]}
            r="45"
            cx="50%"
            cy="50%"
            fill="none"
          />
          <circle
            className={styles["skill__circle-second"]}
            style={{'strokeDasharray': `${strokeDashArray} ${2 *Math.PI * 45}`}}
            r="45"
            cx="50%"
            cy="50%"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <span className={styles["skill__title"]}>{skill.name}</span>
      </div>
    );
  }
}
