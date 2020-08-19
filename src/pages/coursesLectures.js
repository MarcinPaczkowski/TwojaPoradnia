import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import CoursesAndLectures from '../components/CoursesAndLectures/coursesAndLectures';

const CoursesAndLecturesPage = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Szkolenia i wykłady');

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <CoursesAndLectures />
    </Layout>
  );
};

export default CoursesAndLecturesPage;
