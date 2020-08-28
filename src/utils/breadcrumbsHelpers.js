const buildBreadcrumbs = (pageData, pageName, subPage) => {
  let paths = [];
  console.log(pageData);
  pageData.path
    .split('/')
    .filter(p => p !== '')
    .map(p => `/${p}`)
    .reduce((a, c) => {
      const path = `${a}${c}`;
      paths.push(path);
      return path;
    }, []);
  console.log(paths);

  const breadcrumbs = [
    {
      url: '/',
      name: 'Strona główna',
    },
  ];

  if (subPage) {
    breadcrumbs.push({
      url: subPage.url,
      name: subPage.name,
    });
  }

  breadcrumbs.push({
    url: paths[0],
    name: pageName,
  });

  if (paths.length > 1) {
    breadcrumbs.push({
      url: paths[1],
      name: pageData.pageContext.elements.title.value,
    });
  }

  return breadcrumbs;
};

export { buildBreadcrumbs };
