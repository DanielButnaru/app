import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export class ImageSlider extends Component {
    render() {

        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            autoplay:true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Fragment>
                <Container fluid={true} style={{padding:"0"}}>
                    <Slider {...settings}>
                        <div className='imageSliderContainer'>
                            <div className='slider-content '>
                                <p className='paragraph-big'>- I want to discover -</p>
                                <h2 className='slider-title'>India</h2>
                                <a href="#" className='btn '>Discover Now</a>
                            </div>
                            <div className='slider-image-wrap'>
                                <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/638f90c6b0904e701f21c80e_pexels-taryn-elliott-4253829-p-1600.webp" alt="" />
                            </div>
                        </div>
                        <div className='imageSliderContainer'>
                            <div className='slider-content '>
                                <p className='paragraph-big'>- I want to discover -</p>
                                <h2 className='slider-title'>Africa</h2>
                                <a href="#" className='btn '>Discover Now</a>
                            </div>
                            <div className='slider-image-wrap'>
                                <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/63f36badc050070155a001f4_pexels-eberhard-grossgasteiger-1670187-p-1080.webp" alt="" />
                            </div>
                        </div>
                        <div className='imageSliderContainer'>
                            <div className='slider-content '>
                                <p className='paragraph-big'>- I want to discover -</p>
                                <h2 className='slider-title'>Indonesia</h2>
                                <a href="#" className='btn '>Discover Now</a>
                            </div>
                            <div className='slider-image-wrap'>
                                <img src="https://uploads-ssl.webflow.com/63581d2d6f71d40059fbd76b/63f36badc050070155a001f4_pexels-eberhard-grossgasteiger-1670187-p-1080.webp" alt="" />
                            </div>
                        </div>


                    </Slider>
                </Container>

            </Fragment>
        )
    }
}

export default ImageSlider