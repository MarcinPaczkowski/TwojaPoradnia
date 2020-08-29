import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
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

  const lectures = mapCmsLectures(cmsLectures);
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Wykłady', {
      url: '/szkolenia-i-wyklady',
      name: 'Szkolenia i wykłady',
    });
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <Lectures lectures={lectures} />;
};

export default LecturesPage;
