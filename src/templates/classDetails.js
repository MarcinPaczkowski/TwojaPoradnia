import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsClass } from '../utils/cmsMappers/classes/detailsMapper';
import Class from '../components/Class/class';
import GatsbyHelmet from '../components/Helmet/helmet';

const ClassDetails = (pageData) => {
  const classDetails = mapCmsClass(pageData.pageContext);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Zajęcia');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={classDetails.seo}
        currentSiteUrl={pageData.location.href}
      />
      <Class classDetails={classDetails} />
    </>
  );
};

export default ClassDetails;
