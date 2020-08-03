import React from 'react';
import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/TravelPage/Section1';
import Section2 from 'containers/TravelPage/Section2';

const TravelPage = () => {
  return (
    <Layout>
      <SEO
        excerpt={
          'Here you can find blogs about how we advice to travel with your child and our experience'
        }
        keywords={['travel', 'blogs']}
        title={'Travel'}
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

export default TravelPage;
