import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import BlogListItem from 'components/BlogListItem/component';
import Container from 'react-bootstrap/Container';
import BlockContent from '@sanity/block-content-to-react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './styles.scss';

const BlogList = ({query}) => {
  const posts = query.allSanityPost.edges;
  return (
    <Container className='blog-list-container'>
      <CardDeck className='blog-list'>
        {posts.map((post, id) => {
          return (
            <ScrollAnimation
              offset={150}
              delay={id * 150}
              animateIn='animate__animated animate__fadeInUp'
              animateOnce
            >
              <BlogListItem
                title={post.node.title}
                imgSrc={post.node.mainImage.asset.fluid.src}
                slug={
                  post.node.categories[0].title.toLowerCase() + '/' + post.node.slug.current + '/'
                }
                publishedAt={post.node.publishedAt}
                readTime={post.node.readTime}
                category={post.node.categories[0].title}
              >
                <BlockContent blocks={post.node._rawExcerpt} />
              </BlogListItem>
            </ScrollAnimation>
          );
        })}
      </CardDeck>
    </Container>
  );
};

export default BlogList;
