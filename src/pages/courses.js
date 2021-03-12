import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsCoursesPage } from '../utils/cmsMappers/courses/coursesPageMapper';
import Course from '../components/Course/course';

const CoursesPage = (pageData) => {
  const {
    allKontentItemCoursepage: { nodes: cmsCoursesPage },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemCoursepage {
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
              course {
                value {
                  ... on kontent_item_course {
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
            }
          }
        }
      }
    `
  );

  const layoutContext = useContext(LayoutContext);
  const [coursePage, setCoursePage] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const coursePage = mapCmsCoursesPage(cmsCoursesPage[0]);
    const breadcrumbs = buildBreadcrumbs(pageData, 'Szkolenia', {
      url: '/szkolenia-i-wyklady',
      name: 'Szkolenia i wykłady',
    });
    setCoursePage(coursePage);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(coursePage.seo);
  }, [pageData]);

  return (
    <>
      {coursePage && (
        <>
          <Course title={coursePage.title} course={coursePage.course} />
        </>
      )}
    </>
  );
};

export default CoursesPage;
