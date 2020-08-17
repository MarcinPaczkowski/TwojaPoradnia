const map = cmsClass => {
  return {
    title: cmsClass.elements.title.value,
    publishDate: cmsClass.elements.publishdate.value,
    image: cmsClass.elements.image.value[0],
    section1: {
      title: cmsClass.elements.section1?.value[0]?.elements?.title?.value,
      description:
        cmsClass.elements.section1?.value[0]?.elements?.elements?.value[0]
          ?.elements?.text?.value,
      image:
        cmsClass.elements.section1?.value[0]?.elements?.elements?.value[0]
          ?.elements?.image?.value[0],
    },
    section2: {
      text: cmsClass.elements.section2?.value,
    },
    section3: {
      title: cmsClass.elements.section3?.value[0]?.elements?.title?.value,
      elements: cmsClass.elements.section3?.value[0]?.elements?.elements?.value?.map(
        element => {
          return {
            text: element?.elements?.text?.value,
            image: element?.elements?.image?.value[0],
          };
        }
      ),
    },
    section4: {
      title: cmsClass.elements.section4?.value[0]?.elements?.title?.value,
      elements: cmsClass.elements.section4?.value[0]?.elements?.elements?.value?.map(
        element => {
          return {
            text: element?.elements?.text?.value,
            image: element?.elements?.image?.value[0],
          };
        }
      ),
    },
    section5: {
      title: cmsClass.elements.section5?.value[0]?.elements?.title?.value,
      elements: cmsClass.elements.section5?.value[0]?.elements?.elements?.value?.map(
        element => {
          return {
            text: element?.elements?.text?.value,
            image: element?.elements?.image?.value[0],
          };
        }
      ),
    },
    section6: {
      text: cmsClass.elements.section6?.value[0]?.elements?.text?.value,
      image: cmsClass.elements.section6?.value[0]?.elements?.image?.value[0],
    },
    section7: {
      title: cmsClass.elements.section7?.value[0]?.elements?.title?.value,
      elements: cmsClass.elements.section7?.value[0]?.elements?.elements?.value?.map(
        element => {
          return {
            text: element?.elements?.text?.value,
          };
        }
      ),
    },
    section8: {
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
    },
  };
};

export { map as mapCmsClass };
