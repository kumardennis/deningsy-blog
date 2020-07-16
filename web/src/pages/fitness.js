import React from 'react';
import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/FitnessPage/Section1';
import Section2 from 'containers/FitnessPage/Section2';

const FitnessPage = () => {
  return (
    <Layout>
      <SEO
        excerpt={
          'Here you can find blogs about how we advice to plan your workouts indoors/outdoors/at-home'
        }
        keywords={['fitness', 'blogs', 'health']}
        title={'Fitness'}
      />
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default FitnessPage;
