import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import TeachingResources from '../components/TeachingResources/teachingResources';
import { useStaticQuery, graphql } from 'gatsby';
import { mapCmsTeachingResources } from '../utils/cmsMappers/teachingResourcesMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const TeachingResourcesPage = pageData => {
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
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Materiały');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <TeachingResources resources={teachingResources} />;
};

export default TeachingResourcesPage;
