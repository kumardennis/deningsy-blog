import React from 'react';
import Layout from 'components/Layout/component';
import Section1 from 'containers/InteriorsPage/Section1';
import Section2 from 'containers/InteriorsPage/Section2';

const InteriorsPage = () => {
  return (
    <Layout>
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default InteriorsPage;
