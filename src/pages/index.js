import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import Home from '../components/Home/home';
import Contact from '../components/Contact/contact';
import { mapCmsHomePage } from '../utils/cmsMappers/homePageMapper';
import { mapCmsContactData } from '../utils/cmsMappers/contact/contactDataMapper';

const IndexPage = (pageData) => {
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
            seo__metatitle {
              value
            }
            seo__metadescription {
              value
            }
            seo__metakeywords {
              value
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

  const layoutContext = useContext(LayoutContext);

  const [homePage, setHomePage] = useState(null);
  const [contactData, setContactData] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const homePage = mapCmsHomePage(cmsHomePage[0]);
    const contactData = mapCmsContactData(cmsContactData[0]);
    setHomePage(homePage);
    setContactData(contactData);
    layoutContext.setBreadcrumbs(null);
    layoutContext.setSeo(homePage.seo);
  }, [pageData]);

  return (
    <>
      {homePage && contactData && (
        <>
          <Home homePage={homePage} />
          <Contact contactData={contactData} />
        </>
      )}
    </>
  );
};

export default IndexPage;
