import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapAllCmsDevelopments } from '../utils/cmsMappers/developmentsMapper';
import Developments from '../components/Developments/developments';

const DevelopmentPage = pageData => {
  const {
    allKontentItemDevelopment: { nodes: cmsDevelopments },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemDevelopment {
          nodes {
            elements {
              title {
                value
              }
              shortdescription {
                value
              }
              publishdate {
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
              slug {
                value
              }
            }
          }
        }
      }
    `
  );

  const developments = mapAllCmsDevelopments(cmsDevelopments);
  const breadcrumbs = buildBreadcrumbs(pageData, 'Rozwój i wychowanie');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Developments developments={developments} />
    </Layout>
  );
};

export default DevelopmentPage;
