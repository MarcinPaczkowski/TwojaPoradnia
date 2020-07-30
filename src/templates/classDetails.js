import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsClass } from '../utils/cmsMappers/classesMapper';
import Class from '../components/Class/class';

const ClassDetails = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Zajęcia');
  const classDetails = mapCmsClass(pageData.pageContext);

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Class classDetails={classDetails} />
    </Layout>
  );
};

export default ClassDetails;
