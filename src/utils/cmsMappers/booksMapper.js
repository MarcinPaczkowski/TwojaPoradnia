const map = cmsBook => {
  return {
    title: cmsBook.elements.title.value,
    shortDescription: cmsBook.elements.shortdescription.value,
    longDescription: cmsBook.elements.longdescription.value,
    image: cmsBook.elements.image.value[0],
    slug: cmsBook.elements.slug.value,
    detailsUrl: `/ksiazki/${cmsBook.elements.slug.value}`,
  };
};

const mapAll = cmsBooks => {
  return cmsBooks.map(b => map(b));
};

export { map as mapCmsBook, mapAll as mapCmsBooks };
