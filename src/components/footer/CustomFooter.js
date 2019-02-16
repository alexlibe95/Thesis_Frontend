import React from "react";
import { MDBCol , Container, MDBRow, MDBFooter} from "mdbreact";

import NewsletterForm from './newsletter.form.js';

export default class FooterPage extends React.Component {

        render() {
        return (
        <MDBFooter  color="indigo darken-4" className="font-small pt-4 mt-4 ">
          <Container fluid className="text-center">
            <MDBRow>
              <MDBCol  md="1">
              </MDBCol>
              <MDBCol  md="3">
              <p className="h5 text-md-left">Email επικοινωνίας</p>
              <div className="text-md-left py-3">
              <p>
                scholarships@studyingreece.edu.gr
              </p>
              <p>
                alexlibe@studyingreece.edu.gr
              </p>
              </div>
              </MDBCol >
              <MDBCol  md="4">
                <NewsletterForm />
              </MDBCol >
              <MDBCol  md="1">
              </MDBCol>
              <MDBCol  md="2">
                <div className="text-md-left py-2">
                  <a href="https://www.studyingreece.edu.gr" target="_blank" rel="noopener noreferrer"><img src = "assets/logo2.png" className="img-fluid" alt = "Responsive" /></a>
                </div>
              </MDBCol >
              <MDBCol  md="1">
              </MDBCol>
            </MDBRow>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexandros-liberopoulos/"> Alex Liberopoulos </a>
            </Container>
          </div>
        </MDBFooter >
        );
      }
}
