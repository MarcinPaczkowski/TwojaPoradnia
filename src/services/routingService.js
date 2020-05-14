const getRoutingData = () => {
  const routings = [
    { name: 'O mnie', link: '/o-mnie', order: 1, isActive: true, isLeft: true },
    {
      name: 'Zajęcia',
      link: '/zajecia',
      order: 2,
      isActive: true,
      isLeft: true,
    },
    {
      name: 'Materiały',
      link: '/materialy',
      order: 3,
      isActive: true,
      isLeft: true,
    },
    {
      name: 'Rodzice',
      link: '/rodzice',
      order: 4,
      isActive: true,
      isLeft: true,
    },

    {
      name: 'Dzieci',
      link: '/dzieci',
      order: 1,
      isActive: true,
      isLeft: false,
    },
    { name: 'Blog', link: '/blog', order: 2, isActive: true, isLeft: false },
    {
      name: 'Rezerwacja',
      link: '/rezerwacja',
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
