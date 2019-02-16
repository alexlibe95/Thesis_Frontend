import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute.js';

import CustomNavbar from './components/CustomNavbar.js';
import CustomFooter from './components/footer/CustomFooter.js';
import Home from './components/home_page/Home.js';
import Scholarships from './components/scholars_page/Scholarships.js';
import News from './components/news_page/News.js';
import Institutions from './components/institutes_page/Institutions.js';
import Contact from './components/contact_page/Contact.js';
import AboutUs from './components/AboutUs.js';
import StudentLoans from './components/StudentLoans.js'
import UserLogin from './components/UserLogin.js';
import Register from './components/login/Register.js';
import Profile from './components/login/profile/Profile.js';


import './App.css';



class App extends Component {

  render() {
    return (

        <div className="App">

          <div className="container-fluid">
            <Router>
              <div>

                <CustomNavbar />
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/news" component={News} />
                <Route exact path="/scholarships" component={Scholarships} />
                <Route exact path="/student_loans" component={StudentLoans} />
                <Route exact path="/institutions" component={Institutions} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about_us" component={AboutUs} />
                <Route exact path="/login" component={UserLogin} />
                <Route exact path="/register" component={Register} />

                <PrivateRoute exact path="/profile" component={Profile} />

                <Route component={Home} />

                </Switch>
                <CustomFooter />
              </div>
            </Router>


          </div>
        </div>
      );
    }
}

export default App;
