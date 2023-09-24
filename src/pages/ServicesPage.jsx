import React, { Component } from "react";
import { Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PagesTop/PagesTop";
import ServicesDescription from "../components/ServicesDescription/ServicesDescription";
import Footer from "../components/Footer/Footer";

export class ServicesPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Services" />
        <PageTop pageTitle="Services" />
        <ServicesDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default ServicesPage;
