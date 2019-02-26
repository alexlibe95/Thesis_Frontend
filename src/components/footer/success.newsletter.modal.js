import React, { Component } from 'react';
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBContainer } from 'mdbreact';


export default class NewsletterModal extends Component {

  render() {

  return (

    <MDBContainer>
      <MDBModal isOpen={this.props.open}>
        <MDBModalHeader className="black-text" >Επιτυχής εγγραφή</MDBModalHeader>
        <MDBModalBody className="black-text text-left h5">
          Η εγγραφή στο Newsletter μας έγινε με επιτυχία.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="green" onClick={this.props.action}>Ενταξει</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    )}
  }
