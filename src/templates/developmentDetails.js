import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const DevelopmentDetails = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Rozwój i wychowanie');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <p>Szczegóły</p>
    </Layout>
  );
};

export default DevelopmentDetails;
