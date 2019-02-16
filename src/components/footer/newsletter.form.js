import React from "react";
import {MDBBtn, MDBIcon} from "mdbreact";

import NewsletterModal from './success.newsletter.modal.js';
import {newsletterService} from './newsletter.service.js'

export default class NewsletterForm extends React.Component {
      constructor(props) {
          super(props);

          this.state = {
            username: '',
            email: '',
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
            const { username, email} = this.state; //+value returnUrl
            // stop here if form is invalid
            if (!(username && email)) {
                return;
            }


            newsletterService.store(username, email)
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

              const { username, email, modal, submitted} = this.state;
              return (
                <div>
                <form name="form"  onSubmit={this.handleSubmit}>
                      <p className="h5 text-center">Κάνε εγγραφή στο Newsletter μας</p>
                      <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <input
                          name="username"
                          placeholder="Your name"
                          type="text"
                          className="form-control"
                          value={username}
                          onChange={this.handleChange}
                        />
                        {submitted && !username &&
                            <small className="help-block red-text">Name is required</small>
                        }
                      </div>
                      <br />

                      <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <input
                          name="email"
                          placeholder="Your email"
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={this.handleChange}
                        />
                        {submitted && !email &&
                            <small className="help-block red-text">Email is required</small>
                        }
                      </div>
                      <div className="text-center py-2 ">
                        <MDBBtn className="btn btn-outline-white" type="submit">
                          Subscribe
                          <MDBIcon  icon="paper-plane" className="ml-2" />
                        </MDBBtn>
                      </div>
                    </form>

                    <NewsletterModal open={modal} action={this.handler}/>
                    </div>

              )}

            }
