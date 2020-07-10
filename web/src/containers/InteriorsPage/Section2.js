import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import BlogList from 'components/BlogList/component';

const Section2 = ({data}) => {
  return (
    <section>
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
            sort: {fields: publishedAt, order: ASC}
            filter: {categories: {elemMatch: {title: {eq: "Interiors"}}}}
          ) {
            edges {
              node {
                title
                mainImage {
                  asset {
                    fluid(maxWidth: 1600) {
                      src
                    }
                  }
                  caption
                }
                authors {
                  author {
                    name
                  }
                }
                _rawExcerpt(resolveReferences: {maxDepth: 10})
                _rawBody(resolveReferences: {maxDepth: 10})
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
