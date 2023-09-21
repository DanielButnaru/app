import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Our Courses</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className="courseCard text-center">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                    <h2 className="courseTitle">Web Development</h2>
                    <p className="courseDes">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam voluptatum, quibusdam, quia, quos voluptates
                      voluptatibus voluptatem quod quas doloribus quidem
                      voluptate.
                    </p>
                    <button className="btn btn-primary">Details</button>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="courseCard text-center">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                    <h2 className="courseTitle">Web Development</h2>
                    <p className="courseDes">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam voluptatum, quibusdam, quia, quos voluptates
                      voluptatibus voluptatem quod quas doloribus quidem
                      voluptate.
                    </p>
                    <button className="btn btn-primary">Details</button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className="courseCard text-center">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                    <h2 className="courseTitle">Web Development</h2>
                    <p className="courseDes">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam voluptatum, quibusdam, quia, quos voluptates
                      voluptatibus voluptatem quod quas doloribus quidem
                      voluptate.
                    </p>
                    <button className="btn btn-primary">Details</button>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="courseCard text-center">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                    <h2 className="courseTitle">Web Development</h2>
                    <p className="courseDes">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam voluptatum, quibusdam, quia, quos voluptates
                      voluptatibus voluptatem quod quas doloribus quidem
                      voluptate.
                    </p>
                    <button className="btn btn-primary">Details</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;
