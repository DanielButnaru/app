import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import waterSport1 from "../../assets/images/project/water-sports-01.jpg";
import waterSport2 from "../../assets/images/project/water-sports-02.jpg";
import waterSport3 from "../../assets/images/project/water-sports-03.jpg";
import waterSport4 from "../../assets/images/project/water-sports-04.jpg";
import winterSport1 from "../../assets/images/project/winter-sports-01.jpg";
import winterSport2 from "../../assets/images/project/winter-sports-02.jpg";
import winterSport3 from "../../assets/images/project/winter-sports-03.jpg";
import winterSport4 from "../../assets/images/project/winter-sports-04.jpg";
import camp1 from "../../assets/images/project/camp-1.jpg";
import camp2 from "../../assets/images/project/camp-2.jpg";
import camp3 from "../../assets/images/project/camp-3.jpg";
import camp4 from "../../assets/images/project/camp-4.jpg";

export class ProjectsDescription extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <Fragment>
        <Container className="py-5 mb-5">
          <Row>
            <div className="section-title">
                <h4 className="pb-4">Adventure</h4>
                <h2>Water Sports</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, dolorum.</p>
            </div>
            <Slider {...settings}>
              <div className="image-slider">
                <img src={waterSport1} alt="" />
              </div>
              <div className="image-slider">
                <img src={waterSport2} alt="" />
              </div>
              <div className="image-slider">
                <img src={waterSport3} alt="" />
              </div>
              <div className="image-slider">
                <img src={waterSport4} alt="" />
              </div>
            </Slider>
          </Row>
        </Container>
        <Container fluid={true} className="bg-light mb-5">
          <Container className="py-5">
            <Row>
            <div className="section-title">
                <h4 className="pb-4">Snow Adventure</h4>
                <h2>Winter Sports</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, dolorum.</p>
            </div>
          <Slider {...settings}>
              <div className="image-slider">
                <img src={winterSport1} alt="" />
              </div>
              <div className="image-slider">
                <img src={winterSport2} alt="" />
              </div>
              <div className="image-slider">
                <img src={winterSport3} alt="" />
              </div>
              <div className="image-slider">
                <img src={winterSport4} alt="" />
              </div>
            </Slider>
            </Row>
          </Container>
        </Container>
        <Container className="py-5 mb-5">
            <Row>
            <div className="section-title">
                <h4 className="pb-4">Forest Tour</h4>
                <h2>Camping</h2>
                <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, dolorum.</p>
            </div>
          <Slider {...settings}>
              <div className="image-slider">
                <img src={camp1} alt="" />
              </div>
              <div className="image-slider">
                <img src={camp2} alt="" />
              </div>
              <div className="image-slider">
                <img src={camp3} alt="" />
              </div>
              <div className="image-slider">
                <img src={camp4} alt="" />
              </div>
            </Slider>
            </Row>
          </Container>
      </Fragment>
    );
  }
}

export default ProjectsDescription;
