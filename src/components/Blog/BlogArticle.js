import React from "react";
import PropTypes from 'prop-types';
import styles from '../../styles/BlogArticle.module.scss'
export default function BlogArticle(props) {
    const {article} = props
  return (
    <div>
      <h2 className={styles["article-title"]}>{article.title}</h2>
      <span className={styles['article__date']}>{article.date}</span>
      <p className={styles['article__text']}>
        {article.body}
      </p>
    </div>
  );
}

BlogArticle.propTypes = {
  article: PropTypes.object.isRequired
}