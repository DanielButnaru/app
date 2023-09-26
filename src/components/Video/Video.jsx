import React, { Component, Fragment } from "react";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "video-react/dist/video-react.css";
import { BigPlayButton, Player, ControlBar } from "video-react";

export class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  modalClose = () => {
    this.setState({ show: false });
  };
  modalShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="bg-light videoBanner py-4">
        <Container className="text-center videoBannerOverlay ">
          <h1 className="headingTitle fixed-center my-5">Our Videos</h1>

          <Row  className="my-3">
            <Col lg={6} md={6} sm={12}>
              <h2 className="headingSubtitle py-5">Lorem Ipsum</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quos voluptates
                voluptatibus voluptatem quod quas doloribus quidem voluptate.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="videoCard">
              <FontAwesomeIcon
                onClick={this.modalShow}
                className="iconBullet"
                icon={faVideoSlash}
              />
              </div>
            </Col>
          </Row>
        </Container>
        </Container>

        <Modal show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player
              playsInline
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" >
              <BigPlayButton position="center" />
              <ControlBar autoHide={false} />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;
