//dashboard cannot be accessed unless logged in

import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import React from "react";

const BasicRoute = ({ children, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({location}) =>
        !authenticated ? children : <Navigate to={{ pathname: "/login" , state:{from: location}}} />
      }
    />
  );
};

const mapStateToProps=({session})=>({
    authenticated:session.authenticated
})

export default connect(mapStateToProps)(BasicRoute);
