import React, {useEffect} from 'react';
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
import 'animate.css/animate.min.css';
import SEO from 'components/SEO/component';

import './blog-post.scss';

const BlogPost = ({data}) => {
  let currentUrl = '';

  if (typeof window !== 'undefined') {
    currentUrl = window.location.href;
  }

  const FollowAt = loadable(() => import('react-social-media-follow'));

  const base = data.allSanityPost.edges[0].node;

  const links = [base.authors[0].author.slug.current];

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '325200228319479',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.0',
      });
    };

    // Load the SDK asynchronously
    (function (d, s, id) {
      var js;
      var fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });

  return (
    <Layout>
      <SEO
        excerpt={base._rawExcerpt[0].children[0].text}
        keywords={base.keywords}
        title={base.title}
      />
      <Row>
        <Col />
        <Col lg={8}>
          <Container className='blog-post-container'>
            <Image alt={base.mainImage.alt} src={base.mainImage.asset.fluid.src} fluid />
            <small style={{marginLeft: '2rem'}}>{base.mainImage.caption}</small>
            <Container className='content-container'>
              <h1 className='h1-title'>{base.title}</h1>
              <div className='blog-details'>
                <Row>
                  <Col xs={1}>
                    <Image
                      alt={base.authors[0].author.name}
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
                    {base.categories.map((category) => {
                      return <span>{category.title} &#8226; </span>;
                    })}{' '}
                    {base.readTime}min read
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
        </Col>
        <Col lg={2}>
          <div className='email-container'>
            <EmailListForm />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg>
          <Container className='comment-section'>
            <div
              className='fb-comments'
              data-href={currentUrl}
              data-numposts='5'
              data-width='100%'
              data-mobile
            />
          </Container>
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
          slug {
            current
          }
          categories {
            title
          }
          readTime
          authors {
            author {
              slug {
                current
              }
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
          _rawExcerpt
          _rawBody
          keywords
          mainImage {
            caption
            alt
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
