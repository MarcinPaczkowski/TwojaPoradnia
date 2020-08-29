import moment from 'moment';

const map = cmsClass => {
  const publishDate = moment(cmsClass.elements.publishdate.value).utc();
  return {
    title: cmsClass.elements.title.value,
    shortDescription: cmsClass.elements.shortdescription.value,
    image: cmsClass.elements.image.value[0],
    slug: cmsClass.elements.slug.value,
    urlToDetails: `/zajecia/${cmsClass.elements.slug.value}`,
    publishDate: publishDate,
    formattedPublishDate: publishDate.format('DD.MM.YYYY HH:mm'),
  };
};

const mapAll = cmsClasses => {
  return cmsClasses.map(c => map(c));
};

export { mapAll as mapAllCmsClasses };
