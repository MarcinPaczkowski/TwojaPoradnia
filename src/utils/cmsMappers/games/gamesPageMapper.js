import { mapCmsSeoData } from '../seoMapper';
import { mapCmsGames } from './gamesMappers';

const map = (cmsGamesPage) => {
  return {
    title: cmsGamesPage.elements.title.value,
    games: mapCmsGames(cmsGamesPage.elements.games.value),
    seo: mapCmsSeoData(cmsGamesPage.elements),
  };
};

export { map as mapCmsGamesPage };
