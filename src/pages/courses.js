import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const CoursesPage = pageData => {
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Szkolenia', {
      url: '/szkolenia-i-wyklady',
      name: 'Szkolenia i wykłady',
    });
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <p>Szkolenia</p>;
};

export default CoursesPage;
