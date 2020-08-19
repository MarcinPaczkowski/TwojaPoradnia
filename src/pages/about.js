import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import AboutMe from '../components/AboutMe/aboutMe';
import { useStaticQuery, graphql } from 'gatsby';
import { mapAllCmsAboutMeArticles } from '../utils/cmsMappers/aboutMeArticleMapper';
import { mapCmsContactData } from '../utils/cmsMappers/contactDataMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import Contact from '../components/Contact/contact';

const AboutPage = pageData => {
  const {
    allKontentItemAboutmearticle: { nodes: cmsArticles },
    allKontentItemContactdata: { nodes: cmsContactData },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemAboutmearticle {
          nodes {
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

  const articles = mapAllCmsAboutMeArticles(cmsArticles);
  const contactData = mapCmsContactData(cmsContactData[0]);
  const breadcrumbs = buildBreadcrumbs(pageData, 'O mnie');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <AboutMe articles={articles}></AboutMe>
      <Contact contactData={contactData} />
    </Layout>
  );
};

export default AboutPage;
