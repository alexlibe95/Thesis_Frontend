import React, { Component } from 'react';
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn , MDBContainer,  MDBRow, MDBCol } from 'mdbreact';

var fororigin;
var forindig;

export default class OpenModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
        title:this.props.Scholar.title,
        sector:this.props.Scholar.sector,
        level:this.props.Scholar.level,
        euro:this.props.Scholar.euro,
        origin:this.props.Scholar.origin,
        duration:this.props.Scholar.duration,
        age_from:this.props.Scholar.age_from,
        age_until:this.props.Scholar.age_until,
        indigent:this.props.Scholar.indigent,
        comment:this.props.Scholar.comment,
        date_expire:this.props.Scholar.date_expire,
        link:this.props.Scholar.link,
        file: [],

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
    const { title, sector, level, euro, origin, duration, age_from, age_until, indigent, comment, date_expire, link } = this.state;

    if(origin==="all"){
      fororigin="OXI"
    }else{
      fororigin=origin
    }

    if(indigent){
      forindig = "NAI"
    }else{
      forindig = "OXI"
    }

    return (
      <div>
        <MDBBtn outline rounded size="sm" color="blue" onClick={this.toggle(1)}>select</MDBBtn>
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} centered size="lg">
          <MDBModalHeader toggle={this.toggle(1)}>Στοιχεία Υποτροφίας</MDBModalHeader>
            <MDBModalBody>
              <MDBContainer className="text-left black-text h6 p-5">
                    <MDBRow >
                      <MDBCol md="6">
                        ΤΙΤΛΟΣ
                      </MDBCol>
                      <MDBCol md="6">
                        {title}
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <MDBCol md="6">
                        ΤΟΜΕΙΣ
                      </MDBCol>
                      <MDBCol md="6">
                        {sector}
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <MDBCol md="6">
                        ΕΠΙΠΕΔΟ
                      </MDBCol>
                      <MDBCol md="6">
                        {level}
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <MDBCol md="6">
                        ΟΙΚΟΝΟΜΙΚΗ ΕΝΙΣΧΥΣΗ
                      </MDBCol>
                      <MDBCol md="6">
                        {euro} $
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <MDBCol md="6">
                        ΔΙΑΡΚΕΙΑ
                      </MDBCol>
                      <MDBCol md="6">
                        {duration} ΜΗΝΕΣ
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <p>Προϋποθέσεις</p>
                    </MDBRow>

                    <MDBRow >
                      <MDBCol md="6">
                        ΗΛΙΚΙΑ
                      </MDBCol>
                      <MDBCol md="6">
                        {age_from} - {age_until}
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <MDBCol md="6">
                        ΚΑΤΑΓΩΓΗ ΕΝΔΙΑΦΕΡΟΜΕΝΟΥ ΜΕ ΠΡΟΤΕΡΑΙΟΤΗΤΑ
                      </MDBCol>
                      <MDBCol md="6">
                        {fororigin}
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <MDBCol md="6">
                        ΜΟΝΟ ΓΙΑ ΜΑΘΗΤΕΣ/ ΦΟΙΤΗΤΕΣ ΜΕ ΟΙΚΟΝΟΜΙΚΟ ΠΡΟΒΛΗΜΑ
                      </MDBCol>
                      <MDBCol md="6">
                        {forindig}
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <p>Περισσότερες πληροφορίες</p>
                    </MDBRow>

                    <MDBRow >
                      <MDBCol md="6">
                        Link
                      </MDBCol>
                      <MDBCol md="6">
                      <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <MDBCol md="6">
                        ΣΧΟΛΙΑ ΦΟΡΕΑ
                      </MDBCol>
                      <MDBCol md="6">
                        -{comment}
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow >
                      <MDBCol md="6">
                        ΗΜΕΡΟΜΗΝΙΑ ΛΗΞΗΣ
                      </MDBCol>
                      <MDBCol md="6">
                        {date_expire}
                      </MDBCol>
                    </MDBRow>
            </MDBContainer>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="blue" onClick={this.toggle(1)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>

      </div>
    )}
}
