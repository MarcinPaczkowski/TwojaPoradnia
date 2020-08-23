import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const CoursesPage = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Szkolenia', {
    url: '/szkolenia-i-wyklady',
    name: 'Szkolenia i wykłady',
  });

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <p>Szkolenia</p>
    </Layout>
  );
};

export default CoursesPage;
