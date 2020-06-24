const map = cmsDevelopment => {
  return {
    title: cmsDevelopment.elements.title.value,
    shortDescription: cmsDevelopment.elements.shortdescription.value,
    longDescription: cmsDevelopment.elements.longdescription.value,
    image: cmsDevelopment.elements.image.value[0],
    slug: cmsDevelopment.elements.slug.value,
    urlToDetails: `/rozwoj-i-wychowanie/${cmsDevelopment.elements.slug.value}`,
  };
};

const mapAll = cmsDevelopments => {
  return cmsDevelopments.map(d => map(d));
};

export { map as mapCmsDevelopment, mapAll as mapAllCmsDevelopments };
