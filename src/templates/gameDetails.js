import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsGame } from '../utils/cmsMappers/games/gamesMappers';
import EntryBlog from '../components/EntryBlog/entryBlog';
import GatsbyHelmet from '../components/Helmet/helmet';

const GameDetails = (pageData) => {
  const gameDetails = mapCmsGame(pageData.pageContext);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Gry');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={gameDetails.seo}
        currentSiteUrl={pageData.location.href}
      />
      <EntryBlog blog={gameDetails} />
    </>
  );
};

export default GameDetails;
