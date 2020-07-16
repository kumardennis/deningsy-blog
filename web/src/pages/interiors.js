import React from 'react';
import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/InteriorsPage/Section1';
import Section2 from 'containers/InteriorsPage/Section2';

const InteriorsPage = () => {
  return (
    <Layout>
      <SEO
        excerpt={'Here you can find blogs about how we advice to plan your places interior'}
        keywords={['interior', 'blogs', 'interior decoration']}
        title={'Interior'}
      />
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default InteriorsPage;
