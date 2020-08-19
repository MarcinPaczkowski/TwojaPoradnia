import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const CoursesPage = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Szkolenia');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <p>Szkolenia</p>
    </Layout>
  );
};

export default CoursesPage;
