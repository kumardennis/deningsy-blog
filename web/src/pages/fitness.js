import React from 'react';
import Layout from 'components/Layout/component';
import Section1 from 'containers/FitnessPage/Section1';
import Section2 from 'containers/FitnessPage/Section2';

const FitnessPage = () => {
  return (
    <Layout>
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default FitnessPage;
