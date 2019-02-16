import React, { Component } from 'react';
import { MDBDataTable, Card , CardHeader, CardBody} from 'mdbreact';

import { instituteService } from './institute.service.js';

var columns=[{
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Ίδρυμα / Φορέας',
        field: 'institution',
        sort: 'asc'
      },
      {
        label: 'Link Ιστοσελίδας',
        field: 'link',
        sort: 'asc'
      }
    ]


export default class Institutions extends Component{


    constructor(props){
      super(props);
      this.state = {
        'Instites':[],
        'isLoaded': false,
        'error':''

      }

    }

componentDidMount(){
  this.getInstitutes();
}


  async  getInstitutes(){

      instituteService.getInstitutes()
      .then(results => this.setState({
        'Scholars':results,
        'isLoaded':true
      }),error => this.setState({ error})
      )

  }

    render() {

                 if(!this.state.isLoaded){

                    if(this.state.error!==""){
                      return (<div >LOADING...</div>,<div className={'alert alert-danger'}>{this.state.error}</div>)
                    }
                    else{
                      return (<div >LOADING...</div>)
                    }

                }else{


                  var rows=[]
                  for(var i=0; i<this.state.Scholars.length; i++){

                    rows.push({
                      "id":i+1,
                      "institution":this.state.Scholars[i].instName,
                      "link":<div><a href={this.state.Scholars[i].instLink} target="_blank" rel="noopener noreferrer">{this.state.Scholars[i].instLink}</a></div>,
                    })
                  }

                  const data = {columns, rows}
                  return(
                    <div>
                      <Card  style = { {   height:'100%' , marginTop: '1rem'} } >
                        <CardHeader color = " light-blue" tag = "h3" >Ιδρύματα και Φορείς< /CardHeader>
                        <CardBody >
                          <div className = "row" >

                                <div className = "col-md-12"  >
                                <div className="table-responsive text-center">
                                  <MDBDataTable  striped bordered  data={data} />
                                </div>
                                </div>

                          </div>
                        </CardBody>
                      </Card>
                    </div>

                  )
                }


              }
}
