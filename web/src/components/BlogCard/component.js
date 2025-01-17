import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';
import 'moment-timezone';
import './styles.scss';

const BlogCard = ({imgSrc, title, children, slug, categories, readTime, publishedAt}) => {
  return (
    <Card className='blog-card'>
      <Card.Img variant='top' src={imgSrc} />
      <Card.Body className='blog-card-body'>
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
        <AniLink className='link-to-post' bg='#333333' cover direction='right' to={slug}>
          Read the blog >
        </AniLink>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
