import React , { Component } from 'react';
import Login from './login/Login.js'

export default class UserLogin extends Component{

  render() {
    return (
      <div className="container p-5">
        <div className = "row">
          <div className = "col-md-4">
          </div>
          <div className = "col-md-8" >
            <Login />
          </div>
        </div>
      </div>
    );
  }
}
