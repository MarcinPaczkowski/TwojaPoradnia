import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const LecturesPage = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Wykłady', {
    url: '/szkolenia-i-wyklady',
    name: 'Szkolenia i wykłady',
  });

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <p>Wykłady</p>
    </Layout>
  );
};

export default LecturesPage;
