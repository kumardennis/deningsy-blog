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
      >
        <script
          data-ad-client='ca-pub-3900934487984615'
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        />
      </SEO>
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default FitnessPage;
