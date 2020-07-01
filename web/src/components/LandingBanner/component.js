import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './styles.scss';

const LandingBanner = () => {
  return (
    <Jumbotron>
      <h1 className='bp3-heading landing-title'>Deningsy Blogs</h1>
      <h2>
        Read about interior decorations, smart interior planning, fitness, fashion and more...
      </h2>
    </Jumbotron>
  );
};

export default LandingBanner;
