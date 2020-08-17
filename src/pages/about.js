import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import AboutMe from '../components/AboutMe/aboutMe';
import { useStaticQuery, graphql } from 'gatsby';
import { mapAllCmsAboutMeArticles } from '../utils/cmsMappers/aboutMeArticleMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const AboutPage = pageData => {
  const {
    allKontentItemAboutmearticle: { nodes: cmsArticles },
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
      }
    `
  );

  const articles = mapAllCmsAboutMeArticles(cmsArticles);
  const breadcrumbs = buildBreadcrumbs(pageData, 'O mnie');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <AboutMe articles={articles}></AboutMe>
    </Layout>
  );
};

export default AboutPage;
