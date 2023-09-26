import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export class ProjectsDescription extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectAll).then((result) => {
      this.setState({ myData: result });
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    const MyList = this.state.myData;
    const MyView = MyList.map((MyList) => {
      return (
        <Container className="py-5 mb-5">
          <Row>
            <div className="section-title">
              <h4 className="pb-4">{MyList.project_category}</h4>
              <h2>{MyList.project_name}</h2>
              <p className="paragraph">{MyList.project_description}</p>
            </div>
            <Slider {...settings}>
              <div className="image-slider">
                <img src={MyList.project_image_one} alt="" />
              </div>
              <div className="image-slider">
                <img src={MyList.project_image_two} alt="" />
              </div>
              <div className="image-slider">
                <img src={MyList.project_image_three} alt="" />
              </div>
              <div className="image-slider">
                <img src={MyList.project_image_four} alt="" />
              </div>
            </Slider>
          </Row>
        </Container>
      );
    });

    return <Fragment>{MyView}</Fragment>;
  }
}

export default ProjectsDescription;
