const map = cmsDevelopment => {
  return {
    title: cmsDevelopment.elements.title.value,
    publishDate: cmsDevelopment.elements.publishdate.value,
    shortDescription: cmsDevelopment.elements.shortdescription.value,
    image: cmsDevelopment.elements.image.value[0],
    slug: cmsDevelopment.elements.slug.value,
    urlToDetails: `/rozwoj-i-wychowanie/${cmsDevelopment.elements.slug.value}`,
  };
};

const mapAll = cmsDevelopments => {
  return cmsDevelopments.map(d => map(d));
};

const mapDetails = cmsDevelopment => {
  return {
    title: cmsDevelopment.elements.title.value,
    headlineTitle: cmsDevelopment.elements.headlinetitle?.value,
    headlineBackgroundImage:
      cmsDevelopment.elements.headlinebackgroundimage?.value[0],
    publishDate: cmsDevelopment.elements.publishdate.value,
    entry: cmsDevelopment.elements.entry.value,
    author: 'Małgorzata Paczkowska',
  };
};

export { mapDetails as mapCmsDevelopment, mapAll as mapAllCmsDevelopments };
