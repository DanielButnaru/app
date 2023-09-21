import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class ClientReview extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      speed: 1000,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fragment>
        <Container fluid={true} className="siderBack">
          <h1 className="serviceMainTitle text-center">Client Says</h1>
          <div className="bottom"></div>
          <Slider {...settings}>
            <div>
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <h1>Client 1</h1>
              </Col>
            </Row>
            </div>
            <div>
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <h1>Client 2</h1>
              </Col>
            </Row>
            </div>
            <div>
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <h1>Client 3</h1>
              </Col>
            </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
