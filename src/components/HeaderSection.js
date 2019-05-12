import React, { PureComponent } from "react";
import cx from "classnames";
import Social from "./Social";
import FixedMenu from './HamburgerMenu';
import styles from "../styles/HeaderSection.module.scss";
import { ReactComponent as Stars } from "../assets/images/svg/stars1.svg";
import Layer from "../assets/images/png/Layer 1.png";
import { ReactComponent as Bg } from "../assets/images/svg/bg.svg";
import { ReactComponent as Stars2 } from "../assets/images/svg/stars2.svg";
export default class HeaderSection extends PureComponent {
  state = {
    parallaxTranslate: {
      y: 0
    },
    factor: 0.1
  };
  componentDidMount() {
    window.addEventListener("scroll", this.parallax);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallax);
  }

  parallax = () => {
    this.setState({
      parallaxTranslate: {
        y: window.scrollY * this.state.factor
      }
    });
  };

  render() {
    const { pathname } = this.props.location;
    const {
      parallaxTranslate: { y }
    } = this.state;
    return (
      <section
        className={cx(styles["header-section"], {
          [styles["header-section_about"]]: pathname === "/about"
        })}
        id="hero"
      >
        <div className={styles["parallax"]} id="parallax">
          <div
            style={{ transform: `translateY(-${y}px)` }}
            className={styles["parallax__layer"]}
          >
            <img
              className={cx(styles["parallax__image"], {
                [styles["parallax__image_bottom"]]: pathname !== "/blog"
              })}
              src={Layer}
              alt="parallax"
            />
          </div>
        </div>
        <div className={styles["header-section__top-line"]}>
          <Social />
          <FixedMenu/>
        </div>
        <div className={styles["header-section__content"]}>
          <span
            className={cx(styles["header-section__bg"], {
              [styles["header-section__bg_blog"]]: pathname === "/blog"
            })}
          >
            <Stars className={styles["header-section__image"]} />
          </span>
          <div className={styles["hero__image"]} />
          <span className={styles["hero__title"]}>Писарев Дмитрий</span>
          <span className={styles["hero-text"]}>
            Личный сайт веб-разработчика
          </span>
        </div>
        {pathname === "/about" && (
          <svg
            className={`${styles["header-section__bottom-bg"]} ${
              styles["header-section__bottom-bg_desktop"]
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 108"
            preserveAspectRatio="none"
          >
            <polygon fill="#f2f0e8" points="0,0 0,108 601,108 601,105" />
            <polygon fill="#f4f5f0" points="1200,0 1200,108 599,108 599,105" />
          </svg>
        )}
        {pathname !== "/about" && (
          <Bg
            className={cx(styles["header-section__bottom-bg"], {
              [styles["header-section__bottom-bg_works"]]:
                pathname === "/my-works"
            })}
          />
        )}
        {pathname === '/my-works' && 
        <div className={styles['header__title_works']}>Мои работы
        <span className={`${styles["header-section__bg"]} ${styles['header-section__bg_works']}`}>
            <Stars2 className={styles['header-section__image']}/>
            </span>
            </div>}
      </section>
    );
  }
}
