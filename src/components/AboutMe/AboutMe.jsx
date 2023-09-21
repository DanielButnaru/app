import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { init } from "ityped";

export class AboutMe extends Component {
  componentDidMount() {
    const myElement = document.getElementById("myElement");
    init(myElement, {
      showCursor: false,
      strings: ['Web Developer!', 'Web Designer!'],
    });
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}></Col>
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeBody">
                <h2 className="aboutMeDetails">Hi There, I`m </h2>
                <h1 className="aboutMeName">Butnaru Daniel</h1>
                <h3 className="aboutMeJob">
                  Work as <span id="myElement"></span>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutMe;
