import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PagesTop/PagesTop'
import ProjectsDescription from '../components/ProjectsDescription/ProjectsDescription'
import Footer from '../components/Footer/Footer'

export class ProjectPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
     <Fragment>
        <TopNavigation title="Our Projects"/>
        <PageTop pageTitle="Our Projects"/>
        <ProjectsDescription/>
        <Footer/>
        </Fragment>
    )
  }
}

export default ProjectPage
