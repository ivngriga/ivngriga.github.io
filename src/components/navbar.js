import React, {useState} from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import { Search } from 'react-bootstrap-icons';

import logo from '../img/img_logo.png';
import hamb from '../img/img_hamburger.png';
import hamb_close from '../img/img_hamburger_close.png';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../scss/navbar.scss';

export function Navmenu(){
    const [navOpen, setNavOpen]=useState(false)

    return(
        <Navbar bg="white" variant="white" expand="md" className="navbar-main">
            <Navbar.Brand className="brand-title" href="/"><img style={{width:'100%'}} src={logo}></img></Navbar.Brand>
            <Navbar.Toggle onClick={()=>setNavOpen(!navOpen)} aria-controls="basic-navbar-nav" className='navbar-collapse-toggle'>
                <img style={{width: "100%"}} src={navOpen ? hamb_close : hamb}></img>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto navbar-link-container nav-link-container">
                    <Nav.Link className='navlink-menu-navbar'>About us</Nav.Link>
                    <Nav.Link className='navlink-menu-navbar'>Brands</Nav.Link>
                    <Nav.Link className='navlink-menu-navbar'>Projects</Nav.Link>
                    <Nav.Link className='navlink-menu-navbar'>Magazine</Nav.Link>
                    <Nav.Link className='navlink-menu-navbar'>Press</Nav.Link>
                    <Nav.Link className='navlink-menu-navbar'>Contacts</Nav.Link>
                    
                    <Nav.Item className='navlink-menu-navbar navlink-search'>
                        <Form className="d-flex search-form-container">
                            <Form.Control
                            type="search"
                            className="navbar-search me-2"
                            aria-label="Search"
                            />
                            <Search onClick={()=>{}} className='search-icon-navbar'/>
                        </Form>
                    </Nav.Item>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}