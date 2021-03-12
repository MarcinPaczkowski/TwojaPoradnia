import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import TeachingResources from '../components/TeachingResources/teachingResources';
import { useStaticQuery, graphql } from 'gatsby';
import { mapCmsTeachingResourcesPage } from '../utils/cmsMappers/teachingResources/teachingResourcesPageMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const TeachingResourcesPage = (pageData) => {
  const {
    allKontentItemTeachingresourcespage: { nodes: cmsTeachingResourcesPage },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemTeachingresourcespage {
          nodes {
            elements {
              title {
                value
              }
              teachingresources {
                value {
                  ... on kontent_item_teachingresource {
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
              seo__metatitle {
                value
              }
              seo__metadescription {
                value
              }
              seo__metakeywords {
                value
              }
            }
          }
        }
      }
    `
  );

  const layoutContext = useContext(LayoutContext);
  const [teachingResourcesPage, setTeachingResourcesPage] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const teachingResourcesPage = mapCmsTeachingResourcesPage(
      cmsTeachingResourcesPage[0]
    );
    const breadcrumbs = buildBreadcrumbs(pageData, teachingResourcesPage.title);
    setTeachingResourcesPage(teachingResourcesPage);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(teachingResourcesPage.seo);
  }, [pageData]);

  return (
    <>
      {teachingResourcesPage && (
        <>
          <TeachingResources
            title={teachingResourcesPage.title}
            resources={teachingResourcesPage.teachingResources}
          />
        </>
      )}
    </>
  );
};

export default TeachingResourcesPage;
