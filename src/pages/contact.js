import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
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
  const breadcrumbs = buildBreadcrumbs(pageData, 'Kontakt');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Contact contactData={contactData} />
    </Layout>
  );
};

export default ContactPage;
