import { mapCmsSeoData } from '../seoMapper';
import { mapCmsContactData } from './contactDataMapper';

const map = (cmsContactPage) => {
  return {
    contactData: mapCmsContactData(
      cmsContactPage.elements.contactdata.value[0]
    ),
    seo: mapCmsSeoData(cmsContactPage.elements),
  };
};

export { map as mapCmsContactPage };
