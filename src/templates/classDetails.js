import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsClass } from '../utils/cmsMappers/classes/detailsMapper';
import Class from '../components/Class/class';

const ClassDetails = pageData => {
  const classDetails = mapCmsClass(pageData.pageContext);
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Zajęcia');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <Class classDetails={classDetails} />;
};

export default ClassDetails;
