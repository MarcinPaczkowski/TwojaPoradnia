import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsDevelopment } from '../utils/cmsMappers/developments/developmentsMapper';
import EntryBlog from '../components/EntryBlog/entryBlog';

const DevelopmentDetails = (pageData) => {
  const layoutContext = useContext(LayoutContext);
  const [developmentDetails, setDevelopmentDetails] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const developmentDetails = mapCmsDevelopment(pageData.pageContext);
    const breadcrumbs = buildBreadcrumbs(pageData, 'Rozwój i wychowanie');
    setDevelopmentDetails(developmentDetails);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(developmentDetails.seo);
  }, [pageData]);

  return (
    <>
      {developmentDetails && (
        <>
          <EntryBlog blog={developmentDetails} />
        </>
      )}
    </>
  );
};

export default DevelopmentDetails;
