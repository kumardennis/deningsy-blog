import React from 'react';

import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/IndexPage/Section1';
import Section2 from 'containers/IndexPage/Section2';
import Section3 from 'containers/IndexPage/Section3';
import Section4 from 'containers/IndexPage/Section4';
import Section5 from 'containers/IndexPage/Section5';

const IndexPage = (props) => {
  return (
    <Layout>
      <SEO />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <Section5 />
    </Layout>
  );
};

export default IndexPage;
