import React, { PureComponent } from "react";
import {isEmail} from 'validator'
import styles from "../styles/FeedbackForm.module.scss";
import formStyles from "../styles/Form.module.scss";
export default class FeedbackForm extends PureComponent {
  state = {
    name: "",
    email: "",
    textarea: "",
    error: ''
  };
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      textarea: ""
    });
  };
  validateFields =() => {
    const {name, email, textarea} = this.state
    if(!name || !email || !textarea) {
      return {status: false, msg: 'все поля требуется заполнить'}
    }
    if(!isEmail(email)) {
      return {status: false, msg: 'Некорректный email'}
    }
    
    return {status: true}
  }
  onSubmitHandler = (e) => {
   e.preventDefault();
    const isValid = this.validateFields();
    if(!isValid.status) {
      return this.setState({
        error: isValid.msg
      })
    }
    this.setState({
      error: ''
    })
  }
  render() {
    const { name, email, textarea, error } = this.state;
    return (
      <div className={styles.feedback}>
        <h2 className={styles["feedback__title"]}>Связаться со мной</h2>
        <form
          className={`${styles["feedback__form"]} ${formStyles["form"]}`}
          action=""
          method="POST"
          onSubmit={this.onSubmitHandler}
        >
          <div className={formStyles["form__row"]}>
            <input
              className={`${formStyles["form__input"]} ${
                styles["feedback__input"]
              }`}
              type="text"
              name="name"
              onChange={this.onChangeHandler}
              placeholder="Ваше имя"
              value={name}
            />
          </div>
          <div className={formStyles["form__row"]}>
            <input
              className={`${formStyles["form__input"]} ${
                styles["feedback__input"]
              }`}
              type="email"
              name="email"
              value={email}
              placeholder="Ваш email"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className={formStyles["form__row"]}>
            <textarea
              className={`${formStyles["form__textarea"]} ${
                styles["feedback__textarea"]
              }`}
              name="textarea"
              value={textarea}
              placeholder="Ваше сообщение"
              onChange={this.onChangeHandler}
            />
          </div>
          {error && <div className={styles["feedback__status"]}>{error}</div>}
          <div
            className={`${formStyles["form__row"]} ${
              formStyles["form__row_buttons"]
            }`}
          >
            <input
              className={`${formStyles["form__submit"]} ${
                styles["feedback__submit"]
              }`}
              type="submit"
              name="submit"
              value="Отправить"
            />
            <input
              className={`${formStyles["form__reset"]} ${
                styles["feedback__reset"]
              }`}
              type="reset"
              name="submit"
              value="Очистить"
              onClick={this.resetForm}
            />
          </div>
        </form>
      </div>
    );
  }
}
