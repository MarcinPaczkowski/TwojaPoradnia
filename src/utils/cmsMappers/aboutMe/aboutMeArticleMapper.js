const map = (cmsArticle) => {
  return {
    title: cmsArticle.elements.title.value,
    shortDescription: cmsArticle.elements.description.value,
    image: cmsArticle.elements.image.value[0],
    order: cmsArticle.elements.order.value,
  };
};

const mapAll = (cmsArticles) => {
  return cmsArticles
    .map((a) => map(a))
    .sort((a, b) => {
      return a.order - b.order;
    });
};

export { map as mapCmsAboutMeArticle, mapAll as mapAllCmsAboutMeArticles };
