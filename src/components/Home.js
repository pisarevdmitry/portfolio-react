import React, { PureComponent } from "react";
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import styles from "../styles/Home.module.scss";
import Video from "../assets/video/night.mp4";
import Hero from "./Hero";
import LogIn from "./LogIn";
import Signature from "./Signature";
import ParalaxLayer from "../assets/images/png/Layer 1-min.png";
import { CSSTransition } from "react-transition-group";
import withAuth from "./HOC/withAuth";

 class Home extends PureComponent {
  static propTypes = {
    user: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
  }
  state = {
    parallaxTranslate: {
      x: 0,
      y: 0
    },
    factor: 0.03,
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
  };
  onAuthHandler = () => {
    const {user, history} = this.props
    if(!user) {
      return this.flipContent()
    }
    history.push('/admin')
  }
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
    const {user} = this.props
    return (
      <div onMouseMove={this.onMouseMoveHandler} className={styles.intro}>
          <Helmet>
            <title>Home</title>
          </Helmet>
          {flipFront && (
            <button
              onClick={this.onAuthHandler}
              className="btn btn_autorization btn__text"
            >
              {!user? 'Авторизоваться' : 'Войти' }
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
export default withAuth(Home)