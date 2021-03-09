import { mapCmsSeoData } from '../seoMapper';
import { mapAllCmsDevelopments } from './developmentsMapper';

const map = (cmsDevelopmentPage) => {
  return {
    title: cmsDevelopmentPage.elements.title.value,
    developments: mapAllCmsDevelopments(
      cmsDevelopmentPage.elements.developments.value
    ),
    seo: mapCmsSeoData(cmsDevelopmentPage.elements),
  };
};

export { map as mapCmsDevelopmentsPage };
