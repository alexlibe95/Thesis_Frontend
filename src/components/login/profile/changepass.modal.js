import React, { Component } from 'react';
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn , MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import { userService } from '../_services/user.service.js';

var crypto = require('crypto');

export default class ChangePassModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
        username:this.props.username,
        oldpass:'',
        newpass:'',
        renewpass:'',
        error:'',
        error1:'',

        submitted: false,

        modal1: false,
        modal2: false
      };
    }

  toggle = nr => () => {
      let modalNumber = 'modal' + nr
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
  }

  onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
      e.preventDefault();
      this.setState({ submitted: true });

      const { oldpass, newpass, renewpass, username} = this.state;

      if (!(oldpass && newpass && renewpass)) {
        return;
      }else if(newpass !== renewpass){
         return;
      }else if(newpass.length<8){
          this.setState({
            error1:"Password must be at least 8 characters long!"
          })
          return;
      }else if(oldpass === newpass){
         return;
      }

      userService.getsalt(username).then(res=>{
        var oldpasswordData = this.sha512(oldpass,res[0].salt);


        userService.login(username, oldpasswordData.passwordHash).then(user => {
            var salt = this.genRandomString(16);
            var newpasswordData = this.sha512(newpass, salt);
            userService.changepass(username, newpasswordData.passwordHash , salt).then(
                    success => {
                        if(success){
                          console.log("Success");
                            this.setState({ modal1: false });
                            this.setState({ modal2: true });
                        }else{
                          console.log("Unsuccessful new row")
                        }
                    }
                );

              },error => this.setState({ error })
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

    genRandomString(length){
          return crypto.randomBytes(Math.ceil(length/2))
                  .toString('hex') /** convert to hexadecimal format */
                  .slice(0,length);   /** return required number of characters */
      };


  render() {
    const { oldpass, newpass, renewpass, submitted, error, error1} = this.state;

    return (
      <div>
        <MDBBtn  size="m" onClick={this.toggle(1)}>Αλλαγη Κωδικου Προσβασης</MDBBtn>

        <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">
        <form onSubmit={this.onSubmit}>
        <MDBModalHeader toggle={this.toggle(1)}>Αλλαγή Κωδικού Πρόσβασης</MDBModalHeader>
        <MDBModalBody>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">


                <label  className="grey-text">
                  Old Password
                </label>
                <div className={'form-group' + (submitted && !oldpass ? ' has-error' : '')}>
                <input
                  type="password"
                  name="oldpass"
                  className="form-control"
                  value={oldpass}
                  onChange={this.onChange}
                  autoComplete ="on"
                />
                {submitted && !oldpass &&
                    <div className="help-block red-text"  >Password is required</div>
                }
                {submitted && oldpass &&
                  <small className="help-block white-text ">1</small>
                }
                {error &&
                    <div className={'alert alert-danger'}>{error}</div>
                }
                </div>
                <br />


                <label  className="grey-text">
                  New Password
                </label>
                <div className={'form-group' + (submitted && !newpass ? ' has-error' : '')}>
                <input
                  type="password"
                  name="newpass"
                  value={newpass}
                  className="form-control"
                  onChange={this.onChange}
                  autoComplete ="on"
                />
                {submitted && !newpass &&
                    <div className="help-block red-text"  >New Password is required</div>
                }
                {submitted && newpass===oldpass &&
                    <div className="help-block red-text"  >New Password can not be the same!</div>
                }
                {true &&
                  <small className="help-block white-text ">1</small>
                }
                {error1 &&
                    <div className={'alert alert-danger'}>{error1}</div>
                }
                </div>
                <br />


                <label className="grey-text">
                  Re-type New Password
                </label>
                <div className={'form-group' + (submitted && !renewpass ? ' has-error' : '')}>
                <input
                  type="password"
                  name="renewpass"
                  value={renewpass}
                  className="form-control"
                  onChange={this.onChange}
                  autoComplete ="on"
                />
                {submitted && !renewpass &&
                    <div className="help-block red-text"  >Re-typing New Password is required<br/></div>
                }
                {submitted && renewpass!==newpass &&
                    <div className="help-block red-text"  >New Passwords do not match!<br/></div>
                }
                </div>
                <br />



            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </MDBModalBody>

        <MDBModalFooter>
        <MDBBtn color="red" onClick={this.toggle(1)}>Close</MDBBtn>
        <MDBBtn color="blue" type="submit">Save changes</MDBBtn>
        </MDBModalFooter>
        </form>
        </MDBModal>

        <MDBContainer>
          <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
            <MDBModalHeader toggle={this.toggle(2)}>Ο Κωδικός Πρόσβασης αλλάχθηκε επιτυχώς!</MDBModalHeader>
            <MDBModalBody>
              Συγχαρητήρια!
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="green" onClick={this.toggle(2)}>Close</MDBBtn>

            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>





    )}


}
