import React, { PureComponent, Fragment } from "react";
import styles from "../../styles/Slider.module.scss";
import SliderItem from "./SliderItem";
import PropTypes from 'prop-types';

export default class Slider extends PureComponent {
  static propTypes = {
    startingSlide: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    slides: PropTypes.arrayOf(PropTypes.object),
    action: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.arrayOf(PropTypes.object),
    ])
  }

  constructor(props) {
    super(props);
    this.container = React.createRef();

    this.state = {
      height: null,
      current: props.startingSlide - 1,
      next:props.startingSlide - 1,
      slides: props.slides,
      useDuration: false,
      pos: null,
      action:null
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.action && prevState.action !== nextProps.action) {
      let next;
      if (nextProps.action.type === "moveDown") {
        next =
          prevState.current + 1 > prevState.slides.length - 1
            ? 0
            : prevState.current + 1;
      } else {
        next =
          prevState.current - 1 < 0
            ? prevState.slides.length - 1
            : prevState.current - 1;
      }
      return { next, useDuration: true, pos: nextProps.mode === 'down' ? -prevState.height : 0, action: nextProps.action};
    } else {
      return null
    } ;
  }
  setHeight = () => {
    const {height} = this.state;
    if(height !== this.container.current.clientHeight){
      this.setState({
        height: this.container.current.clientHeight,
        pos:  this.isDownMode() ? 0 : -this.container.current.clientHeight,
        useDuration:false
      })
    }
  }
  componentDidMount() {
    const {mode} = this.props;
    const box = this.container.current.getBoundingClientRect()
    this.setState({ height: box.height, pos: mode === 'down'? 0 : -box.height });
    window.addEventListener('resize',this.setHeight)
  }
  componentWillUnmount() {
    window.removeEventListener('resize',this.setHeight)
  }
  computeStyles() {
      const {pos, useDuration} = this.state;
      const {duration} = this.props
      console.log('--duration',useDuration)
      return {
          transform: `translateY(${pos}px)`,
          transitionDuration: `${useDuration ? duration : 0}ms`
      }
  }
  moveBack = () => {
    const {onAnimationEnd ,mode} = this.props
    const {height} = this.state
    this.setState({
      pos:  mode === 'down'? 0 : -height,
      useDuration:false
    })
    onAnimationEnd()
  }
  onTransitionEnd = () => {
    const { next } = this.state;
    console.log('transition End')
    this.setState({
      current: next,
    },() => setTimeout(this.moveBack,200))
  }
  isDownMode = () => {
   return this.props.mode === 'down'
  }
  render() {
    const { background, slides, children  } = this.props;
    const { height, current, next } = this.state;
    console.log('--slides', slides, current ,next)
    return (
      <div
        className={styles.slider}
        style={{ background }}
        ref={this.container}
      >
        {height && (
          <Fragment>
            <ul style={this.computeStyles()} onTransitionEnd={this.onTransitionEnd} className={styles["slider-list"]}>
              <li
                key={'first'}
                className={styles["slider-list__item"]}
              >
                <SliderItem slide={slides[this.isDownMode() ? current : next]} />
              </li>
              <li
                key={'second'}
                className={styles["slider-list__item"]}
              >
                <SliderItem slide={slides[this.isDownMode() ? next : current]} />
              </li>
            </ul>
          </Fragment>
        )}

        {children}
      </div>
    );
  }
}
