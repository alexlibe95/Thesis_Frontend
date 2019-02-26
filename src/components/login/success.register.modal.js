import React, { Component } from 'react';
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn , MDBContainer } from 'mdbreact';
import {withRouter} from "react-router-dom";

class RegisterModal1 extends Component {

  render() {

  return (
    <MDBContainer>
      <MDBModal isOpen={this.props.open}  >
        <MDBModalHeader >Διαγραφή Υποτροφίας</MDBModalHeader>
        <MDBModalBody>
          Η καταχώρηση έγινε με επιτυχία. Ο λογαριασμός θα ενεργοποιηθεί εντός 3 ημερών και θα ενημερωθείτε μέσω email!
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="green" onClick={e => this.props.history.push("/")} to="/">Ενταξει</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    )}
  }

export default withRouter(RegisterModal1);
