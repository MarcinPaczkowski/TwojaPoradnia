import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsBook } from '../utils/cmsMappers/booksMapper';
import EntryBlog from '../components/EntryBlog/entryBlog';

const BookDetails = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Książki');
  const bookDetails = mapCmsBook(pageData.pageContext);

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <EntryBlog blog={bookDetails} />
    </Layout>
  );
};

export default BookDetails;
