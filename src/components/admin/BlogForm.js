import React, { PureComponent } from "react";
import { withFormik } from "formik";
import {connect} from 'react-redux';
import {addArticleRequest, getRequestProcessing} from '../../modules/blog'
import styles from "../../styles/admin/BlogForm.module.scss";
import inputStyles from "../../styles/admin/Input.module.scss";
import buttonStyles from "../../styles/admin/Button.module.scss";

const fields = [
  {
    type: "text",
    placeholder: "Название",
    label: "title"
  },
  {
    type: "text",
    placeholder: "Дата",
    label: "date"
  },
  {
    type: "textarea",
    placeholder: "Содержание",
    label: "text"
  }
];
class BlogForm extends PureComponent {
  renderForm = () => {
    const { values, touched, errors, handleChange } = this.props;
    return fields.map(field => {
      if (field.type === "text") {
        return (
          <div key={field.placeholder} className={styles.row}>
            <input
              name={field.label}
              value={values[field.label]}
              onChange={handleChange}
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
        <div key={field.placeholder} className={styles.row}>
          <textarea
            name={field.label}
            value={values[field.label]}
            onChange={handleChange}
            className={styles["blog-textarea"]}
            type={field.type}
            placeholder={field.placeholder}
          />
          {errors[field.label] && touched[field.label] && (
            <span className={styles["error"]}>{errors[field.label]}</span>
          )}
        </div>
      );
    });
  };
  render() {
    const { handleSubmit, requestProcessing } = this.props;
    console.log(requestProcessing)
    return (
      <div className={styles.blog}>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: "Страница &laquo Блог &raquo" }}
        />
        <form onSubmit={handleSubmit}>
          <h3 className={styles["form-title"]}>Добавить запись</h3>
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


export default connect(mapStateToProps,{addArticleRequest}) (withFormik({
  mapPropsToValues: () => {
    return fields.reduce((acc, field) => {
      acc[field.label] = "";
      return acc;
    }, {});
  },
  validate: props => {
    const errors = {};
    Object.entries(props).forEach(([name, value]) => {
      if (!value) {
        errors[name] = "fill this field";
      }
    });
    return errors;
  },
  handleSubmit: (values, {props, validateField, resetForm }) => {
    const errors = validateField();
    const {addArticleRequest} = props;
   addArticleRequest({values,onSuccess: () => {
      resetForm()
    }}) 
  }
})(BlogForm));
