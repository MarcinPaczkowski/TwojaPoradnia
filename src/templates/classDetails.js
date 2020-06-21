import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsClass } from '../utils/cmsMappers/classesMapper';

const ClassDetails = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Zajęcia');
  const classDetails = mapCmsClass(pageData.pageContext);

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <p>Szczegóły</p>
    </Layout>
  );
};

export default ClassDetails;
