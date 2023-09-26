import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PagesTop from "../components/PagesTop/PagesTop";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  return (
    <Fragment>
      <TopNavigation title="Project Details" />
      <PagesTop pageTitle="Project Details" />
      <ProjectDetails id={projectId} />
      <Footer />
    </Fragment>
  );
};


// export class ProjectDetailPage extends Component {


//   componentDidMount() {
//     window.scroll(0, 0);
//   }

//   render() {
//     return (
//       <Fragment>
//         <TopNavigation title="Project Details" />
//         <PagesTop pageTitle="Project Details" />
//         <ProjectDetails id={this.state.ProjectPassedID} />
//         <Footer />
//       </Fragment>
//     );
//   }
// }

export default ProjectDetailPage;
