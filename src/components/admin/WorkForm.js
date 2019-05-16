import React, { PureComponent } from "react";
import styles from "../../styles/admin/WorkForm.module.scss";
import { withFormik } from "formik";
import { connect } from "react-redux";
import {addWorkRequest, getRequestProcessing} from '../../modules/works'
import inputStyles from "../../styles/admin/Input.module.scss";
import buttonStyles from "../../styles/admin/Button.module.scss";
import { ReactComponent as Icon } from "../../assets/images/svg/image-pic.svg";
const fields = [
  {
    type: "text",
    placeholder: "Название проекта",
    label: "title"
  },
  {
    type: "text",
    placeholder: "Технологии",
    label: "tech"
  },
  {
    type: "text",
    placeholder: "Линк",
    label: "link"
  },
  {
    type: "file",
    label: "file"
  }
];
class WorkForm extends PureComponent {
  handleChange =(e) => {
    const {  handleChange, setFieldValue } = this.props;
    if(e.target.type === 'file') {
        console.log(e.target.files[0])
        setFieldValue(e.target.name, e.target.files[0])
    } else {
      handleChange(e)
    }
  }
  renderForm = () => {
    const { values, touched, errors } = this.props;
    return fields.map(field => {
      if (field.type === "text") {
        return (
          <div key={field.placeholder} className={styles.row}>
            <input
              name={field.label}
              value={values[field.label]}
              onChange={this.handleChange}
              className={inputStyles.input}
              type={field.type}
              placeholder={field.placeholder}
            />
             {errors[field.label] && touched[field.label] && (
              <span className={styles["error"]}>{errors[field.label]}</span>
            )}
          </div>
        );
      }
      return (
        <div key={field.type} className={styles.row}>
          <label className={styles["upload"]}>
            <input
              className={styles["type-file"]}
              type={field.type}
              name={field.label}
              onChange={this.handleChange}
            />
            <Icon className={styles["upload__icon"]} />
            <span className={styles["upload__text"]}>Загрузить картинку</span>
            {errors[field.label] && touched[field.label] && (
              <span className={styles["error"]}>{errors[field.label]}</span>
            )}
          </label>
        </div>
      );
    });
  };
  render() {
    const { handleSubmit, requestProcessing } = this.props;
    return (
      <div>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{
            __html: "Страница &laquo Мои работы &raquo"
          }}
        />
        <form onSubmit={handleSubmit}>
          <h3 className={styles["form-title"]}>Добавить работу</h3>
          {this.renderForm()}
          <div className={styles.row}>
            <button disabled={requestProcessing} className={buttonStyles.button}>Добавить</button>
          </div>
        </form>
      </div>
    );
  }
}

 const mapStateToProps = state => ({
  requestProcessing : getRequestProcessing(state)
}) 

export default connect(mapStateToProps,{addWorkRequest})(
  withFormik({
    mapPropsToValues: () => {
      return fields.reduce((acc, field) => {
        acc[field.label] = "";
        return acc;
      }, {});
    },
    handleChange:(e) => {
      console.log(e)
    },
    validate: props => {
      const errors = {};
      console.log(props)
      Object.entries(props).forEach(([name, value]) => {
        if (!value) {
          errors[name] = "fill this field";
        }
        if(name === 'file' && !value) {
          errors[name] = "choose file  to upload";
        }
      });
      return errors;
    },
    handleSubmit: (values, { props, validateField, resetForm }) => {
      validateField();
      const { addWorkRequest } = props;
      addWorkRequest({
        values,
        onSuccess: () => {
          resetForm();
        }
      }); 
    }
  })(WorkForm)
);
