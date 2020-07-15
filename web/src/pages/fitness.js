import React from 'react';
import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/FitnessPage/Section1';
import Section2 from 'containers/FitnessPage/Section2';

const FitnessPage = () => {
  return (
    <Layout>
      <SEO
        excerpt={'List of fitness blogs'}
        keywords={['fitness', 'blogs', 'health']}
        title={'Fitness'}
      />
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default FitnessPage;
