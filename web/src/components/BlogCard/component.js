import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './styles.scss';

const BlogCard = ({imgSrc, title, children, slug}) => {
  return (
    <Card className='blog-card'>
      <Card.Img variant='top' src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
        <Button className='custom-btn' variant='primary'>
          Read the blog
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
