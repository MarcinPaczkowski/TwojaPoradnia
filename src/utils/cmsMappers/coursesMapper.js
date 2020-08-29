const map = cmsCourse => {
  const details = {
    title: cmsCourse.elements.title.value,
    section1: cmsCourse.elements.section1.value.length
      ? {
          text: cmsCourse.elements.section1?.value,
        }
      : null,
    section2: cmsCourse.elements.section2.value.length
      ? {
          title: cmsCourse.elements.section2?.value[0]?.elements?.title?.value,
          description:
            cmsCourse.elements.section2?.value[0]?.elements?.elements?.value[0]
              ?.elements?.text?.value,
          image:
            cmsCourse.elements.section2?.value[0]?.elements?.elements?.value[0]
              ?.elements?.image?.value[0],
        }
      : null,
    section3: cmsCourse.elements.section3.value.length
      ? {
          title: cmsCourse.elements.section3?.value[0]?.elements?.title?.value,
          description:
            cmsCourse.elements.section3?.value[0]?.elements?.elements?.value[0]
              ?.elements?.text?.value,
          image:
            cmsCourse.elements.section3?.value[0]?.elements?.elements?.value[0]
              ?.elements?.image?.value[0],
        }
      : null,
    section4: cmsCourse.elements.section4.value.length
      ? {
          text: cmsCourse.elements.section4?.value,
        }
      : null,
    section5: cmsCourse.elements.section5.value.length
      ? {
          text: cmsCourse.elements.section5?.value,
        }
      : null,
    section6: cmsCourse.elements.section6.value.length
      ? {
          title: cmsCourse.elements.section6?.value[0]?.elements?.title?.value,
          content:
            cmsCourse.elements.section6?.value[0]?.elements?.elements?.value[0]
              ?.elements?.text?.value,
          link: {
            text:
              cmsCourse.elements.section6?.value[0]?.elements?.action?.value[0]
                ?.elements?.buttontext?.value,
            url:
              cmsCourse.elements.section6?.value[0]?.elements?.action?.value[0]
                ?.elements?.link?.value,
          },
        }
      : null,
    section7: cmsCourse.elements.section7.value.length
      ? {
          text: cmsCourse.elements.section7?.value,
        }
      : null,
  };

  if (details.section1 && details.section1.text === '<p><br></p>')
    details.section1 = null;
  if (details.section4 && details.section4.text === '<p><br></p>')
    details.section4 = null;
  if (details.section5 && details.section5.text === '<p><br></p>')
    details.section5 = null;
  if (details.section7 && details.section7.text === '<p><br></p>')
    details.section7 = null;

  return details;
};

export { map as mapCmsCourse };
