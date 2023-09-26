import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Error from "../../assets/error.svg"

export class WentWrong extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col>
                <img src={Error} alt="" />
                </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default WentWrong;
