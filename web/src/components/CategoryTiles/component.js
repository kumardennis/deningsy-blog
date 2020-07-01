import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryTile from 'components/CategoryTile/component';

import './styles.scss';

const CategoryTiles = () => {
  return (
    <Container>
      <h3 className='topic'>Explore categories</h3>
      <Row>
        <Col lg>
          <CategoryTile
            title='Interior decorations and smart planning'
            description='Here you can find posts about how we advice to plan your places interior'
            imgSrc={'../../images/interior-light.jpg'}
          />
        </Col>
        <Col lg>
          <CategoryTile
            title='Fitness'
            description='Here you can find posts about how we advice to plan your workouts indoors/outdoors/at-home'
            imgSrc={'../../images/fitness-dark.jpg'}
          />
        </Col>
      </Row>
      <Row>
        <Col lg>
          <CategoryTile
            title='Travel'
            description='Here you can find posts about how we advice to travel with your child and our experience'
            imgSrc={'../../images/interior-light.jpg'}
          />
        </Col>
        <Col lg>
          <CategoryTile
            title='Pregnancy and Children'
            description='Here you can find posts about how we advice to deal efficiently while having a child or during preganancy'
            imgSrc={'../../images/interior-light.jpg'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryTiles;
