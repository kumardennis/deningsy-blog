import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './styles.scss';

const BlogListItem = ({imgSrc, title, children, slug}) => {
  return (
    <div>
      <Row className='blog-list-item'>
        <Col md={3}>
          <Image src={imgSrc} thumbnail />
        </Col>
        <Col md={9} className='blog-list-col'>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{children}</Card.Text>
          </Card.Body>
          <div className='blog-list-btn-container'>
            <AniLink className='link-to-post' bg='#414141' cover direction='right' to={slug}>
              Read the blog >
            </AniLink>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogListItem;
