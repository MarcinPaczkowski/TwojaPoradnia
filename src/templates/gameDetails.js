import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsGame } from '../utils/cmsMappers/gamesMappers';
import EntryBlog from '../components/EntryBlog/entryBlog';

const GameDetails = pageData => {
  const breadcrumbs = buildBreadcrumbs(pageData, 'Gry');
  const gameDetails = mapCmsGame(pageData.pageContext);
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <EntryBlog blog={gameDetails} />
    </Layout>
  );
};

export default GameDetails;
