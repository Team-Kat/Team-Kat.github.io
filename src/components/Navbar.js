import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'

const Bar = ({location}) => (
    <Navbar collapseOnSelect style={{width:'100vw'}} bg = 'light' fixed = 'top' expand = 'lg'>
        <Navbar.Brand as={Link} to = '/'><img style = {{width: '50px', height: '50px', borderRadius: '25px'}} src = {`${process.env.PUBLIC_URL}/teamkat.png`} alt = 'teamkat logo' /><span className = 'brandname'>Team Kat</span></Navbar.Brand>
        <Navbar.Toggle aria-controls = 'responsive-navbar-nav' />

        <Navbar.Collapse id = 'responsive-navbar-nav'>
            <Nav className = 'mr-auto'>
                {
                    [{
                        link: '/members',
                        text: 'Members'
                    }, {
                        link: '/recruit',
                        text: 'Recruit'
                    }].map(i => (
                        <Nav.Link as={Link} to = {i.link} active={location.pathname === i.link}>{i.text}</Nav.Link>
                    ))
                }
            </Nav>
            <hr />
            <Nav>
                <Nav.Link  href = 'https://discord.gg/R5UG5mR'>Server</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default withRouter(Bar)
