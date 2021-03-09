import { mapCmsSeoData } from '../seoMapper';

const map = (cmsGame) => {
  return {
    title: cmsGame.elements.title.value,
    publishDate: cmsGame.elements.publishdate.value,
    shortDescription: cmsGame.elements.shortdescription.value,
    image: cmsGame.elements.image.value[0],
    slug: cmsGame.elements.slug.value,
    detailsUrl: `/gry/${cmsGame.elements.slug.value}`,
  };
};

const mapAll = (cmsGames) => {
  return cmsGames.map((g) => map(g));
};

const mapDetails = (cmsGame) => {
  return {
    title: cmsGame.elements.title.value,
    headlineTitle: cmsGame.elements.headlinetitle?.value,
    headlineBackgroundImage: cmsGame.elements.headlinebackgroundimage?.value[0],
    publishDate: cmsGame.elements.publishdate.value,
    entry: cmsGame.elements.entry.value,
    author: 'Małgorzata Paczkowska',
    seo: mapCmsSeoData(cmsGame.elements),
  };
};

export { mapAll as mapCmsGames, mapDetails as mapCmsGame };
