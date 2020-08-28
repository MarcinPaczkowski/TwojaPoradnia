import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsDevelopment } from '../utils/cmsMappers/developmentsMapper';
import EntryBlog from '../components/EntryBlog/entryBlog';

const DevelopmentDetails = pageData => {
  const developmentDetails = mapCmsDevelopment(pageData.pageContext);
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Rozwój i wychowanie');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <EntryBlog blog={developmentDetails} />;
};

export default DevelopmentDetails;
