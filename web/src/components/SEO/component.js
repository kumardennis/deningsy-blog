/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import favicon from '../../images/favicon_io/favicon.ico';

function SEO({excerpt, lang, keywords, title}) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            excerpt
            author
          }
        }
      }
    `
  );

  const metaExcerpt = excerpt || site.siteMetadata.excerpt;
  const metaTitle = title || site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaExcerpt,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaExcerpt,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaExcerpt,
        },
      ].concat({
        name: `keywords`,
        content: keywords.join(`, `),
      })}
    >
      <link rel='icon' href={favicon} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [
    `deningsy`,
    `blog`,
    `fitness`,
    `family`,
    `maternity`,
    `travel`,
    `interior decoration`,
    `interior planning`,
  ],
  excerpt: ``,
  title: ``,
};

SEO.propTypes = {
  excerpt: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
