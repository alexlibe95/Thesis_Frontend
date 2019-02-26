import React, { Component } from 'react';
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn , MDBContainer,  MDBRow, MDBCol } from 'mdbreact';
import { scholarService } from './scholar.service.js';

export default class EditModal extends Component {
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
        submitted: false,
        modal4: false,
        modal5: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

  toggle = nr => () => {
      let modalNumber = 'modal' + nr
      this.setState({
        [modalNumber]: !this.state[modalNumber]
      });
  }

  handleClick () {
    this.setState({indigent: !this.state.indigent});
  }

  onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
      e.preventDefault();
      this.setState({ submitted: true });

      const { title, sector, level, euro, origin, duration, age_from, age_until, indigent, comment, date_expire , link} = this.state;
      if (!(title && sector && level && euro && age_from && age_until && date_expire && link)) {
          return;
      }

      scholarService.edit(this.props.Scholar.id, title, sector, level, euro, origin, duration, age_from, age_until, indigent, comment, date_expire)
          .then(
              success => {
                  if (success) {
                    console.log("Success");
                      this.setState({ modal4: false });
                      this.props.action();
                      this.setState({ modal5: true });
                  } else {
                    console.log("Unsuccessful edit")
                  }
              }
          );
  }


  render() {
    const { title, sector, level, euro, origin, duration, age_from, age_until, comment, date_expire, indigent, submitted, file , link} = this.state;

    return (
      <div>
        <MDBBtn outline rounded size="sm" color="white" onClick={this.toggle(4)}><i key="cell3" className="fa fa-edit mr-6 blue-text" aria-hidden="true" ></i> </MDBBtn>

        <MDBModal overflow-y="auto" isOpen={this.state.modal4} toggle={this.toggle(4)} centered size="lg">
          <form onSubmit={this.onSubmit}>
            <MDBModalHeader toggle={this.toggle(4)}>Επεξεργασία Υποτροφίας</MDBModalHeader>
            <MDBModalBody>

              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12">

                      <label  className="grey-text">
                        Τίτλος Υποτροφίας
                      </label>
                      <div className={'form-group' + (submitted && !title ? ' has-error' : '')}>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          value={title}
                          onChange={this.onChange}
                        />
                        {submitted && !title &&
                            <div className="help-block red-text"  >Title is required</div>
                        }
                      </div>

                      <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                        Κατεύθυνση Σπουδών
                      </label>
                      <div className={'form-group' + (submitted && !sector ? ' has-error' : '')}>
                        <select className="browser-default custom-select"  onChange={this.onChange} name="sector"  value={sector}>
                          <option value="">Επιλέξτε Κατεύθυνση</option>
                          <option value="all">Όλες</option>
                          <option value="Ανθρωπιστικές Επιστήμες">Ανθρωπιστικές Επιστήμες</option>
                          <option value="Γεωπονικές Επιστήμες">Γεωπονικές Επιστήμες</option>
                          <option value="Ειδική Αγωγή">Ειδική Αγωγή</option>
                          <option value="Επιστήμες Περιβάλλοντος">Επιστήμες Περιβάλλοντος</option>
                          <option value="Επιστήμες Υγείας">Επιστήμες Υγείας</option>
                          <option value="Επιστήμες Φυσικής Αγωγής-Αθλητισμού">Επιστήμες Φυσικής Αγωγής-Αθλητισμού</option>
                          <option value="Θετικές Επιστήμες">Θετικές Επιστήμες</option>
                          <option value="Κοινωνικές Επιστήμες">Κοινωνικές Επιστήμες</option>
                          <option value="Νομικές Επιστήμες">Νομικές Επιστήμες</option>
                          <option value="Οικονομία-Διοίκηση">Οικονομία-Διοίκηση</option>
                          <option value="Παιδαγωγικές Επιστήμες">Παιδαγωγικές Επιστήμες</option>
                          <option value="Πολιτικές Επιστήμες">Πολιτικές Επιστήμες</option>
                          <option value="Τέχνες">Τέχνες</option>
                          <option value="Τεχνολογικές Επιστήμες">Τεχνολογικές Επιστήμες</option>
                          <option value="Φιλολογικές Επιστήμες">Φιλολογικές Επιστήμες</option>
                          <option value="Ψυχοπαιδαγωγικές Επιστήμες (Παιδαγωγική Επάρκεια)">Ψυχοπαιδαγωγικές Επιστήμες (Παιδαγωγική Επάρκεια)</option>
                        </select>
                        {submitted && !sector &&
                            <div className="help-block red-text"  >Sector is required</div>
                        }
                      </div>

                      <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                        Επίπεδο Σπουδών
                      </label>
                      <div className={'form-group' + (submitted && !level ? ' has-error' : '')}>
                        <select className="browser-default custom-select"  name="level" onChange={this.onChange} value={level}>
                          <option value="">Επιλέξτε Επίπεδο Σπουδών</option>
                          <option value="all">Όλα</option>
                          <option value="Προπτυχιακό">Προπτυχιακό</option>
                          <option value="Μεταπτυχιακό">Μεταπτυχιακό</option>
                          <option value="Διδακτορικό">Διδακτορικό</option>
                        </select>
                        {submitted && !level &&
                            <div className="help-block red-text">Level is required</div>
                        }
                      </div>

                      <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                        Οικονομική Ενίσχυση (σε ευρώ)
                      </label>
                      <div className={'form-group' + (submitted && !euro ? ' has-error' : '')}>
                        <input
                          type="number"
                          name="euro"
                          value={euro}
                          id="defaultFormContactSubjectEx"
                          className="form-control"
                          onChange={this.onChange}
                        />
                        {submitted && !euro &&
                            <div className="help-block red-text"  >Financial Support is required</div>
                        }
                      </div>

                      <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                        Επιθυμητή καταγωγή Υποψηφίου
                      </label>
                      <div className={'form-group' + (submitted && !origin ? ' has-error' : '')}>
                        <select className="browser-default custom-select"  onChange={this.onChange} name="origin" value={origin}>
                          <option value="">Επιλέξτε Επιθυμητή Καταγωγή Υποψηφίου</option>
                          <option value="all">Χωρίς Επιθυμητή Καταγωγή</option>
                          <option value="Νομός Αιτωλοακαρνανίας">Νομός Αιτωλοακαρνανίας </option>
                          <option value="Νομός Αργολίδας">Νομός Αργολίδας</option>
                          <option value="Νομός Αρκαδίας">Νομός Αρκαδίας</option>
                          <option value="Νομός Άρτας">Νομός Άρτας</option>
                          <option value="Νομός Αττικής">Νομός Αττικής</option>
                          <option value="Νομός Αχαΐας">Νομός Αχαΐας</option>
                          <option value="Νομός Βοιωτίας">Νομός Βοιωτίας</option>
                          <option value="Νομός Γρεβενών">Νομός Γρεβενών</option>
                          <option value="Νομός Δράμας">Νομός Δράμας</option>
                          <option value="Νομός Δωδεκανήσου">Νομός Δωδεκανήσου</option>
                          <option value="Νομός Έβρου">Νομός Έβρου</option>
                          <option value="Νομός Ευβοίας">Νομός Ευβοίας</option>
                          <option value="Νομός Ευρυτανίας">Νομός Ευρυτανίας</option>
                          <option value="Νομός Ζακύνθου">Νομός Ζακύνθου</option>
                          <option value="Νομός Ηλείας">Νομός Ηλείας</option>
                          <option value="Νομός Ημαθίας">Νομός Ημαθίας</option>
                          <option value="Νομός Ηρακλείου">Νομός Ηρακλείου</option>
                          <option value="Νομός Θεσπρωτίας">Νομός Θεσπρωτίας</option>
                          <option value="Νομός Θεσσαλονίκης">Νομός Θεσσαλονίκης</option>
                          <option value="Νομός Ιωαννίνων">Νομός Ιωαννίνων</option>
                          <option value="Νομός Καβάλας">Νομός Καβάλας</option>
                          <option value="Νομός Καρδίτσας">Νομός Καρδίτσας</option>
                          <option value="Νομός Καστοριάς">Νομός Καστοριάς</option>
                          <option value="Νομός Κέρκυρας">Νομός Κέρκυρας</option>
                          <option value="Νομός Κεφαλληνίας">Νομός Κεφαλληνίας</option>
                          <option value="Νομός Κιλκίς">Νομός Κιλκίς</option>
                          <option value="Νομός Κοζάνης">Νομός Κοζάνης</option>
                          <option value="Νομός Κορινθίας">Νομός Κορινθίας</option>
                          <option value="Νομός Κυκλάδων">Νομός Κυκλάδων</option>
                          <option value="Νομός Λακωνίας">Νομός Λακωνίας</option>
                          <option value="Νομός Λάρισας">Νομός Λάρισας</option>
                          <option value="Νομός Λασιθίου">Νομός Λασιθίου</option>
                          <option value="Νομός Λέσβου">Νομός Λέσβου</option>
                          <option value="Νομός Λευκάδας">Νομός Λευκάδας</option>
                          <option value="Νομός Μαγνησίας">Νομός Μαγνησίας</option>
                          <option value="Νομός Μεσσηνίας">Νομός Μεσσηνίας</option>
                          <option value="Νομός Ξάνθης">Νομός Ξάνθης</option>
                          <option value="Νομός Πέλλας">Νομός Πέλλας</option>
                          <option value="Νομός Πιερίας">Νομός Πιερίας</option>
                          <option value="Νομός Πρέβεζας">Νομός Πρέβεζας</option>
                          <option value="Νομός Ρεθύμνης">Νομός Ρεθύμνης</option>
                          <option value="Νομός Ροδόπης">Νομός Ροδόπης</option>
                          <option value="Νομός Σάμου">Νομός Σάμου</option>
                          <option value="Νομός Σερρών">Νομός Σερρών</option>
                          <option value="Νομός Τρικάλων">Νομός Τρικάλων</option>
                          <option value="Νομός Φθιώτιδας">Νομός Φθιώτιδας</option>
                          <option value="Νομός Φλώρινας">Νομός Φλώρινας</option>
                          <option value="Νομός Φωκίδας">Νομός Φωκίδας</option>
                          <option value="Νομός Χαλκιδικής">Νομός Χαλκιδικής</option>
                          <option value="Νομός Χανίων">Νομός Χανίων</option>
                          <option value="Νομός Χίου">Νομός Χίου</option>
                        </select>
                        {submitted && !origin &&
                            <div className="help-block red-text">Origin is required</div>
                        }
                      </div>

                      <div className="custom-control custom-checkbox text-left">
                          <input type="checkbox" defaultChecked={indigent} className="custom-control-input" id="defaultRegisterFormNewsletter" onChange={ this.handleClick }></input>
                          <label className="custom-control-label" htmlFor="defaultRegisterFormNewsletter">Απευθύνεται μόνο σε φοιτητές με οικονομικό πρόβλημα</label>
                      </div>
                      <br />

                      <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                        Διάρκεια χρηματοδότησης (σε μήνες)
                      </label>
                      <div className={'form-group' + (submitted && !duration ? ' has-error' : '')}>
                        <input
                          type="text"
                          name="duration"
                          value={duration}
                          id="defaultFormContactSubjectEx"
                          className="form-control"
                          onChange={this.onChange}
                        />
                        {submitted && !duration &&
                            <div className="help-block red-text" >Duration is required</div>
                        }
                      </div>
                      <br />

                      <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                        Ηλικία υποψηφίου από - έως
                      </label>
                      <div className={'form-group' + (submitted && !age_from  &&!age_until ? ' has-error' : '')}>
                        <input
                          placeholder="Ηλικία από"
                          type="number"
                          name="age_from"
                          value={age_from}
                          id="defaultFormContactSubjectEx"
                          className="form-control"
                          onChange={this.onChange}
                        />
                        <input
                          placeholder="Ηλικία έως"
                          type="number"
                          name="age_until"
                          value={age_until}
                          id="defaultFormContactSubjectEx"
                          className="form-control"
                          onChange={this.onChange}
                        />
                        {submitted && !age_from && !age_until &&
                            <div className="help-block red-text"  >Age Requirements are required</div>
                        }
                      </div>
                      <br />

                      <label>Τελική Ημερομηνία Εκδήλωσης Ενδιαφέροντος</label>

                      <div className={'form-group' + (submitted && !date_expire ? ' has-error' : '')}>
                        <input
                          placeholder="Καταλητική Ημερομηνία"
                          type="date"
                          name="date_expire"
                          value={date_expire}
                          id="defaultFormContactSubjectEx"
                          className="form-control"
                          onChange={this.onChange}
                        />
                        {submitted && !date_expire &&
                            <div className="help-block red-text">Date expiration is required</div>
                        }
                      </div>
                      <br />

                      <label
                        htmlFor="defaultFormContactMessageEx" className="grey-text">
                        Σχόλια
                      </label>
                      <div className={'form-group' + (submitted && !comment ? ' has-error' : '')}>
                        <textarea
                          type="text"
                          name="comment"
                          value={comment}
                          id="defaultFormContactMessageEx"
                          className="form-control"
                          rows="4"
                          onChange={this.onChange}
                        />
                        {submitted && !comment &&
                            <div className="help-block red-text" >Comment is required</div>
                        }
                      </div>
                      <br />

                      <div className="input-group">
                        <span className="input-group-text" aria-describedby="inputGroupFileAddon01">
                          https://
                        </span>
                        <input
                          aria-describedby="inputGroupFileAddon01"
                          placeholder="Σύνδεσμος Υποτροφίας "
                          type="link"
                          name="link"
                          value={link}
                          id="defaultFormContactSubjectEx"
                          className="form-control"
                          onChange={this.onChange}
                        />
                      </div>
                      <br />

                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroupFileAddon01">
                            Upload
                          </span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            name="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                            value={file}
                            onChange={this.onChange}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                              Αρχείο Προκήρυξης
                            </label>
                          </div>
                      </div>

                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="red" onClick={this.toggle(4)}>Close</MDBBtn>
              <MDBBtn color="blue" type="submit">Save changes</MDBBtn>
            </MDBModalFooter>
          </form>
        </MDBModal>

        <MDBContainer>
          <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)}>
            <MDBModalHeader toggle={this.toggle(5)}>Η Υποτροφία επεξεργάστηκε με Επιτυχία</MDBModalHeader>
            <MDBModalBody>
              Συγχαρητήρια!
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="green" onClick={this.toggle(5)}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    )}
}
