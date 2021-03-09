import { mapCmsSeoData } from '../seoMapper';
import { mapCmsTeachingResources } from './teachingResourcesMapper';

const map = (cmsTeachingResourcesPage) => {
  return {
    title: cmsTeachingResourcesPage.elements.title.value,
    teachingResources: mapCmsTeachingResources(
      cmsTeachingResourcesPage.elements.teachingresources.value
    ),
    seo: mapCmsSeoData(cmsTeachingResourcesPage.elements),
  };
};

export { map as mapCmsTeachingResourcesPage };
