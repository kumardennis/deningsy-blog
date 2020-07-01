import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import './styles.scss';

const BlogListItem = ({imgSrc, title, children, author}) => {
  return (
    <div>
      <Row className='blog-list-item'>
        <Col sm={5}>
          <Image src={imgSrc} thumbnail />
        </Col>
        <Col lg className='blog-list-col'>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{children}</Card.Text>
            <Card.Text>-By {author}</Card.Text>
          </Card.Body>
          <div className='blog-list-btn-container'>
            <Button className='custom-btn '>Read the blog</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogListItem;
