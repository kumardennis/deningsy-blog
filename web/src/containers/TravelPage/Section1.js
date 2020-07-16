import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import CategoryCover from 'components/CategoryCover/component';

const Section1 = ({data}) => {
  return (
    <section className='section'>
      <CategoryCover
        title='Travel'
        description={data.allSanityCategory.edges[0].node.description}
        imgSrc='../../images/interior-light.jpg'
      />
    </section>
  );
};

export default function Section1Query(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityCategory(filter: {title: {eq: "Travel"}}) {
            edges {
              node {
                description
              }
            }
          }
        }
      `}
      render={(data) => <Section1 data={data} {...props} />}
    />
  );
}
