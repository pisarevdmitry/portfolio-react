import React from "react";
import { Link} from "react-router-dom";
import styles from '../../styles/admin/Header.module.scss'

export default function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['title']}>Панель администрирования</div>
      <Link className={styles['logout']} to='/'>Вернуться на сайт</Link>
    </header>
  );
}
