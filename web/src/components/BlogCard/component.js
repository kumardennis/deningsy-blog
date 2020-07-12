import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';
import 'moment-timezone';
import './styles.scss';

const BlogCard = ({imgSrc, title, children, slug, category, readTime, publishedAt}) => {
  return (
    <Card className='blog-card'>
      <Card.Img variant='top' src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className='blog-details-2'>
          <Row>
            <Col>
              {category} &#8226;{' '}
              <Moment format='llll' local>
                {publishedAt}
              </Moment>{' '}
              &#8226; {readTime}min read |{' '}
            </Col>
          </Row>
        </div>
        <Card.Text>{children}</Card.Text>
        <AniLink className='link-to-post' bg='#414141' cover direction='right' to={slug}>
          Read the blog >
        </AniLink>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
