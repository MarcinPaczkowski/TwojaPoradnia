const path = require(`path`);

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  switch (node.internal.type) {
    case 'kontent_item_class':
    case 'kontent_item_book':
    case 'kontent_item_game':
      createNodeField({
        node,
        name: `slug`,
        value: node.elements.slug.value,
      });
      break;

    default:
      break;
  }
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allKontentItemClass {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allKontentItemBook {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allKontentItemGame {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allKontentItemClass.edges.forEach(({ node }) => {
    createPage({
      path: `zajecia/${node.fields.slug}`,
      component: path.resolve(`./src/templates/classDetails.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  result.data.allKontentItemBook.edges.forEach(({ node }) => {
    createPage({
      path: `ksiazki/${node.fields.slug}`,
      component: path.resolve(`./src/templates/bookDetails.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  result.data.allKontentItemGame.edges.forEach(({ node }) => {
    createPage({
      path: `gry/${node.fields.slug}`,
      component: path.resolve(`./src/templates/gameDetails.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
};
