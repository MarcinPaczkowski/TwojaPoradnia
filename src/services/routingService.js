const getRoutingData = () => {
  const routings = [
    {
      name: 'Strona główna',
      link: '/',
      order: 0,
      isActive: true,
      isLeft: true,
    },
    { name: 'O mnie', link: '/o-mnie', order: 1, isActive: true, isLeft: true },
    {
      name: 'Zajęcia',
      link: '/zajecia',
      order: 2,
      isActive: true,
      isLeft: true,
    },
    {
      name: 'Szkolenia i wykłady',
      link: '/szkolenia-i-wyklady',
      order: 3,
      isActive: true,
      isLeft: true,
    },
    {
      name: 'Książki',
      link: '/ksiazki',
      order: 4,
      isActive: true,
      isLeft: true,
    },

    {
      name: 'Gry',
      link: '/gry',
      order: 1,
      isActive: true,
      isLeft: false,
    },
    {
      name: 'Rozwój i wychowanie',
      link: '/rozwoj-i-wychowanie',
      order: 2,
      isActive: true,
      isLeft: false,
    },
    {
      name: 'Materiały',
      link: '/materialy',
      order: 3,
      isActive: true,
      isLeft: false,
    },
    {
      name: 'Kontakt',
      link: '/kontakt',
      order: 4,
      isActive: true,
      isLeft: false,
    },
  ];

  return routings;
};

export default getRoutingData;
