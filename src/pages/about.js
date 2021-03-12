import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import AboutMe from '../components/AboutMe/aboutMe';
import { useStaticQuery, graphql } from 'gatsby';
import { mapCmsAboutMePage } from '../utils/cmsMappers/aboutMe/aboutMePageMapper';
import { mapCmsContactData } from '../utils/cmsMappers/contact/contactDataMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import Contact from '../components/Contact/contact';

const AboutPage = (pageData) => {
  const {
    allKontentItemAboutmepage: { nodes: cmsAboutMePage },
    allKontentItemContactdata: { nodes: cmsContactData },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemAboutmepage {
          nodes {
            elements {
              title {
                value
              }
              seo__metatitle {
                value
              }
              seo__metakeywords {
                value
              }
              seo__metadescription {
                value
              }
              articles {
                value {
                  ... on kontent_item_aboutmearticle {
                    elements {
                      description {
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
                      title {
                        value
                      }
                      order {
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
    `
  );

  const layoutContext = useContext(LayoutContext);
  const [aboutMePage, setAboutMePage] = useState(null);
  const [contactData, setContactData] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const aboutMePage = mapCmsAboutMePage(cmsAboutMePage[0]);
    const contactData = mapCmsContactData(cmsContactData[0]);
    setAboutMePage(aboutMePage);
    setContactData(contactData);

    const breadcrumbs = buildBreadcrumbs(pageData, aboutMePage.title);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(aboutMePage.seo);
  }, [pageData]);

  return (
    <>
      {aboutMePage && contactData && (
        <>
          <AboutMe title={aboutMePage.title} articles={aboutMePage.articles} />
          <Contact contactData={contactData} />
        </>
      )}
    </>
  );
};

export default AboutPage;
