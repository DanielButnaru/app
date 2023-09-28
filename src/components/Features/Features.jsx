import React, { Component, Fragment } from 'react'
import {Container, Row, Col } from 'react-bootstrap'

export class Features extends Component {
    render() {
        return (
            <Fragment>
                <Container className="featuresSection">
                    <Container>
                        <div className='heading text-center'>
                            <p className="heading-paragraph">SAMPLE DIRECTIONS</p>
                            <h1 className="heading-title">Discover the most impressive adventures..</h1>
                            <p className='paragraph-small'>This quam quae perferendis harum amet dolorum possimus minus.</p>

                        </div>
                        <div className='separator-line'></div>
                        <Row className='hero-features' >
                            <Col lg={6} md={6}>
                                <div className='hero-feature-heading'>
                                    <h4 className='heading-title'>
                                        We Got To Know This Culture
                                    </h4>
                                    <p className='paragraph-small'>
                                        Fugiat quasi officia nihil aut. Velit at eveniet sint at et. Autem cum officiis reiciendis est corrupti sunt corrupti omnis consequatur. Sunt alias enim. Repudiandae sequi nihil quam non suscipit eligendi repudiandae nostrum.
                                    </p>
                                    <a href="#" className='btn'>Read More</a>
                                </div>

                            </Col>
                            <Col lg={6} md={6}>
                                <div className='hero-feature-image'>
                                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/6380b3466760ce8390bf442f_pexels-cottonbro-studio-9540945-p-800.webp"></img>
                                </div>
                            </Col>
                        </Row>
                        <div className='separator-line'></div>
                        <Row className='hero-features' >
                            <Col lg={6} md={6}>
                                <div className='hero-feature-heading'>
                                    <h4 className='heading-title'>
                                    Meet The Animals Of This Region
                                    </h4>
                                    <p className='paragraph-small'>
                                        Fugiat quasi officia nihil aut. Velit at eveniet sint at et. Autem cum officiis reiciendis est corrupti sunt corrupti omnis consequatur. Sunt alias enim. Repudiandae sequi nihil quam non suscipit eligendi repudiandae nostrum.
                                    </p>
                                    <a href="#" className='btn'>Read More</a>
                                </div>

                            </Col>
                            <Col lg={6} md={6}>
                                <div className='hero-feature-image'>
                                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/63d9059b9e8bf4262a774f1c_Meet%20The%20Animals%20Of%20This%20Region_small-p-800.webp"></img>
                                </div>
                            </Col>
                        </Row>
                        <div className='separator-line'></div>
                        <Row className='hero-features' >
                            <Col lg={6} md={6}>
                                <div className='hero-feature-heading'>
                                    <h4 className='heading-title'>
                                    Great Views Of The Nearby Desert
                                    </h4>
                                    <p className='paragraph-small'>
                                        Fugiat quasi officia nihil aut. Velit at eveniet sint at et. Autem cum officiis reiciendis est corrupti sunt corrupti omnis consequatur. Sunt alias enim. Repudiandae sequi nihil quam non suscipit eligendi repudiandae nostrum.
                                    </p>
                                    <a href="#" className='btn'>Read More</a>
                                </div>

                            </Col>
                            <Col lg={6} md={6}>
                                <div className='hero-feature-image'>
                                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/63d906145fb7633ad2e8fc49_Great%20Views%20Of%20The%20Nearby%20Desert_small-p-800.webp"></img>
                                </div>
                            </Col>
                        </Row>
                        <div className='separator-line'></div>
                        <Row className='hero-features' >
                            <Col lg={6} md={6}>
                                <div className='hero-feature-heading'>
                                    <h4 className='heading-title'>
                                        We Got To Know This Culture
                                    </h4>
                                    <p className='paragraph-small'>
                                        Fugiat quasi officia nihil aut. Velit at eveniet sint at et. Autem cum officiis reiciendis est corrupti sunt corrupti omnis consequatur. Sunt alias enim. Repudiandae sequi nihil quam non suscipit eligendi repudiandae nostrum.
                                    </p>
                                    <a href="#" className='btn'>Read More</a>
                                </div>

                            </Col>
                            <Col lg={6} md={6}>
                                <div className='hero-feature-image'>
                                    <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/6380b3466760ce8390bf442f_pexels-cottonbro-studio-9540945-p-800.webp"></img>
                                </div>
                            </Col>
                        </Row>
                        <div className='bottom-buttons text-center'>
                            <a href="#" className='btn'>View All</a>
                        </div>
                    </Container>

                </Container>
            </Fragment>
        )
    }
}

export default Features