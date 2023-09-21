import React, { Component, Fragment } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import whiteLogo from "../../assets/images/logo/logo_white.png";
import blackLogo from "../../assets/images/logo/logo_black.png";

export class TopNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo],
            navBarBackground: "navBackground",
            navBarItem: "navItem",
      
            pageTitle: props.title
        }
    }
    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({ navBarTitle: "navTitleScroll",navBarLogo:[blackLogo], navBarBackground: "navBackgroundScroll", navBarItem: "navItemScroll", })
        }
        else if (window.scrollY < 100) {
            this.setState({  navBarTitle: "navTitle",navBarLogo:[whiteLogo], navBarBackground: "navBackground", navBarItem: "navItem", })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

  render() {
    return (
      <Fragment>
        <Navbar  className={this.state.navBarBackground} expand="md" collapseOnSelect  fixed="top">
          <Container>
            <Navbar.Brand className={this.state.navBarTitle} href="#home">
                <img src={this.state.navBarLogo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link className={this.state.navBarItem} href="#link">Home</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#link">About</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#link">Services</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#link">Courses</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#link">Portfolio</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#link">Contact</Nav.Link>
                </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
