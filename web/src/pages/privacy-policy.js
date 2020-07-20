import React from 'react';
import Iubenda from 'react-iubenda-policy';
import Layout from 'components/Layout/component';
import SEO from 'components/SEO/component';
import Section1 from 'containers/IndexPage/Section1';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const PrivacyPolicyPage = () => {
  const myPolicy = 73071908;
  return (
    <Layout>
      <SEO />
      <Section1 />
      <Container>
        <Button
          style={{
            backgroundColor: '#333333',
          }}
          variant='dark'
          size='lg'
        >
          <Iubenda styling={'black'} type='privacy' id={myPolicy}>
            Privacy Policy
          </Iubenda>
        </Button>
        <br />
        <br />
        <Button
          style={{
            backgroundColor: '#333333',
          }}
          variant='dark'
          size='lg'
        >
          <Iubenda id={myPolicy} type='cookie' styling='black'>
            Cookie Policy
          </Iubenda>
        </Button>
      </Container>
    </Layout>
  );
};

export default PrivacyPolicyPage;
