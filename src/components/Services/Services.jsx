import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Services extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Container className="text-center my-5">
            <h2 className="headingTitle fixed-center">Our Services</h2>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/web-design.png"
                    alt="Web Design"
                  />
                  <h2 className="serviceName">Water Sports</h2>
                  <p className="serviceDescription">
                    I design websites using HTML, CSS, Bootstrap, React, and
                    JavaScript.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/code.png"
                    alt="Web Development"
                  />
                  <h2 className="serviceName">Winter Sports</h2>
                  <p className="serviceDescription">
                    I develop websites using HTML, CSS, Bootstrap, React, and
                    JavaScript.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/seo.png"
                    alt="SEO"
                  />
                  <h2 className="serviceName">Backpacking Trips</h2>
                  <p className="serviceDescription">
                    I optimize websites for search engines using HTML, CSS,
                    Bootstrap, React, and JavaScript.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Fragment>
      </div>
    );
  }
}

export default Services;
