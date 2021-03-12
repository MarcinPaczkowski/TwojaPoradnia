import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsGame } from '../utils/cmsMappers/games/gamesMappers';
import EntryBlog from '../components/EntryBlog/entryBlog';

const GameDetails = (pageData) => {
  const layoutContext = useContext(LayoutContext);
  const [gameDetails, setGameDetails] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const gameDetails = mapCmsGame(pageData.pageContext);
    const breadcrumbs = buildBreadcrumbs(pageData, 'Gry');
    setGameDetails(gameDetails);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(gameDetails.seo);
  }, [pageData]);

  return (
    <>
      {gameDetails && (
        <>
          <EntryBlog blog={gameDetails} />
        </>
      )}
    </>
  );
};

export default GameDetails;
