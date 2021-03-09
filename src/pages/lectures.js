import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsLecturesPage } from '../utils/cmsMappers/lectures/lecturesPageMapper';
import Lectures from '../components/Lectures/lectures';
import GatsbyHelmet from '../components/Helmet/helmet';

const LecturesPage = (pageData) => {
  const {
    allKontentItemLecturespage: { nodes: cmsLecturesPage },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemLecturespage {
          nodes {
            elements {
              title {
                value
              }
              seo__metatitle {
                value
              }
              seo__metakeywords {
                value
              }
              seo__metadescription {
                value
              }
              linktopage {
                value {
                  id
                  ... on kontent_item_linktopage {
                    elements {
                      buttontext {
                        value
                      }
                      link {
                        value
                      }
                    }
                  }
                }
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
              lectures {
                value {
                  ... on kontent_item_lecture {
                    elements {
                      title {
                        value
                      }
                      address {
                        value
                      }
                      eventdate {
                        value
                      }
                      description {
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const lecturesPage = mapCmsLecturesPage(cmsLecturesPage[0]);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Wykłady', {
      url: '/szkolenia-i-wyklady',
      name: 'Szkolenia i wykłady',
    });
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={lecturesPage.seo}
        currentSiteUrl={pageData.location.href}
      />
      <Lectures lectures={lecturesPage.lectures} />
    </>
  );
};

export default LecturesPage;
