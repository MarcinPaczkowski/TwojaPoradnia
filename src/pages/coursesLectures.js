import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import CoursesAndLectures from '../components/CoursesAndLectures/coursesAndLectures';

const CoursesAndLecturesPage = pageData => {
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Szkolenia i wykłady');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <CoursesAndLectures />;
};

export default CoursesAndLecturesPage;
