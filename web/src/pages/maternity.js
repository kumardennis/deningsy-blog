import React from 'react';
import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/MaternityPage/Section1';
import Section2 from 'containers/MaternityPage/Section2';

const MaternityPage = () => {
  return (
    <Layout>
      <SEO
        excerpt={'List of maternity blogs'}
        keywords={['maternity', 'pregnant', 'baby', 'blogs']}
        title={'Maternity'}
      />
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default MaternityPage;
