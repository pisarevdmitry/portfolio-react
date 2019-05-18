import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import withAuth from './HOC/withAuth';
 function PrivateRoute(props) {
    console.log(props)
  return props.user ? props.children : <Redirect to={'/'}/>
  
}
PrivateRoute.propTypes ={
  user: PropTypes.bool.isRequired
}

export default withAuth(PrivateRoute)