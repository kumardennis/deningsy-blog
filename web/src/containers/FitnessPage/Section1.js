import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import CategoryCover from 'components/CategoryCover/component';

const Section1 = ({data}) => {
  return (
    <section>
      <CategoryCover
        title='Fitness'
        description={data.allSanityCategory.edges[0].node.description}
        imgSrc='../../images/fitness-dark.jpg'
      />
    </section>
  );
};

export default function Section1Query(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityCategory(filter: {title: {eq: "Fitness"}}) {
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
