import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsDevelopment } from '../utils/cmsMappers/developmentsMapper';
import EntryBlog from '../components/EntryBlog/entryBlog';

const DevelopmentDetails = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Rozwój i wychowanie');
  const developmentDetails = mapCmsDevelopment(pageData.pageContext);

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <EntryBlog blog={developmentDetails} />
    </Layout>
  );
};

export default DevelopmentDetails;
