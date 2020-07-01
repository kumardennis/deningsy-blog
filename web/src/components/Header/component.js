import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.scss';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' sticky='top'>
      <Navbar.Brand
        className='ml-auto d-none d-lg-block'
        style={{fontFamily: 'Courgette'}}
        href='#home'
      >
        Deningsy Blogs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto ml-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/interiors/'>Interior decorations and smart planning</Nav.Link>
          <Nav.Link href='#link'>Travel</Nav.Link>
          <Nav.Link href='#link'>Fitness</Nav.Link>
          <Nav.Link href='#link'>Preganancy and Children</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
