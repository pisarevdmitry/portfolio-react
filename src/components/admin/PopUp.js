import React, { PureComponent } from 'react'
import styles from '../../styles/admin/PopUp.module.scss'
import PropTypes from 'prop-types';
import buttonStyles from "../../styles/admin/Button.module.scss";
export default class PopUp extends PureComponent {
  static propTypes = {
    msg: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
  }
  render() {
      const {msg, onClose} = this.props
    return (
      <div className={styles['popUp']}>
        <div>{msg}</div>
        <button onClick={onClose} className={buttonStyles.button}>Закрыть</button>  
      </div>
    )
  }
}
