const map = cmsTeachingResource => {
  return {
    title: cmsTeachingResource.elements.title.value,
    description: cmsTeachingResource.elements.description.value,
    image: cmsTeachingResource.elements.image.value[0],
    resource: cmsTeachingResource.elements.resource.value[0].url,
  };
};

const mapAll = cmsTeachingResources => {
  return cmsTeachingResources.map(a => map(a));
};

export { map as mapCmsTeachingResource, mapAll as mapCmsTeachingResources };
