import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { RiAppsFill } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import {
  FaCalculator,
  FaCloudSun,
  FaListUl,
  FaSmile,
  FaClock,
  FaMemory,
} from "react-icons/fa";

const NavBar = () => {
  
 
 

  return (
    <>
      <Navbar
       
        expand="lg"
 
      >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="home-link-navbar" as={Link} to="/">
              <FiHome />
            </Nav.Link>
            <NavDropdown
              title={<RiAppsFill />}
              id="basic-nav-dropdown"
              className="dropdown-menu-left"
            >
              <NavDropdown.Item className="navdropdown-item slide-left">
                <Link to="/calculator-app">
                  <FaCalculator />
                  &nbsp;&nbsp;&nbsp;
                  <span>Calculator App</span>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown-item slide-left">
                <Link to="/weather-app">
                  <FaCloudSun />
                  &nbsp;&nbsp;&nbsp;
                  <span>Weather App</span>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown-item slide-left">
                <Link to="/todolist-app">
                  <FaListUl />
                  &nbsp;&nbsp;&nbsp;
                  <span>Todo List App</span>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown-item slide-left">
                <Link to="/quiz-app">
                  <FaSmile />
                  &nbsp;&nbsp;&nbsp;
                  <span>Personality Quiz App</span>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown-item slide-left">
                <Link to="/pomodoro-app">
                  <FaClock />
                  &nbsp;&nbsp;&nbsp;
                  <span>Pomodoro Timer App</span>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown-item slide-left">
                <Link to="/memorycard-app">
                  <FaMemory />
                  &nbsp;&nbsp;&nbsp;
                  <span>Memory Card App</span>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* )} */}
    </>
  );
};

export default NavBar;
