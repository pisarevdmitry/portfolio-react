import React from 'react';
import {Redirect} from 'react-router-dom'
import withAuth from './HOC/withAuth'
 function PrivateRoute(props) {
    console.log(props)
  return props.user ? props.children : <Redirect to={'/'}/>
  
}
export default withAuth(PrivateRoute)