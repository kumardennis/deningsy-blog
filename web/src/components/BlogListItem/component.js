import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Moment from 'react-moment';
import 'moment-timezone';
import './styles.scss';

const BlogListItem = ({imgSrc, title, children, slug, categories, readTime, publishedAt}) => {
  console.log(title, publishedAt);
  return (
    <div>
      <Row className='blog-list-item'>
        <Col lg>
          <Image src={imgSrc} thumbnail />
        </Col>
        <Col md={8} className='blog-list-col'>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className='blog-details-small'>
              <Row>
                <Col>
                  {categories.map((category) => {
                    return <span>{category.title} &#8226; </span>;
                  })}{' '}
                  <Moment format='llll' local>
                    {publishedAt}
                  </Moment>{' '}
                  &#8226; {readTime}min read
                </Col>
              </Row>
            </div>
            <Card.Text>{children}</Card.Text>
          </Card.Body>
          <Card.Body className='blog-list-btn-container'>
            <AniLink className='link-to-post' bg='#333333' cover direction='right' to={slug}>
              Read the blog >
            </AniLink>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
};

export default BlogListItem;
