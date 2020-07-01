import React from 'react';

import Layout from 'components/Layout/component';
import Section1 from 'containers/IndexPage/Section1';
import Section2 from 'containers/IndexPage/Section2';
import Section3 from 'containers/IndexPage/Section3';

const IndexPage = (props) => {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
    </Layout>
  );
};

export default IndexPage;
