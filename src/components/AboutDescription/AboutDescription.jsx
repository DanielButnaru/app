import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class AboutDescription extends Component {
  render() {
    return (
     <Fragment>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h1 className="serviceName">Who I am</h1>
                    <hr/>
                    <p className="serviceDescription">I am a web designer and developer based in Dhaka, Bangladesh. I have a passion for web design and love to create for web and mobile devices.</p>
                    <p className="serviceDescription">I have been working in this field for 4 years, and have loved every minute of it. I specialize in creating beautiful, usable, and professional websites using best practice accessibility and the latest W3C web standards guidelines, resulting in semantic and seo friendly HTML and CSS. All my websites are lovingly hand coded.</p>
                    <p className="serviceDescription">For building websites my weapons of choice are Photoshop and Fireworks for creating layouts, then Coda to produce clean semantic XHTML and CSS. I code to XHTML strict 1. I also use Flash for animations and sometimes full Flash sites. My CMS of choice are Expression Engine and Wordpress. I also use Flash for animations and sometimes full Flash sites. My CMS of choice are Expression Engine and Wordpress.</p>
                    <p className="serviceDescription">I am currently available for freelance work. If you would like to hire me, please <a href="#">contact me</a>.</p>

                    
                    </Col>
                </Row>
        </Container>
     </Fragment>
    )
  }
}

export default AboutDescription
