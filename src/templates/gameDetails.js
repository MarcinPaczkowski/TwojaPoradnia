import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const GameDetails = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Gry');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <p>Szczegóły</p>
    </Layout>
  );
};

export default GameDetails;
