import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import OpenModal from './open.modal.js';

import { searchService } from './search.service.js';

var columns=[{
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Τίτλος',
        field: 'title',
        sort: 'asc'
      },
      {
        label: 'Πεδίο',
        field: 'sectors',
        sort: 'asc'
      },
      {
        label: 'Επίπεδο',
        field: 'level',
        sort: 'asc'
      },
      {
        label: 'Χρηματική βοήθεια',
        field: 'prize',
        sort: 'asc'
      },
      {
        label: 'Προθεσμία',
        field: 'date',
        sort: 'asc'
      },
      {
        label: '',
        field: 'open',
        sort: 'asc'
      }
    ]


export default class ScholarsTable extends Component{

    constructor(props){
      super(props);
      this.state = {
        'Scholars':[],
        'isLoaded': 0,
        'error':''
      }
    }

  async  getProgrammes(){

    if(this.props.sector==="all" && this.props.level==="all" && this.props.euro==="all" && this.props.origin==="all" && this.props.age==="" && this.props.indigent===false && this.props.active===false && this.props.submitted===true){
      searchService.getallSchols()
      .then(results => this.setState({
        'Scholars':results,
        'isLoaded':this.props.loaded
      }),error => this.setState({ error})
      )

    }else {
      searchService.getSchols(this.props.sector, this.props.level, this.props.euro, this.props.origin, this.props.age, this.props.indigent, this.props.active)
      .then(results => this.setState({
        'Scholars':results,
        'isLoaded':this.props.loaded
      }),error => this.setState({ error})
      )
    }
  }

    render() {

                if (!this.props.submitted) {
                  return (<div>Επιλέξτε τα κατάλληλα κριτήρια για να ανακαλύψετε τις υποτροφίες που σας ταιριάζουν.</div>)
                }
                else if (this.props.submitted && (this.state.isLoaded !== this.props.loaded)) {
                  this.getProgrammes();
                    if(this.state.error!==""){
                      return (<div >LOADING...</div>,<div className={'alert alert-danger'}>{this.state.error}</div>)
                    } else {
                      return (<div >LOADING...</div>)
                    }
                } else {
                  var rows=[]
                  for(var i=0; i<this.state.Scholars.length; i++){
                    rows.push({
                      "id":i+1,
                      "title":this.state.Scholars[i].title,
                      "sectors":this.state.Scholars[i].sector,
                      "level":this.state.Scholars[i].level,
                      "prize":this.state.Scholars[i].euro + "€",
                      "date":this.state.Scholars[i].date_expire,
                      "open":<OpenModal Scholar={this.state.Scholars[i]} />
                    })
                  }

                  const data = {columns, rows}
                  return(
                    <div className="table-responsive text-center">
                    <MDBDataTable  striped bordered  data={data} />
                    </div>
                  )
                }
    }
}
