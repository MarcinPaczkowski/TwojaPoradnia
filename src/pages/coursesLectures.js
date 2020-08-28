import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import CoursesAndLectures from '../components/CoursesAndLectures/coursesAndLectures';

const CoursesAndLecturesPage = pageData => {
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Szkolenia i wykłady');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <CoursesAndLectures />;
};

export default CoursesAndLecturesPage;
