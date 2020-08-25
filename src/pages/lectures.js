import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsLectures } from '../utils/cmsMappers/lecturesMapper';
import Lectures from '../components/Lectures/lectures';

const LecturesPage = pageData => {
  const {
    allKontentItemLecture: { nodes: cmsLectures },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemLecture(
          sort: { order: ASC, fields: elements___eventdate___value }
        ) {
          nodes {
            elements {
              title {
                value
              }
              address {
                value
              }
              eventdate {
                value
              }
              description {
                value
              }
            }
          }
        }
      }
    `
  );

  const breadcrumbs = buildBreadcrumbs(pageData, 'Wykłady', {
    url: '/szkolenia-i-wyklady',
    name: 'Szkolenia i wykłady',
  });
  const lectures = mapCmsLectures(cmsLectures);

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Lectures lectures={lectures} />
    </Layout>
  );
};

export default LecturesPage;
