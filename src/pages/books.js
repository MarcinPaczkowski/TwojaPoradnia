import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import Books from '../components/Books/books';
import { mapCmsBooks } from '../utils/cmsMappers/booksMapper';

const BooksPage = () => {
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

  return (
    <Layout>
      <Books books={books} />
    </Layout>
  );
};

export default BooksPage;
