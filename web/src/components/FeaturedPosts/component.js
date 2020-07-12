import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import './styles.scss';

const FeaturedPosts = ({query}) => {
  const base = query.allSanityPost.edges;
  return (
    <Container>
      <h3 className='topic'>Featured posts</h3>
      <Carousel>
        {base.map((post, id) => {
          return (
            <Carousel.Item>
              <img
                className='d-block w-100 h-100'
                src={post.node.mainImage.asset.fluid.src}
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default FeaturedPosts;
