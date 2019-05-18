import React, { PureComponent } from "react";
import { isEmail } from "validator";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {
  getFeedbackProccessing,
  getFeedbackMsg,
  feedBackRequest
} from "../modules/feedback";
import styles from "../styles/FeedbackForm.module.scss";
import formStyles from "../styles/Form.module.scss";
 class FeedbackForm extends PureComponent {
   static propTypes = {
     proceesing: PropTypes.bool.isRequired,
     serverMsg: PropTypes.string,
     feedBackRequest: PropTypes.func.isRequired
   }
  state = {
    name: "",
    email: "",
    textarea: "",
    error: ""
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
  validateFields = () => {
    const { name, email, textarea } = this.state;
    if (!name || !email || !textarea) {
      return { status: false, msg: "все поля требуется заполнить" };
    }
    if (!isEmail(email)) {
      return { status: false, msg: "Некорректный email" };
    }

    return { status: true };
  };
  onSubmitHandler = e => {
    e.preventDefault();
    const {feedBackRequest} = this.props
    const {name, email, textarea} = this.state
    const isValid = this.validateFields();
    if (!isValid.status) {
      return this.setState({
        error: isValid.msg
      });
    }
    feedBackRequest({name, email, text: textarea})
    this.setState({
      error: ""
    });
  };
  render() {
    const { name, email, textarea, error } = this.state;
    const {proceesing, serverMsg} = this.props
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
          {(error || serverMsg) && <div className={styles["feedback__status"]}>{error || serverMsg}</div>}
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
              disabled={proceesing}
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

const mapStateToProps = (state) => ({
  serverMsg : getFeedbackMsg(state),
  proceesing: getFeedbackProccessing(state)
})
export default connect(mapStateToProps,{feedBackRequest})(FeedbackForm)