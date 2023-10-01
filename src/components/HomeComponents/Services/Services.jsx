import React, { Component, Fragment } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Maps from "../../../assets/maps.svg"
import Exercise from "../../../assets/exercise.svg"
import Visibility from "../../../assets/visibility.svg"
import Image_1 from "../../../assets/images/hero/image-1.jpg"
import Image_2 from "../../../assets/images/hero/snow-1.jpg"
import Image_3 from "../../../assets/images/hero/walking-v1.jpg"

import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";


const customAnimation1 = keyframes`
  from {

    transform: translate3d(0, 0, 0);
  }

 to{
  will-change: transform;
    transform: translate3d(-100%, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-4.75092deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
 }
`;


const CustomAnimation2 = keyframes`
 from{

   transform: translate3d(0,0,0)
 }
 to{
  will-change: transform;
  transform: translate3d(100%, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(9deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
 }

`

function CustomAnimation({ children, animation }) {
  return <Reveal keyframes={animation}>{children}</Reveal>;
}

export class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }



  render() {

    return (
      <div>
        <Fragment>
          <Container className="servicesHomeContainer">
            <div className="heading text-center">
              <p className="heading-paragraph"> How it started?</p>
              <h1 className="heading-title">Our serices</h1>

            </div>

            <Row>
              <Col>
                <div className="servicesImagesContainer justify-content-center">
                  <CustomAnimation animation={customAnimation1}> <img className="servicesImage animated-image-left" src={Image_1}></img></CustomAnimation>
                  <img className="servicesImage  animated-image-center" src={Image_2}></img>
                  <CustomAnimation animation={CustomAnimation2}> <img className="servicesImage animated-image-right " src={Image_3}></img></CustomAnimation>

                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center my-3">



              <Col>
                <div className="servicesCard text-center">
                  <img src={Maps} alt="logo" className="servicesLogo" />
                  <h3 className="servicesCardTitle">Impressive
                    adventures</h3>
                  <p className="paragraph-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
              </Col>
              <Col>
                <div className="servicesCard text-center">
                  <img src={Exercise} alt="logo" className="servicesLogo" style={{ fill: "black" }} />
                  <h3 className="servicesCardTitle">Experience
                    complete rest</h3>
                  <p className="paragraph-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
              </Col>

            </Row>
            <Row className="my-3">
              <Col lg={6} >
                <div className="servicesCard text-center">
                  <img src={Visibility} alt="logo" className="servicesLogo" />
                  <h3 className="servicesCardTitle">Notice the
                    imperceptible</h3>
                  <p className="paragraph-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
              </Col>
              <Col>
                <div className="aboutUsContainer">
                  <h4 className="paragraph-big">You won't find anything other than peace in these places.</h4>
                  <p className="paragraph-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores illo saepe, cupiditate ratione sapiente. Quibusdam ullam dicta assumenda quas repellendus sed ex animi voluptatem impedit quis dolorem, amet ipsa?</p>
                </div>
              </Col>

            </Row>

          </Container>
        </Fragment>
      </div>
    );
  }
}

export default Services;
