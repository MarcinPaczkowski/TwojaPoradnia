const map = cmsBooks => {
  return {
    title: cmsBooks.elements.title.value,
    shortDescription: cmsBooks.elements.shortdescription.value,
    image: cmsBooks.elements.image.value[0],
    detailsUrl: `/ksiazki/${cmsBooks.elements.slug.value}`,
  };
};

const mapAll = cmsBooks => {
  return cmsBooks.map(b => map(b));
};

export { map as mapCmsBook, mapAll as mapCmsBooks };
