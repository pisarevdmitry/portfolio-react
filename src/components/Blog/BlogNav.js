import React, { PureComponent } from "react";
import cx from "classnames";
import styles from "../../styles/BlogNav.module.scss";
export default class BlogNav extends PureComponent {
    state={
        opened: false
    }
  renderNav = () => {
    const { items, active } = this.props;
    return items.map(item => (
      <li
        data-id={item["_id"]}
        onClick={this._onClickHandler}
        key={item["_id"]}
        className={cx(styles["nav-list__item"], {
          [styles["nav-list__item_active"]]: item["_id"] === active
        })}
      >
        <span className={styles["nav__text"]}>{item.title}</span>
      </li>
    ));
  };
 _onClickHandler = (e) => {
    const {onClick} = this.props 
    e.stopPropagation();
    onClick(e.target.dataset.id)
  }
  toggleMobileNav = (e)=> {
    const {isMobile} = this.props
    const {opened} = this.state
    if(isMobile) {
        this.setState({
            opened: !opened
        })
    }
  } 
  
  render() {
    const { fixed, isMobile } = this.props;
    const { opened } = this.state;
    return (
      <aside
        data-name="nav-constainer"
        onClick ={this.toggleMobileNav}
        className={cx(styles["blog-nav"], {
          [styles["blog-nav_fixed"]]: fixed || isMobile,
          [styles['blog-nav_opened']]: opened
        })}
      >
        <ul className={styles["nav-list"]}>{this.renderNav()}</ul>
      </aside>
    );
  }
}
