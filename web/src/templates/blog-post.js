import React from 'react';
import Layout from 'components/Layout/component';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const BlogPost = ({imgSrc, title, content, date, author, socialLinks}) => {
  return (
    <Layout>
      <Button className='custom-btn' onClick={() => window.history.back()}>
        Back to the list
      </Button>
      <Container className='blog-post-container'>
        <Image src={imgSrc} fluid />
        <h2 className='title'>{title}</h2>
        <div className='content'>{content}</div>
      </Container>
    </Layout>
  );
};

export default BlogPost;
