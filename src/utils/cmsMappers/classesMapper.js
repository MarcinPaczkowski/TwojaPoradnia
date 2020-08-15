const map = cmsClass => {
  return {
    title: cmsClass.elements.title.value,
    shortDescription: cmsClass.elements.shortdescription.value,
    image: cmsClass.elements.image.value[0],
    slug: cmsClass.elements.slug.value,
    urlToDetails: `/zajecia/${cmsClass.elements.slug.value}`,
  };
};

const mapAll = cmsClasses => {
  return cmsClasses.map(c => map(c));
};

export { map as mapCmsClass, mapAll as mapAllCmsClasses };
