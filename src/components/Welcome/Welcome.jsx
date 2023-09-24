import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} ></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Welcome;
