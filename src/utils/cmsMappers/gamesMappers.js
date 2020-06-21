const map = cmsGame => {
  return {
    title: cmsGame.elements.title.value,
    shortDescription: cmsGame.elements.shortdescription.value,
    longDescription: cmsGame.elements.longdescription.value,
    image: cmsGame.elements.image.value[0],
    slug: cmsGame.elements.slug.value,
    detailsUrl: `/gry/${cmsGame.elements.slug.value}`,
  };
};

const mapAll = cmsGames => {
  return cmsGames.map(g => map(g));
};

export { map as mapCmsGame, mapAll as mapCmsGames };
