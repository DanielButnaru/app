import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export class TopBanner extends Component {

    constructor(){
      super();
      this.state = {
        title: "",
        subtitle: "",
      };
    }



  componentDidMount() {
    RestClient.GetRequest(AppUrl.HomeTopTitle).then(result => {
      this.setState({
        title: result[0]['home_title'],
        subtitle: result[0]['home_subtitle']
      }).catch(error => {
        this.setState({
          title: "????",
          subtitle: "????"
        });
      });
    }
    );

 
  }



  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <Container fluid={true} className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                    <h4 className=" topSubTitle ">{this.state.subtitle}</h4>
                    <h1 className="topTitle">{this.state.title}</h1>
                    <Button className="heroButton" variant="primary">More Info</Button>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Fragment>
    );
  }
}
