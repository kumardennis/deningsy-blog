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
    node.categories.map((category, id) => {
      createPage({
        path: category.title.toLowerCase() + '/' + node.slug.current + '/',
        component: path.resolve(`./src/templates/BlogPost/blog-post.js`),
        context: {
          slug: node.slug.current,
        },
      });
    });
  });
};
