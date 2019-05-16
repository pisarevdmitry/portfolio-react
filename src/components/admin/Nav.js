import React, { PureComponent } from "react";
import styles from "../../styles/admin/Nav.module.scss";
import { NavLink } from "react-router-dom";
const links = [
  { name: "Skills", href: "/admin", exact: true },
  { name: "Blog", href: "/admin/blog" },
  { name: "Works", href: "/admin/works" }
];

export default class Nav extends PureComponent {
  renderNav = () => {
    return links.map(link => (
      <li key={link.name}className={styles["list__item"]}>
        <NavLink
          exact={link.exact}
          activeClassName={styles["active-link"]}
          className={styles["list__link"]}
          to={link.href}
        >
          {link.name}
        </NavLink>
      </li>
    ));
  };
  render() {
    return (
      <nav className={styles.nav}>
        <ul className={styles["list"]}>{this.renderNav()}</ul>
      </nav>
    );
  }
}
