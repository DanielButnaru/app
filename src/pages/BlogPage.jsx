import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PagesTop from '../components/PagesTop/PagesTop'
import RecentProject from '../components/HomeComponents/RecentProject/RecentProject'
import Newsletter from '../components/HomeComponents/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

export class BlogPage extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation/>
            <PagesTop pageTitle="Blog"/>
            <RecentProject/>
            <Newsletter/>
            <Footer/>

        </Fragment>
    )
  }
}

export default BlogPage
