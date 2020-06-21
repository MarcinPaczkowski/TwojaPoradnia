import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const DevelopmentPage = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Rozwój i wychowanie');
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <p>Rozwój i wychowanie</p>
    </Layout>
  );
};

export default DevelopmentPage;
