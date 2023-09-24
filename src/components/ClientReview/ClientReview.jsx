import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export class ClientReview extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ClientReview).then((result) => {
      this.setState({ myData: result });
    });
  }

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

    const MyList = this.state.myData;
    const MyView = MyList.map((MyList) => {
      return (
        <div>
          <Row className="text-center justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <img className="circleImg" src={MyList.client_image} />
              <h1 className="serviceName">{MyList.client_name}</h1>
              <p className="serviceDescription">{MyList.client_review}</p>
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <Fragment>
        <Container fluid={true} className="siderBack">
          <h1 className="serviceMainTitle text-center">Client Says</h1>
          <div className="bottom"></div>
          <Slider {...settings}>{MyView}</Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
