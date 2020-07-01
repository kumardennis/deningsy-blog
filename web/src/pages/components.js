import React from 'react';

import LandingBanner from 'components/LandingBanner/component';
import Header from 'components/Header/component';
import Footer from 'components/Footer/component';
import CategoryTiles from 'components/CategoryTiles/component';
import BlogCards from 'components/BlogCards/component';

const ComponentsPage = () => {
  return (
    <div>
      <Header />
      <LandingBanner />
      <CategoryTiles />
      <BlogCards />
      <Footer />
    </div>
  );
};

export default ComponentsPage;
