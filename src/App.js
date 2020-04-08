import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
//
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
//

import Input from './Input';
//
function App() {

  return (
    <Router>
      <Navbar bg="success" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}Assignment 3</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Input">Input</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <p></p>
      <div>          
          <Route render ={()=> < Input />} exact path="/Input" />
      </div>

    </Router>


  );
}
//<Route render ={()=> < App />} path="/" />
export default App;
