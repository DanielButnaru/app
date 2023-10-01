import React, { Component, Fragment } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import whiteLogo from "../../assets/images/logo/logo_white.png";
import blackLogo from "../../assets/images/logo/logo_black.png";
import { Link } from "react-router-dom";

export class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarTitle: "navTitle",
      navBarLogo: [whiteLogo],
      navBarBackground: "navBackground",
      navBarItem: "navItem",
      pageTitle: props.title,
    };
  }
  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBarLogo: [blackLogo],
        navBarBackground: "navBackgroundScroll",
        navBarItem: "navItemScroll",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: "navTitle",
        navBarLogo: [whiteLogo],
        navBarBackground: "navBackground",
        navBarItem: "navItem",
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar
          className={this.state.navBarBackground}
          expand="md"
          collapseOnSelect
          fixed="top"
        >
          <Container>
            <Navbar.Brand className={this.state.navBarTitle} href="#home">
              <img src={this.state.navBarLogo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link>
                  <Link
                    exact
                    activeStyle={{ color: "#fb2056" }}
                    className={this.state.navBarItem}
                    to="/"
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link
                    exact
                    activeStyle={{ color: "#fb2056" }}
                    className={this.state.navBarItem}
                    to="/about"
                  >
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    exact
                    activeStyle={{ color: "#fb2056" }}
                    className={this.state.navBarItem}
                    to="/features"
                  >
                    Features
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    exact
                    activeStyle={{ color: "#fb2056" }}
                    className={this.state.navBarItem}
                    to="/blog"
                  >
                    Blog
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    exact
                    activeStyle={{ color: "#fb2056" }}
                    className={this.state.navBarItem}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
