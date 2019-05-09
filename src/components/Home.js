import React, { PureComponent } from "react";
import styles from "../styles/Home.module.scss";
import Video from "../assets/video/night.mp4";
import Hero from "./Hero";
import LogIn from "./LogIn";
import Signature from "./Signature";
import ParalaxLayer from "../assets/images/png/Layer 1.png";
import { CSSTransition } from "react-transition-group";

export default class Home extends PureComponent {
  state = {
    parallaxTranslate: {
      x: 0,
      y: 0
    },
    factor: 0.04,
    flipFront: true,
    flipBack: false
  };

  onMouseMoveHandler = e => {
    e.persist();
    const { movementX, movementY } = e;
    const {
      parallaxTranslate: { x, y },
      factor
    } = this.state;
    this.setState({
      parallaxTranslate: {
        x: x + -movementX * factor,
        y: y + -movementY * factor
      }
    });
    //console.log(movementX, movementY)
  };
  flipContent = () => {
    this.setState({
      flipFront: !this.state.flipFront
    });
  };
  onExit = () => {
    this.setState({
      flipBack: !this.state.flipBack
    });
  };
  render() {
    const {
      parallaxTranslate: { x, y },
      flipFront,
      flipBack
    } = this.state;
    return (
      <div onMouseMove={this.onMouseMoveHandler} className={styles.intro}>
          {flipFront && (
            <button
              onClick={this.flipContent}
              className="btn btn_autorization btn__text"
            >
              Авторизоваться
            </button>
          )}
        <video className={styles.video} autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <main className={styles.main}>
          <CSSTransition
            unmountOnExit
            in={flipFront}
            timeout={500}
            classNames="flip"
            onExited={this.onExit}
          >
            <Hero />
          </CSSTransition>
          <CSSTransition
            unmountOnExit
            in={flipBack}
            timeout={500}
            classNames="flip"
          >
            <LogIn />
          </CSSTransition>
        </main>
        <footer className={styles["intro__footer"]}>
          <Signature />
        </footer>
        <div className={styles.parallax}>
          <div
            style={{ transform: `translate(${x}px, ${y}px)` }}
            className={styles["parallax__layer"]}
          >
            <img
              className={styles["parallax__image"]}
              src={ParalaxLayer}
              alt="paralax"
            />
          </div>
        </div>
      </div>
    );
  }
}