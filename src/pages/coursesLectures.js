import React, { useEffect, useState, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import CoursesAndLectures from '../components/CoursesAndLectures/coursesAndLectures';
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

  const layoutContext = useContext(LayoutContext);
  const [coursesAndLecturesPage, setCoursesAndLecturesPage] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const coursesAndLecturesPage = mapCmsCoursesAndLecturesPage(
      cmsCoursesAndLecturesPage[0]
    );
    const breadcrumbs = buildBreadcrumbs(
      pageData,
      coursesAndLecturesPage.title
    );
    setCoursesAndLecturesPage(coursesAndLecturesPage);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(coursesAndLecturesPage.seo);
  }, [pageData]);

  return (
    <>
      {coursesAndLecturesPage && (
        <>
          <CoursesAndLectures
            title={coursesAndLecturesPage.title}
            subPages={coursesAndLecturesPage.subPages}
          />
        </>
      )}
    </>
  );
};

export default CoursesAndLecturesPage;
