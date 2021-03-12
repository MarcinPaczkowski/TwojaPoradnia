import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsClass } from '../utils/cmsMappers/classes/detailsMapper';
import Class from '../components/Class/class';

const ClassDetails = (pageData) => {
  const layoutContext = useContext(LayoutContext);
  const [classDetails, setClassDetails] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const classDetails = mapCmsClass(pageData.pageContext);
    const breadcrumbs = buildBreadcrumbs(pageData, 'Zajęcia');
    setClassDetails(classDetails);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(classDetails.seo);
  }, [pageData]);

  return (
    <>
      {classDetails && (
        <>
          <Class classDetails={classDetails} />
        </>
      )}
    </>
  );
};

export default ClassDetails;
