import React, { Component } from 'react';
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn , MDBContainer } from 'mdbreact';


export default class RegisterModal2 extends Component {

  render() {

  return (
    <MDBContainer>
      <MDBModal isOpen={this.props.open}  >
        <MDBModalHeader >Ανεπιτυχής καταχώρηση</MDBModalHeader>
        <MDBModalBody>
          Η καταχώρηση ήταν ανεπιτυχής.<br />Υπάρχει ήδη λογαριασμός με αυτό το Email !
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="red" onClick={this.props.action}>Ενταξει</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    )}
  }
