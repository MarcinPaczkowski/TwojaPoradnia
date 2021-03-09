import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsDevelopmentsPage } from '../utils/cmsMappers/developments/developmentsPageMapper';
import Developments from '../components/Developments/developments';
import GatsbyHelmet from '../components/Helmet/helmet';

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

  const developmentsPage = mapCmsDevelopmentsPage(cmsDevelopmentsPage[0]);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Rozwój i wychowanie');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={developmentsPage.seo}
        currentSiteUrl={pageData.location.href}
      />
      <Developments
        title={developmentsPage.title}
        developments={developmentsPage.developments}
      />
    </>
  );
};

export default DevelopmentPage;
