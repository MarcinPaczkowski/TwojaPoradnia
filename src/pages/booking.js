import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const BookingsPage = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Rezerwacja');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <p>Rezerwacja</p>
    </Layout>
  );
};

export default BookingsPage;
