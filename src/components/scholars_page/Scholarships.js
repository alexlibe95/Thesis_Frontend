import React, { Component } from 'react';
import {Jumbotron, MDBBtn} from "mdbreact";

import '../../css/Scholarships.css';
import ScholarsTable from './scholars.table.js';


export default class Scholarships extends Component{

  constructor(props){
    super(props);
    this.state = {
      'sector': 'all',
      'level': 'all',
      'euro': 'all',
      'origin': 'all',
      'age': '',
      'indigent': false,
      'active':true,
      'isSubmitted':false,
      'isLoaded':0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  }

  handleClick () {
    this.setState({indigent: !this.state.indigent});
  }

  handleClick1 () {
    this.setState({active: !this.state.active});
  }

  onSubmit= (e) => {
      e.preventDefault();

      this.setState({ isSubmitted: true });
      this.setState({ isLoaded: this.state.isLoaded +1 });
      console.log(this.state.isLoaded)
  }




  render() {

    const { sector, level, euro, age, origin, indigent ,active, isSubmitted, isLoaded} = this.state;

    return (
      <div className = "row" >

        <div className = "col-md-3"  >
          <Jumbotron  style = { {  marginTop: '1.5rem'}}  >
            <div>
              <label >Κατεύθυνση</label>
              <select className="browser-default custom-select"  name="sector" onChange={this.onChange} value={sector}>
                <option defaultValue="all" value="all">Όλες</option>
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
            </div>
            <br />
            <div>
            <label >Επίπεδο σπουδών</label>
              <select className="browser-default custom-select"  name="level" onChange={this.onChange} value={level}>
                <option defaultValue="all" value="all">Όλα</option>
                <option value="Προπτυχιακό">Προπτυχιακό</option>
                <option value="Μεταπτυχιακό">Μεταπτυχιακό</option>
                <option value="Διδακτορικό">Διδακτορικό</option>
              </select>
            </div>
            <br />
            <div>
            <label >Εύρος οικονομικής ενίσχυσης</label>
              <select className="browser-default custom-select"  name="euro" onChange={this.onChange} value={euro}>
                <option defaultValue="all" value="all" >Όλα</option>
                <option value="0">0$ - 500$</option>
                <option value="500">501$-1500$</option>
                <option value="1500">1501$ - 3000$</option>
                <option value="3000">3001$+</option>
              </select>
            </div>
            <br />
            <div>
            <label>Καταγωγή (σε επίπεδο Νομού)</label>
              <select className="browser-default custom-select"  name="origin" onChange={this.onChange} value={origin}>
                <option defaultValue="all" value="all">Όλες</option>
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
            </div>
            <br/>

            <label>Ηλικία</label>
              <input

                type="number"
                name="age"
                className="form-control"
                value={age}
                onChange={this.onChange}
              />
              <br/>

            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="1" name="indigent" onChange={ this.handleClick }></input>
                <label className="custom-control-label" htmlFor="1">Χαμηλό Εισόδημα</label>
            </div>
            <br />

            <div className="custom-control custom-checkbox">
                <input type="checkbox" defaultChecked={active} className="custom-control-input"  id="2" name="active" onChange={ this.handleClick1}></input>
                <label className="custom-control-label" htmlFor="2">Μόνο Ενεργές Υποτροφίες</label>
            </div>
            <br />

            <div className="text-center">
              <MDBBtn color="orange accent-4"  style={ {marginBottom: '-1rem'}}  onClick={this.onSubmit}>αναζητηση</MDBBtn>
            </div>

          </Jumbotron>
        </div>

        <div className = "col-md-9"  style = { {  marginTop: '1.2rem'}}>
          <ScholarsTable sector={sector} level={level} euro={euro} origin={origin} age={age} indigent={indigent} active={active} submitted={isSubmitted} loaded={isLoaded} />
        </div>

     </div>
    );
  }
}
