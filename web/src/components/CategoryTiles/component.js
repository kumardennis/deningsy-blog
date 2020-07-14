import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryTile from 'components/CategoryTile/component';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './styles.scss';

const CategoryTiles = () => {
  return (
    <Container>
      <ScrollAnimation offset={150} animateIn='animate__animated animate__fadeInUp' animateOnce>
        <h3 className='topic'>Explore categories</h3>
      </ScrollAnimation>
      <Row>
        <ScrollAnimation
          offset={150}
          delay={0}
          animateIn='animate__animated animate__fadeInUp'
          animateOnce
        >
          <Col lg>
            <CategoryTile
              title='Interior decorations and smart planning'
              description='Here you can find posts about how we advice to plan your places interior'
              imgSrc={'../../images/interior-light.jpg'}
              to='/interiors/'
            />
          </Col>
        </ScrollAnimation>
        <ScrollAnimation
          offset={150}
          delay={200}
          animateIn='animate__animated animate__fadeInUp'
          animateOnce
        >
          <Col lg>
            <CategoryTile
              title='Fitness'
              description='Here you can find posts about how we advice to plan your workouts indoors/outdoors/at-home'
              imgSrc={'../../images/fitness-dark.jpg'}
              to='/fitness/'
            />
          </Col>
        </ScrollAnimation>
      </Row>
      <Row>
        <ScrollAnimation
          offset={150}
          delay={400}
          animateIn='animate__animated animate__fadeInUp'
          animateOnce
        >
          <Col lg>
            <CategoryTile
              title='Travel'
              description='Here you can find posts about how we advice to travel with your child and our experience'
              imgSrc={'../../images/interior-light.jpg'}
              to='/travel/'
            />
          </Col>
        </ScrollAnimation>
        <ScrollAnimation
          offset={150}
          delay={600}
          animateIn='animate__animated animate__fadeInUp'
          animateOnce
        >
          <Col lg>
            <CategoryTile
              title='Maternity'
              description='Here you can find posts about how we advice to deal efficiently while having a child or during preganancy'
              imgSrc={'../../images/interior-light.jpg'}
              to='/maternity/'
            />
          </Col>
        </ScrollAnimation>
      </Row>
    </Container>
  );
};

export default CategoryTiles;
