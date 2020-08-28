import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/style.scss';
import Books from '../components/Books/books';
import { mapCmsBooks } from '../utils/cmsMappers/booksMapper';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const BooksPage = pageData => {
  const {
    allKontentItemBook: { nodes: cmsBooks },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemBook {
          nodes {
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
    `
  );

  const books = mapCmsBooks(cmsBooks);
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Książki');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <Books books={books} />;
};

export default BooksPage;
