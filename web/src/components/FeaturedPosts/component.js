import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import BlockContent from '@sanity/block-content-to-react';
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
                <h3>{post.node.title}</h3>
                <BlockContent blocks={post.node._rawExcerpt} />
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default FeaturedPosts;
