import React from 'react';
import Layout from 'components/Layout/component';
import {graphql} from 'gatsby';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import BlockContent from '@sanity/block-content-to-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FollowAt from 'react-social-media-follow';
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

import './blog-post.scss';

const BlogPost = ({data}) => {
  const base = data.allSanityPost.edges[0].node;

  const links = [
    'https://twitter.com/kumardennis7',
    'https://www.facebook.com/dennis.kumar1',
    'https://www.youtube.com/channel/UC4Q4TfCjSX1sJC-IO86oc2Q',
    'https://www.instagram.com/kumardennis',
  ];

  return (
    <Layout>
      <Container className='blog-post-container'>
        <Image src={base.mainImage.asset.fluid.src} fluid />
        <Container className='content-container'>
          <h2 className='title'>{base.title}</h2>
          <div className='author'>
            <Row>
              <Col xs={1}>
                <Image
                  className='author-image'
                  src={base.authors[0].author.image.asset.fluid.src}
                />
              </Col>
              <Col>
                <Row className='author-row'>
                  <Col>
                    <span>
                      {' '}
                      By <strong>{base.authors[0].author.name}</strong>
                    </span>
                  </Col>
                </Row>
                <Row className='author-row'>
                  <Col>
                    <span>{base.publishedAt}</span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <FollowAt
                  spacing='10px'
                  iconSize='2'
                  hoverColor='#414141'
                  color='#414141'
                  links={links}
                />
              </Col>
            </Row>
          </div>
          <div className='content'>
            <BlockContent blocks={base._rawBody} />
          </div>
          <div className='social-sharing'>
            <span>Want to share it ?</span>
            <div className='social-sharing-icons'>
              <TwitterShareButton url={window.location.href}>
                <TwitterIcon size={30} round />
              </TwitterShareButton>
              <InstapaperShareButton url={window.location.href}>
                <InstapaperIcon size={30} round />
              </InstapaperShareButton>
              <FacebookShareButton url={window.location.href}>
                <FacebookIcon size={30} round />
              </FacebookShareButton>
              <EmailShareButton url={window.location.href}>
                <EmailIcon size={30} round />
              </EmailShareButton>
              <WhatsappShareButton url={window.location.href}>
                <WhatsappIcon size={30} round />
              </WhatsappShareButton>
              <LinkedinShareButton url={window.location.href}>
                <LinkedinIcon size={30} round />
              </LinkedinShareButton>
            </div>
          </div>
        </Container>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    allSanityPost(filter: {slug: {current: {eq: $slug}}}) {
      edges {
        node {
          title
          publishedAt(formatString: "MMMM D, YYYY")
          authors {
            author {
              name
              image {
                asset {
                  fluid {
                    src
                  }
                }
              }
            }
          }
          _rawBody
          mainImage {
            asset {
              fluid(maxWidth: 1920) {
                src
              }
            }
          }
        }
      }
    }
  }
`;
