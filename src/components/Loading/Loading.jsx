import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Loader from "../../assets/loader.svg"

 class Loading extends Component {
  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className='text-center'>
                    <img className="loaderAnimation" src={Loader} alt="Loading Animation" />
                    </Col>
                </Row>
            </Container>
        </Fragment>
   
    )
  }
}

export default Loading
