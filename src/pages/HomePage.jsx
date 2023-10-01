import React, { Component, Fragment } from "react";
import { TopBanner } from "../components/TopBanner/TopBanner";
import { Services } from "../components/HomeComponents/Services/Services";

import { TopNavigation } from "../components/TopNavigation/TopNavigation";
import { RecentProject } from "../components/HomeComponents/RecentProject/RecentProject";
import { Footer } from "../components/Footer/Footer";
import {Features} from "../components/HomeComponents/Features/Features"
import {ImageSlider} from "../components/HomeComponents/ImageSlider/ImageSlider";
import {ContactUs} from "../components/HomeComponents/ContactUs/ContactUs";
import {Newsletter} from "../components/HomeComponents/Newsletter/Newsletter";

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
        <Features />
        <ImageSlider/>
        <ContactUs/>
        <Newsletter/>
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;

   // TODO: 1. Termina de stilizat pagina de home


