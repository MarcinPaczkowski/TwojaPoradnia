import React, { useEffect, useContext } from 'react';
import GatsbyHelmet from '../components/Helmet/helmet';
import AboutMe from '../components/AboutMe/aboutMe';
import { useStaticQuery, graphql } from 'gatsby';
import { mapCmsAboutMePage } from '../utils/cmsMappers/aboutMe/aboutMePageMapper';
import { mapCmsContactData } from '../utils/cmsMappers/contact/contactDataMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import Contact from '../components/Contact/contact';
import LayoutContext from '../contexts/LayoutContext';

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

  const aboutMePage = mapCmsAboutMePage(cmsAboutMePage[0]);
  const contactData = mapCmsContactData(cmsContactData[0]);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'O mnie');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={aboutMePage.seo}
        currentSiteUrl={pageData.location.href}
      />
      <AboutMe title={aboutMePage.title} articles={aboutMePage.articles} />
      <Contact contactData={contactData} />
    </>
  );
};

export default AboutPage;
