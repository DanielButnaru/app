import React, { Component, Fragment } from "react";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "video-react/dist/video-react.css";
import { BigPlayButton, Player, ControlBar } from "video-react";
import videThumbnail from "../../assets/images/video-thumbnail.jpg";

export class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      thumbnail: true,
  
    };
  }


  render() {
    return (
      <Fragment>
          <Player
          className="video-player"
      playsInline
      poster={videThumbnail}
      autoPlay={false}

      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
      </Fragment>
    );

  }
}

export default Video;
