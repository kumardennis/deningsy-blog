import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import './styles.scss';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' fixed='top'>
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
          <Nav.Item>
            <AniLink hex='#414141' paintDrip direction='right' to='/'>
              Home
            </AniLink>
          </Nav.Item>
          <Nav.Item>
            <AniLink bg='#414141' cover direction='right' to='/interiors/'>
              Interiors
            </AniLink>
          </Nav.Item>
          <Nav.Item>
            <AniLink bg='#414141' cover direction='right' to='/fitness/'>
              Fitness
            </AniLink>
          </Nav.Item>
          <Nav.Item>
            <AniLink bg='#414141' cover direction='right' to='/travel/'>
              Travel
            </AniLink>
          </Nav.Item>

          <Nav.Item>
            <AniLink bg='#414141' cover direction='right' to='/maternity/'>
              Maternity
            </AniLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
