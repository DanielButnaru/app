import React, { Component, Fragment } from 'react'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from "../../RestAPI/AppUrl"
import { Container } from 'react-bootstrap';



export class ProjectDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            MyProjectId:props.id,
            project_name:"...",
            project_description:"...",
            project_category:"...",
            project_image_one:"...",
            project_image_two:"...",
            project_image_three:"...",
            project_image_four:"...",



        }
    }

    componentDidMount(){
      RestClient.GetRequest(AppUrl.ProjectDetails).then(result=>{
        this.setState({
          project_name:result[0]['project_name'],
          project_description:result[0]['project_description'],
          project_category:result[0]['project_category'],
          project_image_one:result[0]['project_image_one'],
          project_image_two:result[0]['project_image_two'],
          project_image_three:result[0]['project_image_three'],
          project_image_four:result[0]['project_image_four'],



        })
      })
    }
  render() {
    return (
        <Fragment>
          <Container>
            <h1>{this.state.project_name}</h1>

           </Container>
         

        </Fragment>
    
    )
  }
}

export default ProjectDetails
