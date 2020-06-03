const map = cmsArticle => {
  return {
    title: cmsArticle.elements.title.value,
    description: cmsArticle.elements.description.value,
    image: cmsArticle.elements.image.value[0],
  };
};

const mapAll = cmsArticles => {
  return cmsArticles.map(a => map(a));
};

export { map as mapCmsAboutMeArticle, mapAll as mapAllCmsAboutMeArticles };
