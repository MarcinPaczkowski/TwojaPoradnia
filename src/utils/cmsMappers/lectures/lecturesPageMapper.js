import { mapCmsSeoData } from '../seoMapper';
import { mapCmsLectures } from './lecturesMapper';

const map = (cmsLecturesPage) => {
  return {
    title: cmsLecturesPage.elements.title.value,
    lectures: mapCmsLectures(cmsLecturesPage.elements.lectures.value),
    seo: mapCmsSeoData(cmsLecturesPage.elements),
    action: {
      buttonText:
        cmsLecturesPage.elements.linktopage.value[0].elements.buttontext.value,
      link: `${cmsLecturesPage.elements.linktopage.value[0].elements.link.value}`,
    },
    image: cmsLecturesPage.elements.image.value[0],
  };
};

export { map as mapCmsLecturesPage };
