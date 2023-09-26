import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faFacebook, faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";





export class Footer extends Component {



render(

) {
  return (
    <Fragment>
      <Container fluid={true} className="footerSection bg-black">
        <Container>
          <Row className="text-center">
            <Col lg={4} md={6} sm={12} >
              <h2 className="my-5 footerTitle">Contact</h2>
              <div className="footerSubSection">
                <p><FontAwesomeIcon icon={faPhoneSquareAlt} />  +970(4)888-8888 </p>
                <p><FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:email@examole.com">email@example.com</a></p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Street, City, Country</p>
              </div>


            </Col>
            <Col lg={4} md={6} sm={12}>
              <h2 className="my-5 footerTitle">Follow us</h2>
              <div className="footerSubSection">
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                  <span id="fb"></span>
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} />
                  <span id="yt"></span>
                </a>
                <a href="#" target="_blank">
                  {/* <FontAwesomeIcon icon={faInstagram} /> */}
                  
          
                  
                </a>
                <a href="#" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                  <span id="git"></span>
                </a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h2 className="my-5 footerTitle">Helpful Links</h2>
              <div className="footerSubTitle">
                <a href="#">About Us</a><br />
                <a href="#">Contact Us</a><br />
                <a href="#">Terms & Conditions</a><br />
                <a href="#">Privacy Policy</a><br />
                <a href="#">Refund Policy</a><br />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <p className="text-center text-white mt-5 mb-0">All right reserved by <a href="#">Your Website</a></p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
}
}

export default Footer;
