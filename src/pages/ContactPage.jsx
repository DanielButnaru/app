import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import { PageItem } from "react-bootstrap";
import PagesTop from "../components/PagesTop/PagesTop";
import ContactDescription from "../components/ContactDescription/ContactDescription";
import Footer from "../components/Footer/Footer";

export class ContactPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title= "Contact Us"/>
        <PagesTop pageTitle="Contact Us" />
        <ContactDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactPage;
