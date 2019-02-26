import React, {Component} from 'react';
import {Button, Card, CardHeader, CardBody, CardTitle, CardText, Jumbotron} from "mdbreact";
import { withRouter } from 'react-router-dom';

import '../../css/Home.css';
import Slide from './Slide.js';
import LatestNews from './LatestNews.js';


class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false,
      };
  this.onClick = this.onClick.bind(this);
  }

  onClick(){
      this.setState({
          collapse: !this.state.collapse,
      });
  }
  render() {
    return (
       <div>
          <img src = "assets/banner-3.jpg" className = "img-fluid" alt = "Responsive" />

          <Jumbotron  style = { {  marginTop: '1rem'}} className="text-center">

              <h1 className="h3-responsive">Καλώς ήρθες!</h1>
              <p className="lead">Scholarships.gr ή αλλιώς η No1 πλατφόρμα αναζήτησης υποτροφιών σύμφωνα με τα δικά σου κριτήρια, χωρίς να χάνεις άδικα το χρόνο σου.. Καλή πλοήγηση !</p>
              <hr className="my-2"/>
              <Button color=" #ffa000 amber darken-3" onClick={ e => this.props.history.push("/about_us")} to="/about_us">Μαθε περισσοτερα</Button>
          </Jumbotron>

          <div className = "row" style = { {  marginTop: '-1rem'}}>
              <div className = "col-md-4">
                <Card  style = { {   height:'100%' } } >
                  <CardHeader color = "#1c2a48 mdb-color darken-3" tag = "h3" > Αναζήτηση< /CardHeader>
                  <CardBody>
                    <CardTitle>Βρες την υποτροφία που σου ταιριάζει! < /CardTitle >
                    <CardText>Μέσα από μια μεγάλη γκάμα υποτροφιών, μπορείς να βρείς τις υποτροφίες που ταιριάζουν στα κριτήρια σου ακόμη πιο εύκολα! < /CardText>
                    <Button color = " #ffa000 amber darken-3" onClick={ e => this.props.history.push("/scholarships")} to="/scholarships">Πατα εδω</Button >
                  </CardBody>
                </Card>
              </div>
              <div className = "col-md-8"  >
                <Slide />
              </div>
          </div>
          <div className = "row" style = { {  marginTop: '1rem'}}>
             <div className="col-md">
               <LatestNews />
             </div>
          </div>
      </div>
    );
  }
}
export default withRouter(Home);
