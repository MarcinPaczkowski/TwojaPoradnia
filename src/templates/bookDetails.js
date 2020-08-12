import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
// import { mapCmsBook } from '../utils/cmsMappers/booksMapper';

const BookDetails = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Książki');
  // const bookDetails = mapCmsBook(pageData.pageContext);
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <p>Szczegóły</p>
    </Layout>
  );
};

export default BookDetails;
