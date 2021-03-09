import { mapCmsSeoData } from '../seoMapper';

const map = (cmsClass) => {
  const details = {
    title: cmsClass.elements.title.value,
    publishDate: cmsClass.elements.publishdate.value,
    image: cmsClass.elements.image.value[0],
    section1: cmsClass.elements.section1.value.length
      ? {
          title: cmsClass.elements.section1?.value[0]?.elements?.title?.value,
          description:
            cmsClass.elements.section1?.value[0]?.elements?.elements?.value[0]
              ?.elements?.text?.value,
          image:
            cmsClass.elements.section1?.value[0]?.elements?.elements?.value[0]
              ?.elements?.image?.value[0],
        }
      : null,
    section2: cmsClass.elements.section2.value.length
      ? {
          text: cmsClass.elements.section2?.value,
        }
      : null,
    section3: cmsClass.elements.section3.value.length
      ? {
          title: cmsClass.elements.section3?.value[0]?.elements?.title?.value,
          elements: cmsClass.elements.section3?.value[0]?.elements?.elements?.value?.map(
            (element) => {
              return {
                text: element?.elements?.text?.value,
                image: element?.elements?.image?.value[0],
              };
            }
          ),
        }
      : null,
    section4: cmsClass.elements.section4.value.length
      ? {
          title: cmsClass.elements.section4?.value[0]?.elements?.title?.value,
          elements: cmsClass.elements.section4?.value[0]?.elements?.elements?.value?.map(
            (element) => {
              return {
                text: element?.elements?.text?.value,
                image: element?.elements?.image?.value[0],
              };
            }
          ),
        }
      : null,
    section5: cmsClass.elements.section5.value.length
      ? {
          title: cmsClass.elements.section5?.value[0]?.elements?.title?.value,
          elements: cmsClass.elements.section5?.value[0]?.elements?.elements?.value?.map(
            (element) => {
              return {
                text: element?.elements?.text?.value,
                image: element?.elements?.image?.value[0],
              };
            }
          ),
        }
      : null,
    section6: cmsClass.elements.section6.value.length
      ? {
          text: cmsClass.elements.section6?.value[0]?.elements?.text?.value,
          image:
            cmsClass.elements.section6?.value[0]?.elements?.image?.value[0],
        }
      : null,
    section7: cmsClass.elements.section7.value.length
      ? {
          title: cmsClass.elements.section7?.value[0]?.elements?.title?.value,
          elements: cmsClass.elements.section7?.value[0]?.elements?.elements?.value?.map(
            (element) => {
              return {
                text: element?.elements?.text?.value,
              };
            }
          ),
        }
      : null,
    section8: cmsClass.elements.section8.value.length
      ? {
          title: cmsClass.elements.section8?.value[0]?.elements?.title?.value,
          content:
            cmsClass.elements.section8?.value[0]?.elements?.elements?.value[0]
              ?.elements?.text?.value,
          link: {
            text:
              cmsClass.elements.section8?.value[0]?.elements?.action?.value[0]
                ?.elements?.buttontext?.value,
            url:
              cmsClass.elements.section8?.value[0]?.elements?.action?.value[0]
                ?.elements?.link?.value,
          },
        }
      : null,
    seo: mapCmsSeoData(cmsClass.elements),
  };

  if (details.section2 && details.section2.text === '<p><br></p>')
    details.section2 = null;

  return details;
};

export { map as mapCmsClass };
