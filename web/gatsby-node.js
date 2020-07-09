const path = require(`path`);

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const result = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);
  console.log(result);
  result.data.allSanityPost.edges.forEach(({node}) => {
    createPage({
      path: node.slug.current,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
};
