import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BackpackingTrips from "../../assets/images/services/outdoor-image-03.jpg";
import FamilyHikingTrips from "../../assets/images/services/services-2.jpg";
import WaterSports from "../../assets/images/services/services-3.jpg";
import WinterSports from "../../assets/images/services/outdoor-image-01.jpg";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export class ServicesDescription extends Component {

  constructor() {
    super();
    this.state = {
      myData: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ServicesAll).then((result) => {
      this.setState({ myData: result });
    });
  }
  

  render() {

    const MyList = this.state.myData;
    const MyView = MyList.map((MyList) => {
      return(

        <Col lg={6} md={12} sm={12} className="pt-3">
        <div className="serviceCard text-center">
          <img src={MyList.service_logo} alt="" className="serviceImg" />
          <h2 className="serviceName mt-5 ">{MyList.service_name}</h2>
          <p className="paragraph mt-4 ">
            {MyList.service_description}
          </p>
        </div>
      </Col>
      )
    })
  



    return (
      <Fragment>
        <Container className="py-5">
          <h1 className="headingTitle fixed-center">
            It's Time to Start Your Adventures
          </h1>
          <div className="borderBottom "></div>
          <p className="paragraph text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptatum, quibusdam, quos, voluptate voluptas quia exercitationem
            quae voluptatibus quod doloribus quas necessitatibus. Quisquam,
            voluptates.
          </p>

          <Row className="my-5">
            {MyView}
          
          </Row>
          {/* <Row className="my-5">
            <Col lg={6} md={12} sm={12} className="pt-3">
              <div className="serviceCard text-center">
                <img src={WaterSports} alt="" className="serviceImg" />
                <h2 className="serviceName mt-5 ">Water Sports</h2>
                <p className="paragraph mt-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus quod doloribus quas
                  necessitatibus. Quisquam, voluptates.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="pt-3">
              <div className="serviceCard text-center">
                <img src={WinterSports} alt="" className="serviceImg" />
                <h2 className="serviceName mt-5"> Winter Sports</h2>
                <p className="paragraph mt-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus quod doloribus quas
                  necessitatibus. Quisquam, voluptates.
                </p>
              </div>
            </Col>
          </Row> */}
        </Container>
        <Container fluid={true} className="bg-light py-5">
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12} className="pt-5 text-center">
                <h4 className="subHeadingTitle py-4 fixed-center">Why Outdoor Adventure</h4>
                <p className="paragraph ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus.
                </p>
                <p className="paragraph justify-content-center">
                  <FontAwesomeIcon icon={faMinus} className="iconBullet" />
                  Experience: Locavit liberioris possedit
                </p>
                <p className="paragraph justify-content-center ">
                  <FontAwesomeIcon icon={faMinus} className="iconBullet" />
                  Experience: Locavit liberioris possedit
                </p>
                <p className="paragraph justify-content-center">
                  <FontAwesomeIcon icon={faMinus} className="iconBullet" />
                  Experience: Locavit liberioris possedit
                </p>
              </Col>
              <Col lg={6} md={12} sm={12} className="pt-5 text-center">
                <h4 className="subHeadingTitle py-4 fixed-center">What You Get</h4>
                <p className="paragraph ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quos, voluptate voluptas quia
                  exercitationem quae voluptatibus.
                </p>
                <p className="paragraph justify-content-center ">
                  <FontAwesomeIcon icon={faMinus} className="iconBullet" />
                  Experience: Locavit liberioris possedit
                </p>
                <p className="paragraph justify-content-center">
                  <FontAwesomeIcon icon={faMinus} className="iconBullet" />
                  Experience: Locavit liberioris possedit
                </p>
                <p className="paragraph justify-content-center">
                  <FontAwesomeIcon icon={faMinus} className="iconBullet" />
                  Experience: Locavit liberioris possedit
                </p>
              </Col>
            </Row>
            </Container>
          </Container>
      </Fragment>
    );
  }
}

export default ServicesDescription;
