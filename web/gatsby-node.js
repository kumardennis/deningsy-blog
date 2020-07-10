const path = require(`path`);

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const result = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
            categories {
              title
            }
          }
        }
      }
    }
  `);
  result.data.allSanityPost.edges.forEach(({node}) => {
    createPage({
      path: node.categories[0].title.toLowerCase() + '/' + node.slug.current + '/',
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
};
