const map = ({
  seo__metatitle: title,
  seo__metadescription: description,
  seo__metakeywords: keyWords,
}) => {
  return {
    title: title.value,
    description: description.value,
    keywords: keyWords.value,
  };
};

export { map as mapCmsSeoData };
