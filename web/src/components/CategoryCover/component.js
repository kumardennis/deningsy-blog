import React, {useEffect, useRef} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './styles.scss';

const LandingBanner = ({title, description, imgSrc}) => {
  const categoryCardRef = useRef(null);
  useEffect(() => {
    categoryCardRef.current.style.background = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${imgSrc}')`;
    categoryCardRef.current.style.backgroundSize = 'cover';
    categoryCardRef.current.style.backgroundPosition = 'center center';
  });

  return (
    <Jumbotron ref={categoryCardRef} className='category-cover'>
      <h1 className='bp3-heading cover-title'>Interior decorations and smart planning</h1>
      <h2>Here you can find posts about how we advice to plan your place's interior</h2>
    </Jumbotron>
  );
};

export default LandingBanner;
