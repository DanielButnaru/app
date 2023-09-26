import React, { Component, Fragment } from "react";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import { Col, Container, Row } from "react-bootstrap";

export class ProjectDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      MyProjectId: props.id,
      project_name: "...",
      project_description: "...",
      project_category: "...",
      project_image_one: "...",
      project_image_two: "...",
      project_image_three: "...",
      project_image_four: "...",
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectDetails + this.state.MyProjectId).then(
      (result) => {
        this.setState({
          project_name: result[0]["project_name"],
          project_description: result[0]["project_description"],
          project_category: result[0]["project_category"],
          project_image_one: result[0]["project_image_one"],
          project_image_two: result[0]["project_image_two"],
          project_image_three: result[0]["project_image_three"],
          project_image_four: result[0]["project_image_four"],
        });
      }
    );
  }
  render() {

    
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <div className="imageContainer">
                <img
                  src={this.state.project_image_one}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </Col>
            <Col lg={8} md={8} sm={12}>
              <div className="projectDetails">
                <h1 className="serviceName">{this.state.project_name}</h1>
                <p className="serviceDescription">
                  {this.state.project_description}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="mt-5">
          <img
            src={this.state.project_image_two}
            alt=""
            width="100%"
            height="100%"
          />
        </Container>
        <Container>
          <Row>
            <Col lg={8} md={8} sm={12}>
              <div className="projectDetails">
                <h1 className="serviceName">{this.state.project_category}</h1>
                <p className="serviceDescription">
                  {this.state.project_description}
                </p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className="imageContainer">
                <img src={this.state.project_image_three} alt="" width="100%" />
              </div>
            </Col>
          </Row>
        </Container>

              
      </Fragment>
    );
  }
}

export default ProjectDetails;
