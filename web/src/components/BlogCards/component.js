import React from 'react';
import Container from 'react-bootstrap/Container';
import BlogCard from 'components/BlogCard/component';
import CardDeck from 'react-bootstrap/CardColumns';

const BlogCards = ({topic}) => {
  return (
    <Container>
      <h3 className='topic'>{topic}</h3>
      <CardDeck>
        <BlogCard
          imgSrc='../../images/interior2-light.jpg'
          title='How to fit too much stuff in a single room apartement'
        >
          Descrition1
        </BlogCard>
        <BlogCard
          imgSrc='../../images/interior3- dark.jpg'
          title='How to use single room apartement as personal gym'
        >
          Something2
        </BlogCard>
        <BlogCard
          imgSrc='../../images/interior3- dark.jpg'
          title='How to use single room apartement as personal gym'
        >
          Something2
        </BlogCard>
        <BlogCard
          imgSrc='../../images/interior3- dark.jpg'
          title='How to use single room apartement as personal gym'
        >
          Something2
        </BlogCard>
        <BlogCard
          imgSrc='../../images/interior3- dark.jpg'
          title='How to use single room apartement as personal gym'
        >
          Something2
        </BlogCard>
      </CardDeck>
    </Container>
  );
};

export default BlogCards;
