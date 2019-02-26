import React, { Component } from 'react';
import { MDBBtn , MDBCard} from 'mdbreact';
import { userService } from './_services/user.service.js';
import RegisterModal1 from './success.register.modal.js';
import RegisterModal2 from './unsuccess.register.modal.js';

var crypto = require('crypto');

export default class Register extends Component{
  constructor(props) {
      super(props);

      this.state = {
          instName:'',
          instLink:'',
          firstName:'',
          lastName:'',
          username:'',
          password:'',
          repassword:'',
          submitted: false,
          loading: false,
          error:'',
          error1:'',
          modal1: false,
          modal2: false

      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }

  handler =(event) => {
      this.setState({
        modal2: false
      });
  }

  handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  }

  handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { instName, instLink, firstName, lastName, username, password, repassword} = this.state; //+value returnUrl

      // stop here if form is invalid
      if (!(instName && instLink && firstName && lastName && username && password && repassword && (password===repassword))) {
          this.setState({ loading: false});
          return;
      }else if(password.length<8){
          this.setState({
            error1:"Password must be at least 8 characters long!",
            loading: false
          })
          return;
      }

      this.setState({
        loading: true,
        error1:""
      });

      var salt = this.genRandomString(16); /** Gives us salt of length 16 */
      var passwordData = this.sha512(password, salt);

      userService.register(instName, instLink, firstName, lastName, username, passwordData.passwordHash, passwordData.salt)
          .then(
              success => {
                if(success){
                  this.setState({ modal1: true });
                }else{
                  this.setState({loading: false })
                  this.setState({ modal2: true });
                }
              },
              error => this.setState({ error})
          );

    }

genRandomString(length){
      return crypto.randomBytes(Math.ceil(length/2))
              .toString('hex') /** convert to hexadecimal format */
              .slice(0,length);   /** return required number of characters */
  };

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
    const { instName, instLink, firstName, lastName, username, password, repassword, submitted, loading, modal1, modal2, error, error1} = this.state;
    return (

      <div className="container">
        <form name="form" className="text-center p-5" onSubmit={this.handleSubmit}>

            <p className="h2 mb-4">Register</p>

            <div className={'form-group' + (submitted && !instName ? ' has-error' : '')}>
                <input type="text" id="defaultRegisterForminstName" name="instName" className="form-control" placeholder="Όνομα Φορέα *" value={instName} onChange={this.handleChange}></input>
                {submitted && !instName &&
                    <small className="help-block red-text">Username is required</small>
                }
              </div>

              <div className={'input-group' + (submitted && !instLink? ' has-error' : '')}>
              <span className="input-group-text" aria-describedby="inputGroupFileAddon01">
                https://
              </span>
                <input type="text" id="defaultRegisterForminstLink" name="instLink" className="form-control" aria-describedby="inputGroupFileAddon01" placeholder="Link Φορέα *" value={instLink} onChange={this.handleChange}></input>
                {submitted && !instLink &&
                    <small className="help-block red-text">Username is required</small>
                }
            </div>
            <br />


            <div className="form-row">
                <div className="col">
                  <div className={'form-group' + (submitted && !firstName ? ' has-error' : '')}>
                    <input type="text" id="defaultRegisterFormFirstName" name="firstName" className="form-control" placeholder="Όνομα διαχειριστή *" value={firstName} onChange={this.handleChange}></input>
                    {submitted && !firstName &&
                        <small className="help-block red-text">Username is required</small>
                    }
                  </div>
                </div>
                <div className="col">
                  <div className={'form-group' + (submitted && !lastName ? ' has-error' : '')}>
                    <input type="text" id="defaultRegisterFormLastName" name="lastName" className="form-control" placeholder="Επώνυμο διαχειριστή *" value={lastName} onChange={this.handleChange}></input>
                    {submitted && !lastName &&
                        <small className="help-block red-text">Username is required</small>
                    }
                  </div>
                </div>
            </div>

            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                <input type="email" id="defaultRegisterFormEmail" name="username" className="form-control" placeholder="Email *" value={username} onChange={this.handleChange}></input>
                {submitted && !username &&
                    <small className="help-block red-text ">Username is required</small>
                }
                {true &&
                    <small className="help-block white-text ">1</small>
                }
                <MDBCard color="mdb-color darken-1" >
                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted white-text ">
                    Το email που θα χρησιμοποιείτε για να συνδέεστε θα πρέπει να έχει την <b>ίδια κατάληξη</b> με το Link του Φορέα (Domain).<br /><u>Παραδείγματος χάρη</u> <br />Link Φορέα: www.studyingreece.edu.gr<br /> Email: ...@studyingreece.edu.gr
                </small>
                {error &&
                    <div className={'alert alert-danger'}>{error}</div>
                }
                </MDBCard>
            </div>

            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                <input type="password" autoComplete="on" id="defaultRegisterFormPassword" name="password" className="form-control" placeholder="Password *" aria-describedby="defaultRegisterFormPasswordHelpBlock" value={password} onChange={this.handleChange}></input>
                {submitted && !password &&
                    <small className="help-block red-text">Username is required</small>
                }
                {submitted && password &&
                  <small className="help-block white-text ">1</small>
                }
                {error1 &&
                    <div className={'alert alert-danger'}>{error1}</div>
                }
                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted">
                    At least 8 characters long
                </small>

            </div>
            <br />

            <div className={'form-group' + (submitted && !repassword? ' has-error' : '')}>
                <input type="password" autoComplete="on" id="defaultRegisterFormrePassword" name="repassword" className="form-control" placeholder="Re-Type Password *" aria-describedby="defaultRegisterFormPasswordHelpBlock" value={repassword} onChange={this.handleChange}></input>
                {submitted && !repassword &&
                    <small className="help-block red-text">Username is required<br /></small>
                }
                {submitted && repassword !== password &&
                    <small className="help-block red-text">Passwords do <b>not</b> match</small>
                }
            </div>

            <MDBBtn  color="blue darken-4" size="lg" type="submit" disabled={loading}>Sign up</MDBBtn>

            <hr></hr>

            <p>By clicking
                <em> Sign up</em> you agree to our
                <a href="/" > terms of service</a> and
                <a href="/" > terms of service</a>. </p>

      </form>
      <RegisterModal1 open={modal1} />
      <RegisterModal2 open={modal2} action={this.handler} />
    </div>
    );
  }
}
