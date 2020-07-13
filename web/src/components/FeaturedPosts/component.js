import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import BlockContent from '@sanity/block-content-to-react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import './styles.scss';

const FeaturedPosts = ({query}) => {
  const base = query.allSanityPost.edges;
  return (
    <Container className='carousel-container'>
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
                <h3>
                  <AniLink
                    className='light-ani-link'
                    bg='#414141'
                    cover
                    direction='right'
                    to={
                      post.node.categories[0].title.toLowerCase() +
                      '/' +
                      post.node.slug.current +
                      '/'
                    }
                  >
                    {post.node.title}
                  </AniLink>
                </h3>
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
