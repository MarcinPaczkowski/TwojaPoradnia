const buildBreadcrumbs = (pageData, pageName, subPage) => {
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

  let breadcrumbs = [
    {
      url: '/',
      name: 'Strona główna',
    },
  ];

  if (subPage) {
    breadcrumbs = [
      ...breadcrumbs,
      {
        url: subPage.url,
        name: subPage.name,
      },
    ];
  }

  breadcrumbs = [
    ...breadcrumbs,
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
