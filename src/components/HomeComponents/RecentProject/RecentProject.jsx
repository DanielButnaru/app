import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import walkingHolidays from "../../../assets/images/hero/walking-v1.jpg";
import hiking from "../../../assets/images/hero/hiking-v1.jpg";
import snow from "../../../assets/images/hero/snow-1.jpg";
import { Link } from "react-router-dom";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


export class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} style={{background:'#e4e4e4'}}>
          <Container className="my-5 projectsHomeSections">
            <div className="heading text-center">
              <p className="heading-paragraph">SAMPLE DIRECTIONS</p>
              <h1 className="heading-title">See our
                amazing travels.</h1>
                <a href="#" className="btn btn-primary">Discover More</a>
            </div>
            <Row className="my-5">
              <Col lg={3} md={3}>
              <div className="blog-post-item">
                <div className="blog-post-wrapper">
                  <div className="place-wrapper">
                  <a href="#">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    India
                  </a>
                  </div>
                  <div className="blog-post-text-wrapper">
                    <div className="blog-post-heading">
                      <h5 className="blog-post-heading-title">Intense flavors & blissful peace</h5>
                    </div>
                    <p className="paragraph-extra-small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quisquam placeat maiores aliquam ipsam.
                    </p>
                    <a href="#" className="btn button-transparent-white">
                      Discover
                    </a>
                  </div>
                  <div className="thumbnail-image-wrapper">
                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/63d94903c1a306e06b9813aa_Intense%20flavors_small-p-800.webp"></img>
                  </div>

                </div>
              </div>
              
              </Col>
              <Col lg={3} md={3}>
              <div className="blog-post-item">
                <div className="blog-post-wrapper">
                  <div className="place-wrapper">
                  <a href="#">
                    <FontAwesomeIcon icon={faLocationDot}/>
                   Amazonia
                  </a>
                  </div>
                  <div className="blog-post-text-wrapper">
                    <div className="blog-post-heading">
                      <h5 className="blog-post-heading-title">Intense flavors & blissful peace</h5>
                    </div>
                    <p className="paragraph-extra-small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quisquam placeat maiores aliquam ipsam.
                    </p>
                    <a href="#" className="btn button-transparent-white">
                      Discover
                    </a>
                  </div>
                  <div className="thumbnail-image-wrapper">
                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/63d948a3432b0466b73f4b8c_A%20fresh%20look%20at%20the%20world_small.webp"></img>
                  </div>

                </div>
              </div>
              
              </Col>
              <Col lg={3} md={3}>
              <div className="blog-post-item">
                <div className="blog-post-wrapper">
                  <div className="place-wrapper">
                  <a href="#">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    Amazonia
                  </a>
                  </div>
                  <div className="blog-post-text-wrapper">
                    <div className="blog-post-heading">
                      <h5 className="blog-post-heading-title">Intense flavors & blissful peace</h5>
                    </div>
                    <p className="paragraph-extra-small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quisquam placeat maiores aliquam ipsam.
                    </p>
                    <a href="#" className="btn button-transparent-white">
                      Discover
                    </a>
                  </div>
                  <div className="thumbnail-image-wrapper">
                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/637cc99dca48de39282a1e4a_pexels-avery-nielsenwebb-2406395%20(1)-p-800.webp"></img>
                  </div>

                </div>
              </div>
              
              </Col>
              <Col lg={3} md={3}>
              <div className="blog-post-item">
                <div className="blog-post-wrapper">
                  <div className="place-wrapper">
                  <a href="#">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    Africa
                  </a>
                  </div>
                  <div className="blog-post-text-wrapper">
                    <div className="blog-post-heading">
                      <h5 className="blog-post-heading-title">Intense flavors & blissful peace</h5>
                    </div>
                    <p className="paragraph-extra-small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quisquam placeat maiores aliquam ipsam.
                    </p>
                    <a href="#" className="btn button-transparent-white">
                      Discover
                    </a>
                  </div>
                  <div className="thumbnail-image-wrapper">
                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/638f90c6b0904e701f21c80e_pexels-taryn-elliott-4253829-p-1600.webp"></img>
                  </div>

                </div>
              </div>
              
              </Col>
              {/* <Col lg={4} md={6} sm={12} className="my-4  p-3">
                <div className="eventsCard">
                  <img src={walkingHolidays} alt="Walking Holidays" />
                  <div className="eventsCardBody text-center mt-4">
                    <h2 className="eventsCardTitle">Walking Holidays</h2>
                    <p className="eventsCardDescription">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla vitae aliquam odio. Nullam eget massa nec ex
                      ullamcorper aliquet. Nulla facilisi. Nulla facilisi.
                    </p>
                    <Button className="eventsCardButton" variant="primary">
                      Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className="my-4 p-3">
                <div className="eventsCard">
                  <img src={hiking} alt="Walking Holidays" />
                  <div className="eventsCardBody text-center mt-4">
                    <h2 className="eventsCardTitle">Walking Holidays</h2>
                    <p className="eventsCardDescription">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla vitae aliquam odio. Nullam eget massa nec ex
                      ullamcorper aliquet. Nulla facilisi. Nulla facilisi.
                    </p>
                    <Button className="eventsCardButton" variant="primary">
                      Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className="my-4  p-3">
                <div className="eventsCard">
                  <img src={snow} alt="Walking Holidays" />
                  <div className="eventsCardBody text-center mt-4">
                    <h2 className="eventsCardTitle">Walking Holidays</h2>
                    <p className="eventsCardDescription">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla vitae aliquam odio. Nullam eget massa nec ex
                      ullamcorper aliquet. Nulla facilisi. Nulla facilisi.
                    </p>
                    <Button className="eventsCardButton" variant="primary">
                      Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Container>
        </Container>
      </Fragment>
    );
  }
}

export default RecentProject;
