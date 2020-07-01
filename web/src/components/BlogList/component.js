import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import BlogListItem from 'components/BlogListItem/component';
import Container from 'react-bootstrap/Container';

import './styles.scss';

const BlogList = ({query}) => {
  return (
    <Container className='blog-list-container'>
      <CardDeck className='blog-list'>
        <BlogListItem
          title='Arrange a couch-bed in a single room apartment with ease!'
          imgSrc='../../images/interior2-light.jpg'
          author='Ingrid Kumar'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </BlogListItem>
        <BlogListItem
          title='Arrange a couch-bed in a single room apartment with ease!'
          imgSrc='../../images/interior3- dark.jpg'
          author='Ingrid Kumar'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </BlogListItem>
      </CardDeck>
    </Container>
  );
};

export default BlogList;
