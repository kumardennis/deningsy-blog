import React, {useEffect, useRef} from 'react';

import Card from 'react-bootstrap/Card';

import './styles.scss';

const CategoryTile = ({title, imgSrc, description}) => {
  const cardRef = useRef(null);
  const mouseEnter = (event) => {
    event.currentTarget.querySelector('p').style.transform = 'scaleY(1)';
  };

  const mouseLeave = (event) => {
    event.currentTarget.querySelector('p').style.transform = 'scaleY(0)';
  };

  useEffect(() => {
    cardRef.current.style.background = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${imgSrc}')`;
    cardRef.current.style.backgroundSize = 'cover';
  });

  return (
    <Card
      ref={cardRef}
      className='cateogry-card'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card>
  );
};

export default CategoryTile;
