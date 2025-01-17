import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import BlogCards from 'components/BlogCards/component';

const Section3 = ({data}) => {
  return (
    <section className='section'>
      <BlogCards query={data} topic='Recent blogs' />
    </section>
  );
};

export default function Section3Query(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityPost(sort: {fields: publishedAt, order: DESC}) {
            edges {
              node {
                slug {
                  current
                }
                categories {
                  title
                }
                title
                readTime
                publishedAt
                _rawExcerpt(resolveReferences: {maxDepth: 10})
                mainImage {
                  asset {
                    fluid(maxHeight: 400) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <Section3 data={data} {...props} />}
    />
  );
}
