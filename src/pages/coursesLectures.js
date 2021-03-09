import React, { useEffect, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import CoursesAndLectures from '../components/CoursesAndLectures/coursesAndLectures';
import GatsbyHelmet from '../components/Helmet/helmet';
import { mapCmsCoursesAndLecturesPage } from '../utils/cmsMappers/coursesAndLecturesPageMapper';

const CoursesAndLecturesPage = (pageData) => {
  const {
    allKontentItemCoursesandlecturespage: { nodes: cmsCoursesAndLecturesPage },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemCoursesandlecturespage {
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
              pages {
                value {
                  ... on kontent_item_coursepage {
                    elements {
                      title {
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
                    }
                  }
                  ... on kontent_item_lecturespage {
                    elements {
                      title {
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

  const coursesAndLecturesPage = mapCmsCoursesAndLecturesPage(
    cmsCoursesAndLecturesPage[0]
  );
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Szkolenia i wykłady');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={coursesAndLecturesPage.seo}
        currentSiteUrl={pageData.location.href}
      />
      <CoursesAndLectures
        title={coursesAndLecturesPage.title}
        subPages={coursesAndLecturesPage.subPages}
      />
    </>
  );
};

export default CoursesAndLecturesPage;
