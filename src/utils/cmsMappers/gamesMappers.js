const map = cmsGame => {
  return {
    title: cmsGame.elements.title.value,
    shortDescription: cmsGame.elements.shortdescription.value,
    image: cmsGame.elements.image.value[0],
    detailsUrl: `/gry/${cmsGame.elements.slug.value}`,
  };
};

const mapAll = cmsGames => {
  console.log(cmsGames);
  return cmsGames.map(g => map(g));
};

export { map as mapCmsGame, mapAll as mapCmsGames };
