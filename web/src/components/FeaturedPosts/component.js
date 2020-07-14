import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import './styles.scss';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const FeaturedPosts = ({query}) => {
  const base = query.allSanityPost.edges;
  return (
    <Slider autoplay={3000} infinite>
      {base.map((post, id) => {
        return (
          <div>
            <img
              className='d-block w-100 h-100'
              src={post.node.mainImage.asset.fluid.src}
              alt='First slide'
            />

            <div className='carousel-caption'>
              <span>Featured post</span>
              <h3>
                <AniLink
                  className='light-ani-link'
                  bg='#333333'
                  cover
                  direction='right'
                  to={
                    post.node.categories[0].title.toLowerCase() + '/' + post.node.slug.current + '/'
                  }
                >
                  {post.node.title}
                </AniLink>
              </h3>
              <BlockContent blocks={post.node._rawExcerpt} />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default FeaturedPosts;
