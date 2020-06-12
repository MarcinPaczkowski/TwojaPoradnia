const map = cmsHomePage => {
  return {
    welcome: {
      title: cmsHomePage.elements.title.value,
      description: cmsHomePage.elements.description.value,
      image: cmsHomePage.elements.image.value[0],
    },
    articles: cmsHomePage.elements.articles.value.map(article => {
      return {
        title: article.elements.title.value,
        content: article.elements.content.value,
        image: article.elements.image.value[0],
        actions: article.elements.actions.value.map(action => {
          return {
            buttonText: action.elements.buttontext.value,
            link: `/${action.elements.link.value}`,
          };
        }),
      };
    }),
  };
};

export { map as mapCmsHomePage };
