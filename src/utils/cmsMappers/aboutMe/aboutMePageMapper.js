import { mapCmsSeoData } from '../seoMapper';
import { mapAllCmsAboutMeArticles } from './aboutMeArticleMapper';

const map = (cmsAboutMePage) => {
  return {
    title: cmsAboutMePage.elements.title.value,
    articles: mapAllCmsAboutMeArticles(cmsAboutMePage.elements.articles.value),
    seo: mapCmsSeoData(cmsAboutMePage.elements),
  };
};

export { map as mapCmsAboutMePage };
