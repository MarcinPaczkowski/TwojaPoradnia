import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Home from '../components/Home/home';
import { mapCmsHomePage } from '../utils/cmsMappers/homePageMapper';
import Contact from '../components/Contact/contact';
import { mapCmsContactData } from '../utils/cmsMappers/contactDataMapper';

const IndexPage = () => {
  const {
    allKontentItemHomepage: { nodes: cmsHomePage },
    allKontentItemContactdata: { nodes: cmsContactData },
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
                    quotation {
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
      allKontentItemContactdata {
        nodes {
          elements {
            fullname {
              value
            }
            email {
              value
            }
            address {
              value
            }
            nip {
              value
            }
            phone {
              value
            }
            facebookurl {
              value
            }
            instagramurl {
              value
            }
            youtubeurl {
              value
            }
          }
        }
      }
    }
  `);

  const homePage = mapCmsHomePage(cmsHomePage[0]);
  const contactData = mapCmsContactData(cmsContactData[0]);
  return (
    <>
      <Home homePage={homePage} />
      <Contact contactData={contactData} />
    </>
  );
};

export default IndexPage;
