import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import Books from '../components/Books/books';
import { mapCmsBooksPage } from '../utils/cmsMappers/books/booksPageMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

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

  const layoutContext = useContext(LayoutContext);
  const [booksPage, setBooksPage] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const booksPage = mapCmsBooksPage(cmsBooksPage[0]);
    const breadcrumbs = buildBreadcrumbs(pageData, booksPage.title);
    setBooksPage(booksPage);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(booksPage.seo);
  }, [pageData]);

  return (
    <>
      {booksPage && (
        <>
          <Books title={booksPage.title} books={booksPage.books} />
        </>
      )}
    </>
  );
};

export default BooksPage;
