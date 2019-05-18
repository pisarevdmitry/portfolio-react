import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import { getauthProccessing, getauthMsg, authRequest } from "../modules/user";
import panelStyles from "../styles/Panel.module.scss";
import { Link } from "react-router-dom";
import styles from "../styles/LogIn.module.scss";
import formStyles from "../styles/Form.module.scss";
import { ReactComponent as LoginImage } from "../assets/images/svg/login.svg";
import { ReactComponent as PasswordImage } from "../assets/images/svg/password.svg";

 class LogIn extends PureComponent {
   static propTypes = {
     procesing: PropTypes.bool.isRequired,
     serverMsg: PropTypes.string,
     authRequest: PropTypes.func.isRequired 
   }
  state = {
    name: "",
    password: "",
    checkbox: false,
    radio: "",
    error: ""
  };
  onChangeHandler = e => {
    if (e.target.type === "checkbox") {
      return this.setState({
        checkbox: !this.state.checkbox
      });
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  validateFields = () => {
    const { name, password, checkbox, radio } = this.state;
    if (!name || !password) {
      return { status: false, msg: "name or password is required" };
    }
    if (!checkbox) {
      return { status: false, msg: "confirm yourself" };
    }
    if (!radio || radio === "no") {
      return { status: false, msg: "are you robot" };
    }
    return { status: true };
  };
  onSubmitHandler = e => {
    e.preventDefault();
    const {name, password, radio, checkbox} = this.state;
    const {authRequest, history} = this.props
    const isValid = this.validateFields();
    if (!isValid.status) {
      return this.setState({
        error: isValid.msg
      });
    }
    authRequest({values:{name, password, radio, checkbox}, onSuccess: () => history.push('/admin')})
    this.setState({
      error: ""
    });
  };
  render() {
    const { name, password, checkbox, radio, error } = this.state;
    const { procesing, serverMsg} = this.props
    return (
      <div className={`${panelStyles.panel} ${panelStyles["panel_intro"]}`}>
        <div className={styles.autherization}>
          <h2 className={styles["autherization__title"]}>авторизуйтесь</h2>
          <form onSubmit={this.onSubmitHandler} className={formStyles.form}>
            <div className={formStyles["form__row"]}>
              <label
                className={`${formStyles["form__label"]} ${
                  formStyles["form__label_text"]
                }`}
                htmlFor="name"
              >
                <LoginImage className={formStyles["form__image"]} />
              </label>
              <input
                className={formStyles["form__input"]}
                type="text"
                name="name"
                id="name"
                placeholder="Логин"
                value={name}
                required
                onChange={this.onChangeHandler}
              />
            </div>
            <div className={formStyles["form__row"]}>
              <label
                className={`${formStyles["form__label"]} ${
                  formStyles["form__label_text"]
                }`}
                htmlFor="password"
              >
                <PasswordImage className={formStyles["form__image"]} />
              </label>
              <input
                className={formStyles["form__input"]}
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
                value={password}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className={formStyles["form__row"]}>
              <input
                className={formStyles["form__input"]}
                type="checkbox"
                name="chekbox"
                id="checkbox"
                value={true}
                onChange={this.onChangeHandler}
                checked={checkbox}
              />
              <label
                className={`${formStyles["form__label"]} ${
                  formStyles["form__label_type_check"]
                }`}
                htmlFor="checkbox"
              >
                Я человек
              </label>
            </div>
            <div
              className={`${formStyles["form__row"]} ${
                formStyles["form__row_radio"]
              }`}
            >
              <div className={formStyles["form__radio_title"]}>
                Вы точно не робот?
              </div>
              <div className={formStyles["form__column"]}>
                <input
                  className={formStyles["form__input"]}
                  type="radio"
                  name="radio"
                  id="yes"
                  value="yes"
                  onChange={this.onChangeHandler}
                  checked={radio === "yes"}
                />
                <label
                  className={`${formStyles["form__label"]} ${
                    formStyles["form__label_type_radio"]
                  }`}
                  htmlFor="yes"
                >
                  Да
                </label>
              </div>
              <div className={formStyles["form__column"]}>
                <input
                  className={formStyles["form__input"]}
                  type="radio"
                  name="radio"
                  id="no"
                  value="no"
                  onChange={this.onChangeHandler}
                  checked={radio === "no"}
                />
                <label
                  className={`${formStyles["form__label"]} ${
                    formStyles["form__label_type_radio"]
                  }`}
                  htmlFor="no"
                >
                  Не уверен
                </label>
              </div>
            </div>
            {(error || serverMsg) && (
              <div className={styles["autherization__message"]}>{error || serverMsg}</div>
            )}
            <div
              className={`${formStyles["form__row"]} ${
                formStyles["form__row_buttons"]
              } ${formStyles["form__row_auth"]}`}
            >
              <Link className={formStyles["form__link"]} to="/my-works">
                Мои работы
              </Link>
              <input
                className={formStyles["form__submit"]}
                type="submit"
                name="submit"
                value="Войти"
                disabled={procesing}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  serverMsg : getauthMsg(state),
  procesing: getauthProccessing(state)
})
export default withRouter(connect(mapStateToProps,{authRequest})(LogIn))