import React, { Component } from 'react';
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBContainer } from 'mdbreact';


export default class ContactModal extends Component {

  render() {

  return (

    <MDBContainer>
      <MDBModal isOpen={this.props.open}>
        <MDBModalHeader className="black-text" >Επιτυχής αποστολή μηνύματος</MDBModalHeader>
        <MDBModalBody className="black-text text-left h5">
          Η αποστολή του μηνύματός σας έγινε με επιτυχία.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="green" onClick={this.props.action}>Ενταξει</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    )}
  }
