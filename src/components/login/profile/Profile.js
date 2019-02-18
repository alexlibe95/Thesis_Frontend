import React, {Component} from 'react';

import { MDBDataTable } from 'mdbreact';
import {config} from '../../config/config.js';
import AddModal from './add.modal.js';
import RemoveModal from './remove.modal.js';
import EditModal from './edit.modal.js';
import ChangePassModal from './changepass.modal.js'


//import { userService } from '../login/_services/user.service.js';

var columns=[{
        label: '#',
        field: 'ids',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Τίτλος Υποτροφίας',
        field: 'titlesd',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Πεδίο',
        field: 'institution',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Επίπεδο Σπουδών',
        field: 'epipedo',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Επεξεργασία',
        field: 'epejergasia',
        sort: 'asc',
        width: 10
      },
      {
        label: 'Διαγραφή',
        field: 'button',
        sort: 'asc',
        width: 10
      }]


export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            'Scholars':[],
            'isLoaded': false
        };
        this.handlerRefresh = this.handlerRefresh.bind(this);

    }

    handlerRefresh() {
          this.componentDidMount();
    }

    componentDidMount() {
        var user1 = JSON.parse(localStorage.getItem('user'));
        this.setState({
            user: user1
        });
        this.getScholars(user1.username);
    }

    async getScholars(username) {


      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username})
      };

      try{
      await fetch(`${config.apiUrl}/getProfScholars`, requestOptions)
          .then(results =>results.json())
          .then(results =>this.setState({
            'Scholars':results,
            'isLoaded':true
          }))
        }catch(e){
        }
      }



    render() {

        const { user} = this.state;
        var rows=[];


        if (!this.state.isLoaded){

          return (
            <div className="container-fluid text-center p-5">
              <div className="col-md-12 ">

                  <h1>{user.instName}</h1>


                  {!this.state.isLoaded &&
                      <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                      alt="loading" />
                  }

              </div>
            </div>
          );
        }
        else{

          for(var i=0; i<this.state.Scholars.length; i++){
            rows.push({
              "id":i+1,
              "name":this.state.Scholars[i].title,
              "tomeas":this.state.Scholars[i].sector,
              "epipedo":this.state.Scholars[i].level,
              "epejergasia": <EditModal Scholar={this.state.Scholars[i]} action={this.handlerRefresh} />,
              "button":<RemoveModal ID={this.state.Scholars[i].id} action={this.handlerRefresh} />
            })
          }
        }
        const data={columns,rows}

        return (
          <div className="container-fluid text-center p-5">
            <h1>{user.instName}</h1>
            <div className="row">
              <div className="col-md-2">
                  <AddModal username={user.username} action={this.handlerRefresh}/>
              </div>
              <div className="col-md-8">
              </div>
              <div className="col-md-2">

                  <ChangePassModal username={user.username} />

              </div>
            </div>
            <div className="table-responsive table-hover table-sm">
                <MDBDataTable bordered  data={data} />
            </div>


            </div>

        );
    }
}
