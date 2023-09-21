import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PagesTop/PagesTop'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'

export class AboutPage extends Component {
  render() {
    return (
     <Fragment>
        <TopNavigation/>
        <PageTop pageTitle="About Us"/>
        <AboutDescription/>
        <Footer/>
        </Fragment>
    )
  }
}

export default AboutPage
