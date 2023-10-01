import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Features from '../components/HomeComponents/Features/Features'
import Newsletter from '../components/HomeComponents/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import PagesTop from '../components/PagesTop/PagesTop'

export class FeaturesPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
  render() {
    return (
        <Fragment>
            <TopNavigation title="Features" />  
            <PagesTop pageTitle="Features" />
            <Features />
            <Newsletter />
            <Footer />

        </Fragment>
    )
  }
}

export default FeaturesPage
