import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsCourse } from '../utils/cmsMappers/coursesMapper';
import Course from '../components/Course/course';

const CoursesPage = pageData => {
  const layoutContext = useContext(LayoutContext);
  const {
    allKontentItemCourse: { nodes: cmsCourses },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemCourse {
          nodes {
            elements {
              title {
                value
              }
              section1 {
                value
              }
              section2 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_textwithimage {
                            elements {
                              text {
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
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              section3 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_textwithimage {
                            elements {
                              text {
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
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              section4 {
                value
              }
              section5 {
                value
              }
              section6 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_text {
                            elements {
                              text {
                                value
                              }
                            }
                          }
                        }
                      }
                      action {
                        value {
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
                    }
                  }
                }
              }
              section7 {
                value {
                  ... on kontent_item_section {
                    elements {
                      title {
                        value
                      }
                      elements {
                        value {
                          ... on kontent_item_textwithimage {
                            elements {
                              text {
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
                            }
                          }
                        }
                      }
                    }
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
  const course = mapCmsCourse(cmsCourses[0]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Szkolenia', {
      url: '/szkolenia-i-wyklady',
      name: 'Szkolenia i wykłady',
    });
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <Course course={course} />;
};

export default CoursesPage;
