import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import Classes from '../components/Classes/classes';
import { mapCmsClassesPage } from '../utils/cmsMappers/classes/listMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const ClassesPage = (pageData) => {
  const {
    allKontentItemClassespage: { nodes: cmsClassesPage },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemClassespage {
          nodes {
            elements {
              title {
                value
              }
              classes {
                value {
                  ... on kontent_item_class {
                    elements {
                      title {
                        value
                      }
                      shortdescription {
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
                      publishdate {
                        value
                      }
                      order {
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
  const [classesPage, setClassesPage] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const classesPage = mapCmsClassesPage(cmsClassesPage[0]);
    const breadcrumbs = buildBreadcrumbs(pageData, classesPage.title);
    setClassesPage(classesPage);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(classesPage.seo);
  }, [pageData]);

  return (
    <>
      {classesPage && (
        <>
          <Classes title={classesPage.title} classes={classesPage.classes} />
        </>
      )}
    </>
  );
};

export default ClassesPage;
