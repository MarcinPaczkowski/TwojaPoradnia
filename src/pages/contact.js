import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import Contact from '../components/Contact/contact';
import { mapCmsContactData } from '../utils/cmsMappers/contactDataMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const ContactPage = pageData => {
  const {
    allKontentItemContactdata: { nodes: cmsContactData },
  } = useStaticQuery(
    graphql`
      {
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

  const contactData = mapCmsContactData(cmsContactData[0]);
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Kontakt');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <Contact contactData={contactData} />;
};

export default ContactPage;
