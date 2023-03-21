import React, { Component } from 'react';
import authContext from './authContext';
console.log(authContext);
export default class AuthProvider extends Component {
  state = {
    user: null,
    logIn: userName => {
      this.setState({ user: userName });
    },
    logOut: () => {
      this.setState({ user: null });
    },
  };

  render() {
    return (
      <authContext.Provider value={this.state}>
        {this.props.children}
      </authContext.Provider>
    );
  }
}
