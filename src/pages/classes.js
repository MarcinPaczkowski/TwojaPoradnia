import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import Classes from '../components/Classes/classes';
import { mapAllCmsClasses } from '../utils/cmsMappers/classes/listMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const ClassesPage = pageData => {
  const {
    allKontentItemClass: { nodes: cmsClasses },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemClass {
          nodes {
            elements {
              title {
                value
              }
              shortdescription {
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
              publishdate {
                value
              }
            }
          }
        }
      }
    `
  );

  const classes = mapAllCmsClasses(cmsClasses);
  const breadcrumbs = buildBreadcrumbs(pageData, 'Zajęcia');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Classes classes={classes} />
    </Layout>
  );
};

export default ClassesPage;
