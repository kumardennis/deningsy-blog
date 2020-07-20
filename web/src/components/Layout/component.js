import React, {useEffect} from 'react';
import CookieConsent from 'react-cookie-consent';
import Header from 'components/Header/component';
import Footer from 'components/Footer/component';

const Layout = ({children}) => {
  const url = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.dataAdClient = 'ca-pub-3900934487984615';
    document.head.appendChild(script);
  }, [url]);
  return (
    <div>
      <Header />
      <CookieConsent
        location='bottom'
        enableDeclineButton
        buttonText=' Accept'
        cookieName='gatsby-gdpr-google-analytics'
        style={{background: '#333333'}}
        buttonStyle={{backgroundColor: '#F2F2F2', color: '#333'}}
        declineButtonStyle={{backgroundColor: '#F2F2F2', color: '#333'}}
      >
        This website uses cookies...
      </CookieConsent>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
