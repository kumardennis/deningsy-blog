import React, {useEffect, useRef} from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Card from 'react-bootstrap/Card';

import './styles.scss';

const CategoryTile = ({title, imgSrc, description, to}) => {
  const cardRef = useRef(null);
  const mouseEnter = (event) => {
    event.currentTarget.querySelector('p').style.transform = 'scaleY(1)';
  };

  const mouseLeave = (event) => {
    event.currentTarget.querySelector('p').style.transform = 'scaleY(0)';
  };

  useEffect(() => {
    // cardRef.current.style.background = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${imgSrc}')`;
    // cardRef.current.style.backgroundSize = 'cover';
  });

  return (
    <Card
      ref={cardRef}
      className='cateogry-card'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <Card.Title>
        <AniLink className='light-ani-link' bg='#333333' cover direction='right' to={to}>
          {title}
        </AniLink>
      </Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card>
  );
};

export default CategoryTile;
