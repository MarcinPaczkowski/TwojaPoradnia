import { mapCmsSeoData } from './seoMapper';

const map = (cmsCoursesAndLecturesPage) => {
  return {
    title: cmsCoursesAndLecturesPage.elements.title.value,
    seo: mapCmsSeoData(cmsCoursesAndLecturesPage.elements),
    subPages: cmsCoursesAndLecturesPage.elements.pages.value.map((page) =>
      mapSubPage(page)
    ),
  };
};

const mapSubPage = (cmsSubPage) => {
  return {
    title: cmsSubPage.elements.title.value,
    action: {
      buttonText:
        cmsSubPage.elements.linktopage.value[0].elements.buttontext.value,
      link: `${cmsSubPage.elements.linktopage.value[0].elements.link.value}`,
    },
    image: cmsSubPage.elements.image.value[0],
  };
};

export { map as mapCmsCoursesAndLecturesPage };
