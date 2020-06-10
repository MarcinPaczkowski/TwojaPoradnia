import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import TeachingResources from '../components/TeachingResources/teachingResources';
import { useStaticQuery, graphql } from 'gatsby';
import { mapCmsTeachingResources } from '../utils/cmsMappers/teachingResourcesMapper';

const TeachingResourcesPage = () => {
  const {
    allKontentItemTeachingresource: { nodes: cmsTeachingResources },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemTeachingresource {
          nodes {
            elements {
              title {
                value
              }
              description {
                value
              }
              image {
                value {
                  description
                  fluid(maxWidth: 720) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
              resource {
                value {
                  url
                }
              }
            }
          }
        }
      }
    `
  );

  const teachingResources = mapCmsTeachingResources(cmsTeachingResources);

  return (
    <Layout>
      <TeachingResources resources={teachingResources} />
    </Layout>
  );
};

export default TeachingResourcesPage;
