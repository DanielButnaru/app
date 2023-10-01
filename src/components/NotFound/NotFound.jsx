import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

export class NotFound extends Component {
  render() {
    return (
  <Fragment>
    <Container>
        <Row>
            <Col>
            <h1 className="serviceName">Page Not Found</h1>
            <h2>404</h2>
            </Col>
        </Row>
    </Container>

  </Fragment>
    )
  }
}

export default NotFound
