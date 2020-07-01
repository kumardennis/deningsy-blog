import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.scss';

const Footer = () => {
  return (
    <div>
      <Navbar sticky='bottom'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>About us</Nav.Link>
            <Nav.Link href='#link'>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          className='ml-auto d-none d-lg-block'
          style={{fontFamily: 'Courgette'}}
          href='#home'
        >
          Deningsy Blogs
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Footer;
