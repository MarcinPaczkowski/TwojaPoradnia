import { mapCmsSeoData } from './seoMapper';

const map = (cmsHomePage) => {
  return {
    welcome: {
      title: cmsHomePage.elements.title.value,
      description: cmsHomePage.elements.description.value,
      image: cmsHomePage.elements.image.value[0],
    },
    articles: cmsHomePage.elements.articles.value.map((article) => {
      return {
        title: article.elements.title.value,
        content: article.elements.content.value,
        image: article.elements.image.value[0],
        actions: article.elements.actions.value.map((action) => {
          return {
            buttonText: action.elements.buttontext.value,
            link: `${action.elements.link.value}`,
          };
        }),
        quotation: mapQuotation(article.elements.quotation),
      };
    }),
    seo: mapCmsSeoData(cmsHomePage.elements),
  };
};

const mapQuotation = (quotation) => {
  if (!quotation) return null;
  if (quotation.value === '<p><br></p>') return null;
  return quotation.value;
};

export { map as mapCmsHomePage };
