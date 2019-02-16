import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { MDBBtn } from 'mdbreact';



import { userService } from './_services/user.service.js';

var crypto = require('crypto');

 class LoginPage extends Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password} = this.state; //+value returnUrl

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });


        userService.getsalt(username).then(res=>{
          var passwordData = this.sha512(password,res[0].salt);
          userService.login(username, passwordData.passwordHash)
              .then(
                  user => {
                      const { from } = this.props.location.state || { from: { pathname: "/profile" } };
                      this.props.history.push(from);
                  },
                  error => this.setState({ error, loading: false })
              );
        })



    }

    sha512(password, salt){
          var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
          hash.update(password);
          var value = hash.digest('hex');
          return {
              salt:salt,
              passwordHash:value
          };
      };

    render() {
        const { username, password, submitted, loading, error } = this.state;
        return (
            <div className="col-md-6 ">

                <p className="h2 text-center mb-4">Login</p>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <input type="text" className="form-control" name="username" placeholder="Email" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <small className="help-block red-text">Email is required</small>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange} autoComplete="on" />
                        {submitted && !password &&
                            <small className="help-block red-text">Password is required</small>
                        }
                    </div>
                    <div className="form-group text-center">
                        <MDBBtn  color="indigo"  type="submit" disabled={loading}>Login</MDBBtn >
                        {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                            alt="loading" />
                        }
                    </div>
                    {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    }
                </form>
                <br/>
                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4 text-center">
                    Επιθυμείτε να δημιουργήσετε λογαριασμό; <MDBBtn color="green" size="sm" onClick={ e => this.props.history.push("/register")} to="/register"><b> Register</b></MDBBtn>
                </small>
            </div>



        );
    }
}
export default withRouter(LoginPage);
