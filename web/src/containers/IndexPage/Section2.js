import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import FeaturedPosts from 'components/FeaturedPosts/component';

const Section2 = ({data}) => {
  return (
    <section>
      <FeaturedPosts query={data} />
    </section>
  );
};

export default function Section2Query(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityPost(
            filter: {featuredPost: {eq: true}}
            sort: {fields: publishedAt, order: ASC}
          ) {
            edges {
              node {
                slug {
                  current
                }
                categories {
                  title
                }
                title
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
      render={(data) => <Section2 data={data} {...props} />}
    />
  );
}
