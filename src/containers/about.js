import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import AboutMe from '../components/AboutMe/aboutMe';
import { useStaticQuery, graphql } from 'gatsby';
import { mapAllCmsAboutMeArticles } from '../utils/aboutMeArticleMapper';

const AboutPage = () => {
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
            }
          }
        }
      }
    `
  );

  const articles = mapAllCmsAboutMeArticles(cmsArticles);

  return (
    <Layout>
      <AboutMe articles={articles}></AboutMe>
    </Layout>
  );
};

export default AboutPage;
