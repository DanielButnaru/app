import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../assets/images/about/outdoor-image-02-768x513.jpg";

export class AboutDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container className="py-5">
          <Row className="my-5">
            <Col lg={6} md={6} sm={12}>
              <h1 className="headingTitle">OUR MISSION</h1>
              <div className="borderBottom "></div>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, quibusdam, quos, voluptate voluptas quia
                exercitationem quae voluptatibus quod doloribus quas
                necessitatibus. Quisquam, voluptates.</p>
                <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, quibusdam, quos, voluptate voluptas quia
                exercitationem quae voluptatibus quod doloribus quas</p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <img className="aboutImg" src={aboutImg} alt="" />
              
              </Col>
          </Row>
          <Row className="my-5">
            <Col lg={6} md={6} sm={12}>
              <h4 className="subHeadingTitle mt-2">OUR VISION</h4>
              <div className="borderBottom "></div>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, quibusdam, quos, voluptate voluptas quia
                exercitationem quae voluptatibus quod doloribus quas
                necessitatibus. Quisquam, voluptates.</p>
                <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, quibusdam, quos, voluptate voluptas quia
                exercitationem quae voluptatibus quod doloribus quas</p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h4 className="subHeadingTitle mt-2">OUR PLAN</h4>
              <div className="borderBottom "></div>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, quibusdam, quos, voluptate voluptas quia
                exercitationem quae voluptatibus quod doloribus quas
                necessitatibus. Quisquam, voluptates.</p>
                <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, quibusdam, quos, voluptate voluptas quia
                exercitationem quae voluptatibus quod doloribus quas</p>
            </Col>
          </Row>

        </Container>
      </Fragment>
    );
  }
}

export default AboutDescription;
