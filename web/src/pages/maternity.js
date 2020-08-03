import React from 'react';
import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/MaternityPage/Section1';
import Section2 from 'containers/MaternityPage/Section2';

const MaternityPage = () => {
  return (
    <Layout>
      <SEO
        excerpt={
          'Here you can find blogs about how we advice to deal efficiently while having a child or during preganancy'
        }
        keywords={['maternity', 'pregnant', 'baby', 'blogs']}
        title={'Maternity'}
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

export default MaternityPage;
