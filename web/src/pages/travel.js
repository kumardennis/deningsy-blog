import React from 'react';
import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/TravelPage/Section1';
import Section2 from 'containers/TravelPage/Section2';

const TravelPage = () => {
  return (
    <Layout>
      <SEO excerpt={'List of travel blogs'} keywords={['travel', 'blogs']} title={'Travel'} />
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default TravelPage;
