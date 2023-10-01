import React, { Component } from "react";
import { Fragment } from "react";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ProjectPage from "../pages/ProjectPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturesPage from "../pages/FeaturesPage";
import BlogPage from "../pages/BlogPage";

export class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/projects" element={<ProjectPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/features" element={<FeaturesPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route
            exact
            path="/projectdetails/:projectId"
            element={<ProjectDetailPage />}
          />
        </Routes>
      </Fragment>
    );
  }
}

export default AppRouter;
