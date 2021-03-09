import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsDevelopment } from '../utils/cmsMappers/developments/developmentsMapper';
import EntryBlog from '../components/EntryBlog/entryBlog';
import GatsbyHelmet from '../components/Helmet/helmet';

const DevelopmentDetails = (pageData) => {
  const developmentDetails = mapCmsDevelopment(pageData.pageContext);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Rozwój i wychowanie');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={developmentDetails.seo}
        currentSiteUrl={pageData.location.href}
      />
      <EntryBlog blog={developmentDetails} />
    </>
  );
};

export default DevelopmentDetails;
