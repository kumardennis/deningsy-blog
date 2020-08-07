import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import BlogList from 'components/BlogList/component';

const Section2 = ({data}) => {
  return (
    <section className='section'>
      <BlogList query={data} />
    </section>
  );
};

export default function Section2Query(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityPost(
            sort: {fields: publishedAt, order: DESC}
            filter: {categories: {elemMatch: {title: {eq: "Miscellaneous"}}}}
          ) {
            edges {
              node {
                title
                publishedAt
                readTime
                mainImage {
                  asset {
                    fluid(maxHeight: 550) {
                      src
                    }
                  }
                  caption
                }

                _rawExcerpt(resolveReferences: {maxDepth: 10})
                slug {
                  current
                }
                categories {
                  title
                }
              }
            }
          }
        }
      `}
      render={(data) => <Section2 data={data} {...props} />}
    />
  );
}
