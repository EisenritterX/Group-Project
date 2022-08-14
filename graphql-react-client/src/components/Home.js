import React,{Component} from "react"
//
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes,
  Outlet
} from "react-router-dom";
//
// This app requires react-bootstrap and bootstrap installed: 
//  npm install react-bootstrap bootstrap
//
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// ADD COMPONENTS HERE

function Home(props){
    return(
    <div>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="/">COMP308 Group Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link as ={Link} to="/patientSignUp">Patient Sign Up</Nav.Link>
                <Nav.Link as ={Link} to="/patientLogin">Patient Login</Nav.Link>
                <Nav.Link as ={Link} to="/nurseSignUp">Nurse Sign Up</Nav.Link>
                <Nav.Link as ={Link} to="/nurseLogin">Nurse Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet/>
    </div>
    );
}

export default Home;