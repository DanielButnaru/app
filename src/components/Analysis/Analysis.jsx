import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Technology: "Java", Projects: 100 },
        { Technology: "Python", Projects: 80 },
        { Technology: "Londra", Projects: 70 },
        { Technology: "Javascript", Projects: 60 },
        { Technology: "C#", Projects: 50 },
        { Technology: "C++", Projects: 40 },
        { Technology: "C", Projects: 30 },
      ],
    };
  }

  render() {
    var blue = "#fb2056";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">The most sought after trips</h1>
          <div className="bottom"></div>
          <Row>
            <Col style={{ width: "100%", height: "300px" }} lg={6} md={12} sm={12} >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Technology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill={blue} />
                </BarChart>
             </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <h1>Text</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatum, quibusdam, quia, quos voluptates voluptatibus
                voluptatem quod quas doloribus quidem voluptate. Quisquam
                voluptatum, quibusdam, quia, quos voluptates voluptatibus
                voluptatem quod quas doloribus quidem voluptate.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
