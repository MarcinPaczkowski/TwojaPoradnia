import { mapCmsSeoData } from '../seoMapper';
import { mapCmsContactData } from '../contactDataMapper';

const map = (cmsContactPageData) => {
  return {
    contactData: mapCmsContactData(
      cmsContactPageData.elements.contactdata.value[0]
    ),
    seo: mapCmsSeoData(cmsContactPageData.elements),
  };
};

export { map as mapCmsContactPageData };
