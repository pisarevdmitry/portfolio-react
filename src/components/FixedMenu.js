import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";
import { TimelineMax } from "gsap";
import Nav from "./Navigation";

const fixedStyle = `height: 100vh; overflow:hidden`;
export default class FixedMenu extends PureComponent {
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
    const tl = new TimelineMax();
    const container = this.nav.current.querySelector("nav");
    const children = this.nav.current.querySelectorAll("li");
    document.body.style = '';
    tl.staggerFromTo(children, 1, { left: 0 }, { left: `-100%` }, 0.2);
    tl.to(container, 2, { opacity: 0 }, 0);
   
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
        mountOnEnter
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
