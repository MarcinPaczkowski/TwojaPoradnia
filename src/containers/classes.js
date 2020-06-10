import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import Classes from '../components/Classes/classes';
import { mapAllCmsClasses } from '../utils/cmsMappers/classesMapper';

const ClassesPage = () => {
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
              longdescription {
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

  const classes = mapAllCmsClasses(cmsClasses);

  return (
    <Layout>
      <Classes classes={classes} />
    </Layout>
  );
};

export default ClassesPage;
