import React from 'react';
import Container from 'react-bootstrap/Container';
import BlogCard from 'components/BlogCard/component';
import CardColumns from 'react-bootstrap/CardColumns';
import BlockContent from '@sanity/block-content-to-react';

const BlogCards = ({query, topic}) => {
  const base = query.allSanityPost.edges;
  return (
    <Container>
      <h3 className='topic'>{topic}</h3>
      <CardColumns>
        {base.map((post, id) => {
          return (
            <BlogCard
              imgSrc={post.node.mainImage.asset.fluid.src}
              title={post.node.title}
              slug={
                post.node.categories[0].title.toLowerCase() + '/' + post.node.slug.current + '/'
              }
              category={post.node.categories[0].title}
              readTime={post.node.readTime}
              publishedAt={post.node.publishedAt}
            >
              <BlockContent blocks={post.node._rawExcerpt} />
            </BlogCard>
          );
        })}
      </CardColumns>
    </Container>
  );
};

export default BlogCards;
