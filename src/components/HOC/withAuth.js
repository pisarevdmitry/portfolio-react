import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import { isLogged } from "../../modules/user";
import { connect } from "react-redux";

export default WrappedComponent => {
  class WithUser extends PureComponent {
    static propTypes ={
      user: PropTypes.bool.isRequired
    }
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
