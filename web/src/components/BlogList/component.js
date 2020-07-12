import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import BlogListItem from 'components/BlogListItem/component';
import Container from 'react-bootstrap/Container';
import BlockContent from '@sanity/block-content-to-react';

import './styles.scss';

const BlogList = ({query}) => {
  const posts = query.allSanityPost.edges;
  return (
    <Container className='blog-list-container'>
      <CardDeck className='blog-list'>
        {posts.map((post, id) => {
          return (
            <BlogListItem
              title={post.node.title}
              imgSrc={post.node.mainImage.asset.fluid.src}
              slug={
                post.node.categories[0].title.toLowerCase() + '/' + post.node.slug.current + '/'
              }
            >
              <BlockContent blocks={post.node._rawExcerpt} />
            </BlogListItem>
          );
        })}
      </CardDeck>
    </Container>
  );
};

export default BlogList;
