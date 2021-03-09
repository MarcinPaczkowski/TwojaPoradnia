import moment from 'moment';
import { mapCmsSeoData } from '../seoMapper';

const mapClass = (cmsClass) => {
  const publishDate = moment(cmsClass.elements.publishdate.value).utc();
  return {
    title: cmsClass.elements.title.value,
    shortDescription: cmsClass.elements.shortdescription.value,
    image: cmsClass.elements.image.value[0],
    slug: cmsClass.elements.slug.value,
    urlToDetails: `/zajecia/${cmsClass.elements.slug.value}`,
    publishDate: publishDate,
    formattedPublishDate: publishDate.format('DD.MM.YYYY HH:mm'),
    order: cmsClass.elements.order.value,
  };
};

const map = (cmsClassesPage) => {
  return {
    title: cmsClassesPage.elements.title.value,
    classes: cmsClassesPage.elements.classes.value
      .map((c) => mapClass(c))
      .sort((a, b) => {
        return a.order - b.order;
      }),
    seo: mapCmsSeoData(cmsClassesPage.elements),
  };
};

export { map as mapCmsClassesPage };
