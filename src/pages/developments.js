import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsDevelopmentsPage } from '../utils/cmsMappers/developments/developmentsPageMapper';
import Developments from '../components/Developments/developments';

const DevelopmentPage = (pageData) => {
  const {
    allKontentItemDevelopmentspage: { nodes: cmsDevelopmentsPage },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemDevelopmentspage {
          nodes {
            elements {
              title {
                value
              }
              developments {
                value {
                  ... on kontent_item_development {
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
  const [developmentsPage, setDevelopmentsPage] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const developmentsPage = mapCmsDevelopmentsPage(cmsDevelopmentsPage[0]);
    const breadcrumbs = buildBreadcrumbs(pageData, developmentsPage.title);
    setDevelopmentsPage(developmentsPage);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(developmentsPage.seo);
  }, [pageData]);

  return (
    <>
      {developmentsPage && (
        <>
          <Developments
            title={developmentsPage.title}
            developments={developmentsPage.developments}
          />
        </>
      )}
    </>
  );
};

export default DevelopmentPage;
