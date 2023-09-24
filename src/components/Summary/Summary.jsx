import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import {
  faCheckSquare,
  faGlobe,
  faStar,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner summarySection my-5">
          <div className="summaryBannerOverlay">
            <Container className="summaryBannerContent text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <FontAwesomeIcon icon={faGlobe} />
                      <h1>
                        <CountUp start={0} end={106} duration={5} >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4>Travels Around The World</h4>
                    </Col>
                    <Col>
                      <FontAwesomeIcon icon={faFlag} />
                      <h1>
                        <CountUp start={0} end={47} duration={5}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4>Countries Visited</h4>
                    </Col>
                    <Col>
                      <FontAwesomeIcon icon={faStar} />
                      <h1>
                        <CountUp start={0} end={3000} duration={5}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4>Happy Customers</h4>
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>What I Have Achieved</Card.Title>
                      <Card.Text>
                        <p>
                          <FontAwesomeIcon icon={faCheckSquare} />
                          HTML
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faCheckSquare} />
                          Bootstrap
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faCheckSquare} />
                          JavaScript
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faCheckSquare} />
                          React
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faCheckSquare} />
                          PHP
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
