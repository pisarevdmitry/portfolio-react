import React, { PureComponent } from "react";
import { isLogged } from "../../modules/user";
import { connect } from "react-redux";

export default WrappedComponent => {
  class WithUser extends PureComponent {
    render() {
      console.log("wrapped", this.props);
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(mapsStateToProps)(WithUser);
};

const mapsStateToProps = state => {
  return {
    user: isLogged(state)
  };
};
