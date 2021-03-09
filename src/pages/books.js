import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import Books from '../components/Books/books';
import { mapCmsBooksPage } from '../utils/cmsMappers/books/booksPageMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import GatsbyHelmet from '../components/Helmet/helmet';

const BooksPage = (pageData) => {
  const {
    allKontentItemBookspage: { nodes: cmsBooksPage },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemBookspage {
          nodes {
            elements {
              title {
                value
              }
              books {
                value {
                  ... on kontent_item_book {
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
                          fluid(maxWidth: 720) {
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

  const booksPage = mapCmsBooksPage(cmsBooksPage[0]);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Książki');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={booksPage.seo}
        currentSiteUrl={pageData.location.href}
      />
      <Books title={booksPage.title} books={booksPage.books} />
    </>
  );
};

export default BooksPage;
