import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class PagesTop extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedPage p-0">
          <div className="topPageOverlay">
            <Container className="topPageContent">
              <Row>
                <Col className="text-center">
                  <h4>{this.props.pageTitle}</h4>
                  <p>egrgf</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default PagesTop;
