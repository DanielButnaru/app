import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../assets/images/about/outdoor-image-02-768x513.jpg";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";



export class AboutDescription extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.AboutData).then((result) => {
      this.setState({ myData: result, loading: false });
    });
  }

  render() {

    if(this.state.loading==true){
      return <Loading />
    }else{
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
    } //end else
  }
}

export default AboutDescription;
