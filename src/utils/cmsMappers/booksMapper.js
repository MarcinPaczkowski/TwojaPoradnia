const map = cmsBook => {
  return {
    title: cmsBook.elements.title.value,
    publishDate: cmsBook.elements.publishdate.value,
    shortDescription: cmsBook.elements.shortdescription.value,
    image: cmsBook.elements.image.value[0],
    slug: cmsBook.elements.slug.value,
    detailsUrl: `/ksiazki/${cmsBook.elements.slug.value}`,
  };
};

const mapAll = cmsBooks => {
  return cmsBooks.map(b => map(b));
};

const mapDetails = cmsBook => {
  return {
    title: cmsBook.elements.title.value,
    headlineTitle: cmsBook.elements.headlinetitle.value,
    headlineBackgroundImage: cmsBook.elements.headlinebackgroundimage.value[0],
    publishDate: cmsBook.elements.publishdate.value,
    entry: cmsBook.elements.entry.value,
    author: 'Małgorzata Paczkowska',
  };
};

export { mapAll as mapCmsBooks, mapDetails as mapCmsBook };
