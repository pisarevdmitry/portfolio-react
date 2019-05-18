import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { Transition } from "react-transition-group";
import { TimelineMax } from "gsap";
import Nav from "./Navigation";

const fixedStyle = `height: 100vh; overflow:hidden`;
export default class FixedMenu extends PureComponent {
  static propTypes = {
    opened: PropTypes.bool.isRequired,
    onRouteChange: PropTypes.func
  }
  constructor() {
    super();
    this.nav = React.createRef();
  }
  showNav = () => {
    const tl = new TimelineMax();
    const container = this.nav.current.querySelector("nav");
    const children = this.nav.current.querySelectorAll("li");
    document.body.style.cssText = fixedStyle;
    tl.to(container, 1, { opacity: 1 });
    tl.staggerFromTo(children, 1, { left: `-100%` }, { left: 0 }, 0.2);
  };

  hideNav = () => {
    const {hidden} = this.props
    const duration = hidden ? 0 : 2
    const tl = new TimelineMax();
    const container = this.nav.current.querySelector("nav");
    const children = this.nav.current.querySelectorAll("li");
    document.body.style = '';
    tl.staggerFromTo(children, 0.5 * duration , { left: 0 }, { left: `-100%` }, 0.2);
    tl.to(container, 1 * duration, { opacity: 0 }, 0);
   
  };
  componentWillUnmount(){
    document.body.style = '';
  }
  render() {
    const { opened, onRouteChange } = this.props;

    return ReactDOM.createPortal(
      <Transition
        in={opened}
        timeout={2200}
        
        unmountOnExit
        onEnter={this.showNav}
        onExit={this.hideNav}
      >
        <div ref={this.nav} style={{ position: "fixed" }}>
          <Nav isFixed  onRouteChange={onRouteChange}/>
        </div>
      </Transition>,
      document.body.querySelector("#root")
    );
  }
}
