import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './styles.scss';

const LandingBanner = () => {
  return (
    <Jumbotron>
      <ScrollAnimation
        offset={90}
        animateIn='animate__animated animate__slideInLeft'
        animateOut='animate__animated animate__slideOutLeft'
      >
        <h1 className='bp3-heading landing-title'>Deningsy Blogs</h1>
      </ScrollAnimation>
      <h2>
        Read about interior decorations, smart interior planning, fitness, fashion and more...
      </h2>
    </Jumbotron>
  );
};

export default LandingBanner;
