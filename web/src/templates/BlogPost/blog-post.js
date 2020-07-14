import React from 'react';
import Layout from 'components/Layout/component';
import EmailListForm from 'components/EmailListForm/component';
import {graphql} from 'gatsby';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import BlockContent from '@sanity/block-content-to-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
import loadable from '@loadable/component';
import Moment from 'react-moment';
import 'moment-timezone';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import './blog-post.scss';

const BlogPost = ({data}) => {
  let currentUrl = '';

  if (typeof window !== 'undefined') {
    currentUrl = window.location.href;
  }

  const FollowAt = loadable(() => import('react-social-media-follow'));

  const base = data.allSanityPost.edges[0].node;

  const links = [
    'https://twitter.com/kumardennis7',
    'https://www.facebook.com/dennis.kumar1',
    'https://www.youtube.com/channel/UC4Q4TfCjSX1sJC-IO86oc2Q',
    'https://www.instagram.com/kumardennis',
  ];

  return (
    <Layout>
      <Row>
        <Col />
        <Col lg={8}>
          <ScrollAnimation offset={90} animateIn='animate__animated animate__fadeInUp' animateOnce>
            <Container className='blog-post-container'>
              <Image src={base.mainImage.asset.fluid.src} fluid />

              <Container className='content-container'>
                <h2 className='title'>{base.title}</h2>
                <div className='blog-details'>
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
                          <span>
                            <Moment format='llll' local>
                              {base.publishedAt}
                            </Moment>
                          </span>
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
                <div className='blog-details-2'>
                  <Row>
                    <Col>
                      {base.categories[0].title} &#8226; {base.readTime}min read
                    </Col>
                  </Row>
                </div>
                <div className='content'>
                  <BlockContent blocks={base._rawBody} />
                </div>
                <div className='social-sharing'>
                  <span className='social-sharing-text'>Want to share it?</span>
                  <div className='social-sharing-icons'>
                    <TwitterShareButton url={currentUrl}>
                      <TwitterIcon size={30} round />
                    </TwitterShareButton>
                    <InstapaperShareButton url={currentUrl}>
                      <InstapaperIcon size={30} round />
                    </InstapaperShareButton>
                    <FacebookShareButton url={currentUrl}>
                      <FacebookIcon size={30} round />
                    </FacebookShareButton>
                    <EmailShareButton url={currentUrl}>
                      <EmailIcon size={30} round />
                    </EmailShareButton>
                    <WhatsappShareButton url={currentUrl}>
                      <WhatsappIcon size={30} round />
                    </WhatsappShareButton>
                    <LinkedinShareButton url={currentUrl}>
                      <LinkedinIcon size={30} round />
                    </LinkedinShareButton>
                  </div>
                </div>
              </Container>
            </Container>
          </ScrollAnimation>
        </Col>
        <Col lg={2}>
          <div className='email-container'>
            <EmailListForm />
          </div>
        </Col>
      </Row>
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
          publishedAt
          categories {
            title
          }
          readTime
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
