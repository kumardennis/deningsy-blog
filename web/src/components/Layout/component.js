import React from 'react';

import Header from 'components/Header/component';
import Footer from 'components/Footer/component';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
