import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";

export class Newsletter extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="newsletterSection">
          <div className="newsletter-image-wrapper">
            <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/63f36badc050070155a001f4_pexels-eberhard-grossgasteiger-1670187.webp"></img>
          </div>
          <div className="newsletter-content-wrapper text-center">
            <div className="newsletter-text">
              <h2 className="newsletter-text-title">
                Join our newsletter to stay up to date
              </h2>
              <p className="newsletter-text-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="newsletter-input">
              <input type="text" placeholder="Enter your email address"></input>
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Newsletter;
