import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faFacebook, faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
 



export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12}>
              <h2>Follow us</h2>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
                <a href="#" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="#" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                </a>
                
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h2>Adress</h2>
                <p>123, Main Street, Your City</p>
                
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h2>Information</h2>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h2>Policy</h2>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
