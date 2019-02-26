import React, { Component } from 'react';
import {  MDBModal, MDBModalBody, MDBModalHeader,  MDBBtn , MDBContainer} from 'mdbreact';

export default class OpenModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
        modal1: false
      };
    }

  toggle = nr => () => {
      let modalNumber = 'modal' + nr
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
  }

  render() {

    return (
      <div>
        <MDBBtn color=" #ffa000 amber darken-3" size="md" onClick={this.toggle(1)}>περισσότερα</MDBBtn>
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">
          <MDBModalHeader toggle={this.toggle(1)}>{this.props.title}</MDBModalHeader>
            <MDBModalBody>
              <MDBContainer className="text-left black-text h6 p-2">
                <img src ={this.props.src} className = "img-fluid" alt = "Responsive" />
                <br />
                <br />
                <p>{this.props.text_a}</p>
                <p>{this.props.text_b}</p>
            </MDBContainer>
          </MDBModalBody>

        </MDBModal>
      </div>
    )}
}
