import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { getIsWorksLoaded, getWorks, loadWorks } from "../../modules/works";
import SliderDetails from "./SliderDetails";
import SliderPreview from "./SliderPreview";
import PropTypes from 'prop-types';
import Slider from "./Slider";
import styles from "../../styles/SlideSection.module.scss";
import { ReactComponent as ArrowUp } from "../../assets/images/svg/portf_arrow_up.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/svg/portf_arrow_down.svg";

class SliderSection extends PureComponent {
  static propTypes = {
    works: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.arrayOf(PropTypes.object),
    ])
  }

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      currentSlide: 0,
      animated: false,
      SliderAction: null,
      containerHeigth: null
    };
  }
  slideDown = () => {
    const { animated, currentSlide } = this.state;
    const { works } = this.props;
    if (animated) {
      return;
    }
    this.setState({
      currentSlide: currentSlide + 1 > works.length - 1 ? 0 : currentSlide + 1,
      animated: true,
      SliderAction: {
        type: "moveDown"
      }
    });
  };
  slideUp = () => {
    const { animated, currentSlide } = this.state;
    const { works } = this.props;
    if (animated) {
      return;
    }
    this.setState({
      currentSlide: currentSlide - 1 < 0 ? works.length - 1 : currentSlide - 1,
      animated: true,
      SliderAction: {
        type: "moveUp"
      }
    });
  };
  preRenderSlides = () => {
    const { works } = this.props;
    return works.forEach(work => {
        const img = document.createElement('img')
        img.src = `/upload/${work.file.filename}`    
    });
  };
  componentDidMount() {
    const { isLoaded, loadWorks } = this.props;
    if (!isLoaded) {
      loadWorks();
    } else {
      this.preRenderSlides()
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const {works} = this.props
    console.log(prevProps)
    if(!prevProps.work && works) {
     this.preRenderSlides()
    }
  }
  onAnimationEnd = () => {
    if (this.state.animated) {
      this.setState({
        animated: false
      });
    }
  };
  render() {
    const { works } = this.props;
    const { currentSlide, SliderAction } = this.state;
    return (
      <section className={styles["slider-section"]}>
        {works && (
          <Fragment>
            <SliderDetails work={works[currentSlide]} />
            <SliderPreview work={works[currentSlide]} />
            <div ref={this.container} className={styles["slider-container"]}>
              <Slider
                background="#e3ded0"
                slides={works}
                startingSlide="2"
                onAnimationEnd={this.onAnimationEnd}
                duration="1000"
                action={SliderAction}
                mode="down"
              >
                <span onClick={this.slideDown} className={styles["control"]}>
                  <ArrowDown className={styles["control__image"]} />
                </span>
              </Slider>
              <Slider
                background="#f1ede1"
                slides={works}
                startingSlide={works.length}
                onAnimationEnd={this.onAnimationEnd}
                duration="1000"
                action={SliderAction}
                mode="up"
              >
                <span onClick={this.slideUp} className={styles["control"]}>
                  <ArrowUp className={styles["control__image"]} />
                </span>
              </Slider>
            </div>
          </Fragment>
        )}
      </section>
    );
  }
}
const mapStateToProps = state => ({
  isLoaded: getIsWorksLoaded(state),
  works: getWorks(state)
});
export default connect(
  mapStateToProps,
  { loadWorks }
)(SliderSection);
