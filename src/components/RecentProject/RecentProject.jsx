import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import walkingHolidays from "../../assets/images/hero/walking-v1.jpg";
import hiking from "../../assets/images/hero/hiking-v1.jpg";
import snow from "../../assets/images/hero/snow-1.jpg";

export class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        <Container className="my-5">
          <h2 className="headingTitle fixed-center">Upcoming Events</h2>
          <Row className="my-5">
            <Col lg={4} md={6} sm={12} className="my-4  p-3">
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
            <Col lg={4} md={6} sm={12}  className="my-4 p-3">
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
            <Col lg={4} md={6} sm={12}  className="my-4  p-3">
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
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RecentProject;
