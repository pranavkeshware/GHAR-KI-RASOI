import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SessionService from "../service/SessionService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      role: undefined,
      isNavbarCollapsed: true,
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  componentDidMount() {
    const user = SessionService.getCurrentUser();
    const role = SessionService.getRole();

    if (user) {
      this.setState({
        user,
        role,
      });
    }
  }

  handleLogout() {
    SessionService.logout();
    this.setState({
      user: undefined,
      role: undefined,
    });
    window.location.href = "/";
  }

  toggleNavbar() {
    this.setState((prevState) => ({
      isNavbarCollapsed: !prevState.isNavbarCollapsed,
    }));
  }

  handleMouseLeave() {
    this.setState({
      isNavbarCollapsed: true,
    });
  }

  render() {
    const { user, role, isNavbarCollapsed } = this.state;

    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          {/* Left: Logo, Home, About Us */}
          <NavLink to="/" className="navbar-brand">
            <img
              src="GKR image logo.jpg"
              alt="logo"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isNavbarCollapsed ? "" : "show"
            }`}
            id="navbarSupportedContent"
            onMouseLeave={this.handleMouseLeave}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <FontAwesomeIcon icon={faHome} /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutUs" className="nav-link">
                  About Us
                </NavLink>
              </li>
            </ul>

            {/* Center: Ghar Ki Rasoi */}
            <span className="navbar-text mx-auto text-center font-weight-bold">
              Ghar Ki Rasoi
            </span>

            {/* Right: Login & Signup or Go back & Logout */}
            <ul className="navbar-nav ml-auto">
              {!user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link btn btn-success mx-1"
                    >
                      <FontAwesomeIcon icon={faSignInAlt} /> Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/signup"
                      className="nav-link btn btn-primary mx-1"
                    >
                      <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/user" className="nav-link btn btn-info mx-1">
                      {role === "admin" && "Admin Panel"}
                      {role === "customer" && "Customer Panel"}
                      {role === "homeMaker" && "Homemaker Panel"}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-danger mx-1"
                      onClick={this.handleLogout}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>

        {/* Wrapper for page content */}
        <div className="content-wrapper" style={{ paddingTop: "56px" }}></div>
      </>
    );
  }
}

export default Header;
