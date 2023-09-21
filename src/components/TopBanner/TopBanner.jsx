import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                    <h1 className="topTitle">Software Engineer</h1>
                    <h4 className="topSubTitle">Web Developer</h4>
                    <Button variant="primary">More Info</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}