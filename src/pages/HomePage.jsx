import React, { Component, Fragment } from "react";
import { TopBanner } from "../components/TopBanner/TopBanner";
import { Services } from "../components/Services/Services";
import { TopNavigation } from "../components/TopNavigation/TopNavigation";
import { Analysis } from "../components/Analysis/Analysis";
import { Summary } from "../components/Summary/Summary";
import { RecentProject } from "../components/RecentProject/RecentProject";
import { Projects } from "../components/Projects/Projects";
import { Video } from "../components/Video/Video";
import { ClientReview } from "../components/ClientReview/ClientReview";
import { AboutMe } from "../components/AboutMe/AboutMe";
import { Footer } from "../components/Footer/Footer";

export class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
     
        <TopNavigation title="Home" />
        <TopBanner />
        <Services />
        <RecentProject />
       
        {/* <Analysis /> */}
        <Summary />
        <Projects />
        <Video />
        <ClientReview />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;

   // TODO: 1. Termina de stilizat pagina de home


