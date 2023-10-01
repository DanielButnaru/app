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
    if (this.state.loading == true) {
      return <Loading />;
    } else {
      return (
        <Fragment>
          <Container className="py-5">
            <div className="heading text-center">
              <p className="heading-paragraph">HOW WE BECOME A TRAVEL STUDIO</p>
              <h1 className="heading-title h1">Our story</h1>
            </div>
            <Row className="aboutSection">
              <Col lg={6} md={6} sm={12} >
                <div className="heading">
                <p className="paragraph-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus quod doloribus quas
                  necessitatibus. Quisquam, voluptates.
                </p>
                <p className="paragraph-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus quod doloribus quas
                </p>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <img className="aboutImg" src={aboutImg} alt="" />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="heading">
                <div className="orange-heading-wrapper">
                <h4 className="heading-title">OUR VISION</h4>
                </div>
                <p className="paragraph-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus quod doloribus quas
                  necessitatibus. Quisquam, voluptates.
                </p>
                <p className="paragraph-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus quod doloribus quas
                </p>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="heading">
                <div className="orange-heading-wrapper">
                <h4 className="heading-title">OUR PLAN</h4>
                </div>

                <p className="paragraph-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus quod doloribus quas
                  necessitatibus. Quisquam, voluptates.
                </p>
                <p className="paragraph-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus quod doloribus quas
                </p>
                </div>
              </Col>
            </Row>
            <Row className="benefitsContainer benefits-wrapper">
              <Col lg={4} md={4} sm={12}>
                <div className="text-center">
                  <div className="benefits-icon ">
                    <img
                      src="https://uploads-ssl.webflow.com/63581d2d6f71d47f01fbd733/63807df206df405882849815_hidden%20(1).svg"
                      loading="lazy"
                      alt=""
                    ></img>
                  </div>
                  <div className="benefits-text-wrapper">
                    <div className="orange-heading-wrapper">
                      <h4 className="heading h4">Impressive adventures</h4>
                    </div>

                    <p className="paragraph-small benefits-text">
                      We travel thousands of kilometers around the world to find
                      the best places to spend time.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className="text-center">
                  <div className="benefits-icon">
                    <img
                      src="https://uploads-ssl.webflow.com/63581d2d6f71d47f01fbd733/63807d7cd1140b9222486357_flower%20(1).svg"
                      loading="lazy"
                      alt=""
                    ></img>
                  </div>
                  <div className="benefits-text-wrapper">
                    <div className="orange-heading-wrapper">
                      <h4 className="heading h4">Experience complete rest</h4>
                    </div>

                    <p className="paragraph-small benefits-text">
                      We help you relax, because we know that it is not easy if
                      you live in complete shame on a daily basis.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className="text-center">
                  <div className="benefits-icon">
                    <img
                      src="https://uploads-ssl.webflow.com/63581d2d6f71d47f01fbd733/63807db706df40f806848bff_compass%20(1).svg"
                      loading="lazy"
                      alt=""
                    ></img>
                  </div>
                  <div className="benefits-text-wrapper">
                    <div className="orange-heading-wrapper">
                      <h4 className="heading h4">Notice the imperceptible</h4>
                    </div>

                    <p className="paragraph-small benefits-text">
                      It is easier to focus on the world around you when you
                      don't have to think about anything, because we will plan
                      the entire trip for you.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    } //end else
  }
}

export default AboutDescription;
