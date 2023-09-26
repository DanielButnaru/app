import React, { Component } from "react";
import { Fragment } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";
import Loading from "../Loading/Loading";
import WentWrong from "../../components/WentWrong/WentWrong";

export class ContactDescription extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      loading: true,
      error:false,
    };
  }






  sendContact = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let jsonObject = { name:name, email:email, message:message };

    RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(jsonObject)).then(result=>{

      if(result==null){
        this.setState({error:true})
      }else{
     this.setState({
      name:result[0]['name'],
      email:result[0]['email'],
      message:result[0]['message'],
      loading:false

     })
    }
    }).catch(error=>{
      this.setState({error:true})
    })
  }


  render() {
    if(this.state.loading==true){
      return <Loading />
    }else if (this.state.loading==false){
    return (
      <Fragment>
        <Container className="my-5 py-4">
          <Row>
            <Col lg={6} md={6} sm={12} className="pe-5">
              <h1 className="contactTitle">WE'RE READY, LET'S TALK.</h1>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="paragraph">Your Name</Form.Label>
                  <Form.Control id="name" type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="paragraph">Your Email</Form.Label>
                  <Form.Control id="email" type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="paragraph">Your Message</Form.Label>
                  <Form.Control id="message" as="textarea" rows={3} />
                </Form.Group>
                <button onClick={this.sendContact} className="contactButton">Submit</button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12} className="ps-5">
              <h1 className="contactTitle">CONTACT INFO</h1>
              <div className="py-3">
                <h4 className="subHeadingContactTitle mb-3">Address</h4>
                <p className="paragraph">
                  1234 North Avenue Luke Lane, South Bend, IN 360001
                </p>
              </div>
              <div className="py-3">
                <h4 className="subHeadingContactTitle mb-3">Email Us</h4>
                <p className="paragraph">contact@example.com</p>
              </div>
              <div className="py-3">
                <h4 className="subHeadingContactTitle mb-3">Call Us</h4>
                <p className="paragraph">800-454-345</p>
              </div>
              <div className="py-3">
                <h4 className="subHeadingContactTitle mb-3">Follow Us</h4>
                <ul className="socialLink">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faYoutube} />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
    } else if(this.state.error == true){
      return <WentWrong/>
    }
  }
}

export default ContactDescription;
