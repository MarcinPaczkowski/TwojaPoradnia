import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsGame } from '../utils/cmsMappers/gamesMappers';
import EntryBlog from '../components/EntryBlog/entryBlog';

const GameDetails = pageData => {
  const gameDetails = mapCmsGame(pageData.pageContext);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Gry');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <EntryBlog blog={gameDetails} />;
};

export default GameDetails;
