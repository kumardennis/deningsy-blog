import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Iubenda from 'react-iubenda-policy';
import AboutUs from 'components/AboutUs/component';
import './styles.scss';

const Footer = () => {
  const myPolicy = 73071908;
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Navbar sticky='bottom'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto ml-auto'>
            <Nav.Item>
              <AniLink hex='#333333' paintDrip direction='right' to='/'>
                Home
              </AniLink>
            </Nav.Item>

            <Nav.Item>
              <Iubenda id={myPolicy}>Privacy Policy</Iubenda>
            </Nav.Item>
            <Nav.Item>
              <Iubenda id={myPolicy} type='cookie' styling='nostyle'>
                Cookie Policy
              </Iubenda>
            </Nav.Item>

            <Button variant='outline-light' onClick={() => setModalShow(true)}>
              About us
            </Button>
            <AboutUs show={modalShow} onHide={() => setModalShow(false)} />
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
