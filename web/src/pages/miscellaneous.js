import React from 'react';
import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/MiscellaneousPage/Section1';
import Section2 from 'containers/MiscellaneousPage/Section2';

const MiscellaneousPage = () => {
  return (
    <Layout>
      <SEO
        excerpt={'Here you can find blogs about miscellaneous everyday stuff'}
        keywords={['maternity', 'pregnant', 'baby', 'blogs', 'fashion']}
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

export default MiscellaneousPage;
