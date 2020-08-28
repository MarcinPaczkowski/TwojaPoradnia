import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
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
        allKontentItemClass(
          sort: { order: ASC, fields: elements___order___value }
        ) {
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
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Zajęcia');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <Classes classes={classes} />;
};

export default ClassesPage;
