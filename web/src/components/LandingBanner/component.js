import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './styles.scss';

const LandingBanner = () => {
  return (
    <Jumbotron>
      <ScrollAnimation offset={90} animateIn='animate__animated animate__slideInLeft' animateOnce>
        <div className='landing-title-container'>
          <h1 className='bp3-heading landing-title'>Deningsy</h1>
          <span>Blogs</span>
        </div>
      </ScrollAnimation>
      <h2>
        Read about interior decorations, smart interior planning, fitness, maternity and more...
      </h2>
    </Jumbotron>
  );
};

export default LandingBanner;
