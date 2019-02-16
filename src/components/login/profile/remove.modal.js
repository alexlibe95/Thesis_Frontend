import React, { Component } from 'react';
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn , MDBContainer } from 'mdbreact';
import { scholarService } from './scholar.service.js';

export default class RemoveModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
        modal3: false
      };
      this.handleRemove = this.handleRemove.bind(this);
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });


    }

    handleRemove({currentTarget}) {

        console.log(currentTarget.value) // e.currentTarget.value would be equivalent

        scholarService.remove(currentTarget.value)
            .then(
                success => {
                    if(success){
                      console.log("Success");
                      this.setState({ modal3: false});
                      this.props.action();

                    }else{
                      console.log("Unsuccessful delete")
                    }
                }
            );


    }

  render() {
  return (
    <MDBContainer>
      <MDBBtn color="red" size="sm" onClick={this.toggle(3)}>Remove</MDBBtn>
      <MDBModal isOpen={this.state.modal3}  toggle={this.toggle(3)}>
        <MDBModalHeader toggle={this.toggle(3)}>Διαγραφή Υποτροφίας</MDBModalHeader>
        <MDBModalBody className="text-left">
          Είστε Σίγουροι;
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="blue" onClick={this.toggle(3)}>ακυρο</MDBBtn>
          <MDBBtn color="red" value={this.props.ID} onClick={this.handleRemove} >Ναι</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    )}

  }
