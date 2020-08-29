import React, { useEffect, useContext } from 'react';
import AboutMe from '../components/AboutMe/aboutMe';
import { useStaticQuery, graphql } from 'gatsby';
import { mapAllCmsAboutMeArticles } from '../utils/cmsMappers/aboutMeArticleMapper';
import { mapCmsContactData } from '../utils/cmsMappers/contactDataMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import Contact from '../components/Contact/contact';
import LayoutContext from '../contexts/LayoutContext';

const AboutPage = pageData => {
  const {
    allKontentItemAboutmearticle: { nodes: cmsArticles },
    allKontentItemContactdata: { nodes: cmsContactData },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemAboutmearticle(
          sort: { order: ASC, fields: elements___order___value }
        ) {
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
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'O mnie');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <AboutMe articles={articles}></AboutMe>
      <Contact contactData={contactData} />
    </>
  );
};

export default AboutPage;
