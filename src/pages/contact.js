import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import Contact from '../components/Contact/contact';
import GatsbyHelmet from '../components/Helmet/helmet';
import { mapCmsContactPageData } from '../utils/cmsMappers/contact/contactPageDataMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const ContactPage = (pageData) => {
  const {
    allKontentItemContactpage: { nodes: cmsContactPageData },
  } = useStaticQuery(
    graphql`
      {
        allKontentItemContactpage {
          nodes {
            elements {
              contactdata {
                value {
                  ... on kontent_item_contactdata {
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
      }
    `
  );

  const contactPageData = mapCmsContactPageData(cmsContactPageData[0]);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Kontakt');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={contactPageData.seo}
        currentSiteUrl={pageData.location.href}
      />
      <Contact contactData={contactPageData.contactData} />
    </>
  );
};

export default ContactPage;
