import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
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
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Rozwój i wychowanie');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <Developments developments={developments} />;
};

export default DevelopmentPage;
