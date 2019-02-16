import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

import ContactModal from './success.contact.modal.js';
import {contactService} from './contact.service.js';

export default class Contact extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
        username: '',
        email: '',
        subject:'',
        text:'',
        submitted: false,
        error: '',
        modal:false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handler =(event) => {

    this.setState({
      modal: false,
      username:'',
      email:'',
      subject:'',
      text:'',
      submitted:false
    });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, email, subject, text} = this.state; //+value returnUrl
        // stop here if form is invalid
        if (!(username && email && subject && text)) {
            return;
        }


        contactService.sendEmail(username, email, subject, text)
          .then(
              success => {
                if(success){
                  this.setState({
                    modal: true
                  });
                }else{
                  return
                }
              },
              error => this.setState({ error})
          );
    }


  render() {
      const { username, email, subject, text, modal, submitted} = this.state;
    return (
      <MDBContainer>
        <MDBRow className="p-5">
          <MDBCol md="12">
            <form name="form"  onSubmit={this.handleSubmit}>
              <p className="h4 text-center mb-4">Επικοινωνήστε μαζί μας</p>
              <div className="grey-text">

                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                <MDBInput
                  label="Όνομα"
                  icon="user"
                  group
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                {submitted && !username &&
                  <div className="text-center">
                    <small className="help-block red-text">Name is required</small>
                  </div>
                }
                </div>

                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                <MDBInput
                  label="Email"
                  icon="envelope"
                  group
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {submitted && !email &&
                  <div className="text-center">
                    <small className="help-block red-text">Email is required</small>
                  </div>
                }
                </div>

                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                <MDBInput
                  label="Θέμα"
                  icon="tag"
                  group
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={this.handleChange}
                />
                {submitted && !subject &&
                  <div className="text-center">
                    <small className="help-block red-text text-center">Subject is required</small>
                  </div>
                }
                </div>

                <div className={'form-group' + (submitted && !text ? ' has-error' : '')}>
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Κείμενο"
                  icon="pencil-alt"
                  name="text"
                  value={text}
                  onChange={this.handleChange}
                />{submitted && !text &&
                  <div className="text-center">
                    <small className="help-block red-text text-center">Text is required</small>
                  </div>
                }
                </div>


              </div>
              <div className="text-center">
                <MDBBtn outline color="blue" type="submit">
                  Αποστολη <MDBIcon  icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>


        </MDBRow>
        <ContactModal open={modal} action={this.handler}/>
      </MDBContainer>
    );
  }
}
