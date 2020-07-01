import React from 'react';
import Layout from 'components/Layout/component';
import Section1 from 'containers/InteriorPage/Section1';
import Section2 from 'containers/InteriorPage/Section2';

const InteriorPage = () => {
  return (
    <Layout>
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default InteriorPage;
