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
import ReactWidgetPackComments from 'react-widgetpack-comments';
import imageUrlBuilder from '@sanity/image-url';
import './blog-post.scss';

const BlogPost = ({data}) => {
  let currentUrl = '';

  if (typeof window !== 'undefined') {
    currentUrl = window.location.href;
  }

  const FollowAt = loadable(() => import('react-social-media-follow'));

  const base = data.allSanityPost.edges[0].node;

  const links = [base.authors[0].author.slug.current];

  const urlFor = (source) => {
    return imageUrlBuilder({projectId: 'tu4ms11l', dataset: 'production'}).image(source);
  };

  const serializers = {
    marks: {
      link: (props) => (
        <a target='_blank' href={props.mark.href}>
          {props.children[0]}
        </a>
      ),
    },
    types: {
      mainImage: (props) => (
        <Image
          fluid
          style={{maxWidth: '1000px', height: 'auto'}}
          rounded
          alt={props.node.alt}
          src={urlFor(props.node.asset).width(1000).url()}
        />
      ),
    },
  };

  useEffect(() => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.text = `try {
      window._mNHandle.queue.push(function () {
        window._mNDetails.loadTag('754477964', '300x250', '754477964');
      });
    } catch (error) {}`;
    document.getElementById('754477964').appendChild(script);
  }, []);

  return (
    <Layout>
      <SEO
        excerpt={base._rawExcerpt[0].children[0].text}
        keywords={base.keywords}
        title={base.title}
        url={currentUrl}
        published_time={base.publishedAt}
        author={base.authors[0].author.name}
      >
        <script
          data-ad-client='ca-pub-3900934487984615'
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
        />
      </SEO>
      <Row>
        <Col />
        <Col lg={8}>
          <Container className='blog-post-container'>
            <Image alt={base.mainImage.alt} src={base.mainImage.asset.fluid.src} fluid />
            <small style={{marginLeft: '2rem'}}>{base.mainImage.caption}</small>
            <div id='754477964' />
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
                <BlockContent serializers={serializers} blocks={base._rawBody} />
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
            <div>
              <ReactWidgetPackComments id={'26290'} enable />
            </div>
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
