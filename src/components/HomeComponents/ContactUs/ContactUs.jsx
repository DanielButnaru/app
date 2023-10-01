import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class ContactUs extends Component {
  render() {
    return (
      <Fragment>
        <Container className="contactUsSection">
          <Row>
            <div className="heading text-center">
              <p className="heading-paragraph">We are always available</p>
              <h1 className="heading-title">
                Contact us if you want to ‍experience an amazing time.
              </h1>
            </div>

            <Col lg={6} md={6} sm={12}>
              <div className="contact-info-wrapper text-center">
                <div className="phone-info ">
                  <div className="contact-icon">
                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d47f01fbd733/637a5308ace0337bb5233693_phone-call.svg"></img>
                  </div>
                  <div className="contact-data">
                    <p className="contact-text-title">Call us:</p>
                    <p className="contact-text">+40 123 456 789</p>
                  </div>
                </div>
                <div className="email-info">
                  <div className="contact-icon">
                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d47f01fbd733/637a530cb32209739a3e7295_mail%20(1).svg"></img>
                  </div>
                  <div className="contact-data">
                    <p className="contact-text-title">Email us:</p>
                    <p className="contact-text">name@example.com</p>
                  </div>
                </div>
                <div className="address-info">
                  <div className="contact-icon">
                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d47f01fbd733/637a55b6a69b500729fa48b0_tool%20(2).svg"></img>
                  </div>
                  <div className="contact-data">
                    <p className="contact-text-title">Visit us:</p>
                    <p className="contact-text">123 Street, City, Country</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="contact-image">
                <div className="contact-image-wrapper-1">
                  <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/63d906145fb7633ad2e8fc49_Great%20Views%20Of%20The%20Nearby%20Desert_small.webp"></img>
                </div>
                <div className="contact-image-wrapper-2">
                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/63f36badc050070155a001f4_pexels-eberhard-grossgasteiger-1670187.webp"></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ContactUs;
