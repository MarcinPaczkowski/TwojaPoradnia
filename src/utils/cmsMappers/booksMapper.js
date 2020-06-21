const map = cmsBook => {
  return {
    title: cmsBook.elements.title.value,
    shortDescription: cmsBook.elements.shortdescription.value,
    image: cmsBook.elements.image.value[0],
    detailsUrl: `/ksiazki/${cmsBook.elements.slug.value}`,
  };
};

const mapAll = cmsBooks => {
  return cmsBooks.map(b => map(b));
};

export { map as mapCmsBook, mapAll as mapCmsBooks };
