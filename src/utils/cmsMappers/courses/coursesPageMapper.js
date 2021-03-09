import { mapCmsSeoData } from '../seoMapper';
import { mapCmsCourse } from './coursesMapper';

const map = (cmsCoursesPage) => {
  return {
    title: cmsCoursesPage.elements.title.value,
    course: mapCmsCourse(cmsCoursesPage.elements.course.value[0]),
    seo: mapCmsSeoData(cmsCoursesPage.elements),
    action: {
      buttonText:
        cmsCoursesPage.elements.linktopage.value[0].elements.buttontext.value,
      link: `${cmsCoursesPage.elements.linktopage.value[0].elements.link.value}`,
    },
    image: cmsCoursesPage.elements.image.value[0],
  };
};

export { map as mapCmsCoursesPage };
