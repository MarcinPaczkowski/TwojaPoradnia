const path = require(`path`);

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  switch (node.internal.type) {
    case 'kontent_item_class':
    case 'kontent_item_book':
    case 'kontent_item_game':
    case 'kontent_item_development':
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
            elements {
              title {
                value
              }
              image {
                value {
                  description
                  fluid(maxWidth: 600) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
              publishdate {
                value(formatString: "DD.MM.YYYY")
              }
              section1 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_textwithimage {
                            elements {
                              text {
                                value
                              }
                              image {
                                value {
                                  description
                                  fluid(maxWidth: 600) {
                                    aspectRatio
                                    base64
                                    sizes
                                    src
                                    srcSet
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              section2 {
                value
              }
              section3 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_textwithimage {
                            elements {
                              text {
                                value
                              }
                              image {
                                value {
                                  description
                                  fluid(maxWidth: 170) {
                                    aspectRatio
                                    base64
                                    sizes
                                    src
                                    srcSet
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              section4 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_textwithimage {
                            elements {
                              text {
                                value
                              }
                              image {
                                value {
                                  description
                                  fluid(maxWidth: 85) {
                                    aspectRatio
                                    base64
                                    sizes
                                    src
                                    srcSet
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              section5 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_textwithimage {
                            elements {
                              text {
                                value
                              }
                              image {
                                value {
                                  description
                                  fluid(maxWidth: 50) {
                                    aspectRatio
                                    base64
                                    sizes
                                    src
                                    srcSet
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              section6 {
                value {
                  ... on kontent_item_textwithimage {
                    elements {
                      text {
                        value
                      }
                      image {
                        value {
                          description
                          fluid(maxWidth: 250) {
                            aspectRatio
                            base64
                            sizes
                            src
                            srcSet
                          }
                        }
                      }
                    }
                  }
                }
              }
              section7 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_text {
                            elements {
                              text {
                                value
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              section8 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_text {
                            elements {
                              text {
                                value
                              }
                            }
                          }
                        }
                      }
                      action {
                        value {
                          ... on kontent_item_linktopage {
                            elements {
                              buttontext {
                                value
                              }
                              link {
                                value
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              title {
                value
              }
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
            elements {
              title {
                value
              }
              publishdate {
                value(formatString: "DD.MM.YYYY")
              }
              entry {
                value
              }
              headlinetitle {
                value
              }
              headlinebackgroundimage {
                value {
                  description
                  fluid(maxWidth: 1920) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
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
            elements {
              title {
                value
              }
              publishdate {
                value(formatString: "DD.MM.YYYY")
              }
              entry {
                value
              }
              headlinetitle {
                value
              }
              headlinebackgroundimage {
                value {
                  description
                  fluid(maxWidth: 1920) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
      allKontentItemDevelopment {
        edges {
          node {
            fields {
              slug
            }
            elements {
              title {
                value
              }
              publishdate {
                value(formatString: "DD.MM.YYYY")
              }
              entry {
                value
              }
              headlinetitle {
                value
              }
              headlinebackgroundimage {
                value {
                  description
                  fluid(maxWidth: 1920) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
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
        elements: node.elements,
      },
    });
  });

  result.data.allKontentItemBook.edges.forEach(({ node }) => {
    createPage({
      path: `ksiazki/${node.fields.slug}`,
      component: path.resolve(`./src/templates/bookDetails.js`),
      context: {
        elements: node.elements,
      },
    });
  });

  result.data.allKontentItemGame.edges.forEach(({ node }) => {
    createPage({
      path: `gry/${node.fields.slug}`,
      component: path.resolve(`./src/templates/gameDetails.js`),
      context: {
        elements: node.elements,
      },
    });
  });

  result.data.allKontentItemDevelopment.edges.forEach(({ node }) => {
    createPage({
      path: `rozwoj-i-wychowanie/${node.fields.slug}`,
      component: path.resolve(`./src/templates/developmentDetails.js`),
      context: {
        elements: node.elements,
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
