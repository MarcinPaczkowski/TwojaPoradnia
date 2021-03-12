import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import Contact from '../components/Contact/contact';
import { mapCmsContactPage } from '../utils/cmsMappers/contact/contactPageMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const ContactPage = (pageData) => {
  const {
    allKontentItemContactpage: { nodes: cmsContactPage },
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

  const layoutContext = useContext(LayoutContext);
  const [contactPage, setContactPage] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const contactPage = mapCmsContactPage(cmsContactPage[0]);
    const breadcrumbs = buildBreadcrumbs(pageData, 'Kontakt');
    setContactPage(contactPage);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(contactPage.seo);
  }, [pageData]);

  return (
    <>
      {contactPage && (
        <>
          <Contact contactData={contactPage.contactData} />
        </>
      )}
    </>
  );
};

export default ContactPage;
