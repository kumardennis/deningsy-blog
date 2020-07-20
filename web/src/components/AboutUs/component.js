import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import BlockContent from '@sanity/block-content-to-react';

import './styles.scss';

const AboutUs = ({data, show, onHide}) => {
  const base = data.allSanityAboutUs.edges[0].node;
  return (
    <Modal
      style={{overflowY: 'scroll', maxHeight: '800px'}}
      show={show}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Container>
        <h3 className='topic'>About us!</h3>
        <Container className='about-us'>
          <Image alt={base.image.alt} src={base.image.asset.fluid.src} rounded fluid />
          <br />
          <small>{base.image.caption}</small>
          <br />
          <br />
          <Container style={{paddingBottom: '2rem'}}>
            <BlockContent blocks={base._rawContent} />
          </Container>
        </Container>
      </Container>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default function AboutUsQuery(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSanityAboutUs {
            edges {
              node {
                _rawContent
                image {
                  alt
                  caption
                  asset {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <AboutUs data={data} {...props} />}
    />
  );
}
