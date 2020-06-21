const buildBreadcrumbs = (pageData, pageName) => {
  let paths = [];
  pageData.path
    .split('/')
    .filter(p => p !== '')
    .map(p => `/${p}`)
    .reduce((a, c) => {
      const path = `${a}${c}`;
      paths.push(path);
      return path;
    }, []);

  const breadcrumbs = [
    {
      url: '/',
      name: 'Strona główna',
    },
    {
      url: paths[0],
      name: pageName,
    },
  ];

  if (paths.length > 1) {
    breadcrumbs.push({
      url: paths[1],
      name: pageData.pageContext.elements.title.value,
    });
  }

  return breadcrumbs;
};

export { buildBreadcrumbs };
