import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PagesTop/PagesTop'
import AboutDescription from '../components/AboutDescription/AboutDescription'
import Footer from '../components/Footer/Footer'
import RecentProject from '../components/HomeComponents/RecentProject/RecentProject'

export class AboutPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
     <Fragment>
        <TopNavigation title="About Us"/>
        <PageTop pageTitle="About Us"/>
        <AboutDescription/>
        <RecentProject/>
        <Footer/>
        </Fragment>
    )
  }
}

export default AboutPage
