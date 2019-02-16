import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler,NavbarNav, Collapse ,NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import '../css/CustomNavbar.css';

class CustomNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false

        };
    this.onClick = this.onClick.bind(this);

    }

reload(){
  window.location.reload();
}



    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (

            <Router>

                <Navbar expand="md" scrolling>

                    <NavbarBrand >
                      <NavLink    onClick={ e => this.props.history.push("/")} to="/"><img src="assets/logo_3.jpg"  alt = "logo" height="100" /></NavLink >

                    </NavbarBrand>

                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>

                    <NavbarNav left>
                          <NavItem >
                              <NavLink  onClick={ e => this.props.history.push("/")} to="/" >Αρχική</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink  onClick={ e => this.props.history.push("/scholarships")} to="/scholarships">Αναζήτηση Υποτροφιών</NavLink>
                          </NavItem>

                          <NavItem>
                            <NavLink  onClick={ e => this.props.history.push("/institutions")} to="/institutions">Ιδρύματα και Φορείς</NavLink>

                          </NavItem>
                          <NavItem>
                              <NavLink onClick={ e => this.props.history.push("/about_us")} to="/about_us">Σχετικά με εμάς</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink  onClick={ e => this.props.history.push("/news")} to="/news">Νέα</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink onClick={ e => this.props.history.push("/contact")} to="/contact">Επικοινωνία</NavLink>
                          </NavItem>


                        </NavbarNav>
                        {(localStorage.getItem('user')  !== null ) ?
                        <NavbarNav right>
                            <NavItem>
                                <NavLink onClick={ e => this.props.history.push("/profile")} to="/profile"><i className='fa fa-user'></i></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={ e => this.props.history.push("/login").then(this.reload())} to="/login">Αποσύνδεση</NavLink>
                            </NavItem>
                            </NavbarNav>
                          :<NavbarNav right>
                          <NavItem>
                              <NavLink onClick={ e => this.props.history.push("/login")} to="/login">Σύνδεση Φορέα</NavLink>
                          </NavItem>
                        </NavbarNav>}

                    </Collapse>
                </Navbar>

            </Router>

        );
    }
}
export default withRouter(CustomNavbar);
