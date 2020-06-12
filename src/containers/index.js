import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Home from '../components/Home/home';
import '../styles/style.scss';
import { mapCmsHomePage } from '../utils/cmsMappers/homePageMapper';

const IndexPage = () => {
  const {
    allKontentItemHomepage: { nodes: cmsHomePage },
  } = useStaticQuery(graphql`
    {
      allKontentItemHomepage {
        nodes {
          elements {
            title {
              value
            }
            description {
              value
            }
            image {
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
            articles {
              value {
                ... on kontent_item_homearticle {
                  elements {
                    title {
                      value
                    }
                    content {
                      value
                    }
                    image {
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
                    actions {
                      value {
                        ... on kontent_item_linktopage {
                          id
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
          }
        }
      }
    }
  `);

  const homePage = mapCmsHomePage(cmsHomePage[0]);

  return (
    <Layout isHome={true}>
      <Home homePage={homePage} />
    </Layout>
  );
};

export default IndexPage;
