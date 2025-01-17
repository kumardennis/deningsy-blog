import React from 'react';
import Container from 'react-bootstrap/Container';
import BlogCard from 'components/BlogCard/component';
import CardColumns from 'react-bootstrap/CardColumns';
import BlockContent from '@sanity/block-content-to-react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './styles.scss';

const BlogCards = ({query, topic}) => {
  const base = query.allSanityPost.edges;

  return (
    <Container>
      <ScrollAnimation offset={50} animateIn='animate__animated animate__fadeInUp' animateOnce>
        <h3 className='topic'>{topic}</h3>
      </ScrollAnimation>
      <CardColumns>
        {base.map((post, id) => {
          return (
            <ScrollAnimation
              offset={50}
              delay={id * 100}
              animateIn='animate__animated animate__fadeInUp'
              animateOnce
              style={{height: 'fit-content'}}
            >
              <BlogCard
                imgSrc={post.node.mainImage.asset.fluid.src}
                title={post.node.title}
                slug={
                  post.node.categories[0].title.toLowerCase() + '/' + post.node.slug.current + '/'
                }
                categories={post.node.categories}
                readTime={post.node.readTime}
                publishedAt={post.node.publishedAt}
              >
                <BlockContent blocks={post.node._rawExcerpt} />
              </BlogCard>
            </ScrollAnimation>
          );
        })}
      </CardColumns>
    </Container>
  );
};

export default BlogCards;
