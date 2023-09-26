import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export class Projects extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,


    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectLatest).then((result) => {
      this.setState({ myData: result, loading: false });
    });
  }

  render() {

    if(this.state.loading==true){
      return <Loading />
    }else{



    const MyList = this.state.myData;
    const MyView = MyList.map((MyList) => {
      return (
        <Col lg={6} md={6} sm={12} className="p-4">
          <div className="projectCard text-center">
            <img src={MyList.project_image_one} />
            <h2 className="projectTitle my-4">{MyList.project_name}</h2>
            <p className="projectDescription">{MyList.project_description}</p>
            <Button className="eventsCardButton" variant="primary">
              <Link className="link-style" to={"/projectdetails/" + MyList.id}>
              Learn More <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </Button>
          </div>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="headingTitle my-5 fixed-center">Latest Projects</h1>
          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
    } //end else
  }
}

export default Projects;
