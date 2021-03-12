import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsLecturesPage } from '../utils/cmsMappers/lectures/lecturesPageMapper';
import Lectures from '../components/Lectures/lectures';

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

  const layoutContext = useContext(LayoutContext);
  const [lecturesPage, setLecturesPage] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const lecturesPage = mapCmsLecturesPage(cmsLecturesPage[0]);
    const breadcrumbs = buildBreadcrumbs(pageData, lecturesPage.title, {
      url: '/szkolenia-i-wyklady',
      name: 'Szkolenia i wykłady',
    });
    setLecturesPage(lecturesPage);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(lecturesPage.seo);
  }, [pageData]);

  return (
    <>
      {lecturesPage && (
        <>
          <Lectures lectures={lecturesPage.lectures} />
        </>
      )}
    </>
  );
};

export default LecturesPage;
