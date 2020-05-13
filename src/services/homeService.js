export const getHomeData = () => {
  const welcome = {
    backgroundImageAlt: 'Tło strony głównej',
    title: 'Zadbam o Ciebie i Twoją rodzinę',
    description:
      'Opowiedz mi o swoich problemach i razem znajdźmy ich rozwiązanie!',
  };

  const aboutMe = {
    imageAlt: 'Małgorzata Paczkowska zdjęcie',
    header: 'Poznajmy się!',
    title: 'Cześć, jestem Gosia!',
    paragraphs: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, optio.',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, iste tempore fugiat eveniet totam est sit consequuntur hic tenetur sint dignissimos! Perferendis cumque maiores deserunt in optio voluptatibus accusamus unde?',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui tempore, ipsa nulla laudantium reiciendis sed rem labore doloremque veniam exercitationem?',
    ],
    buttons: [
      {
        url: '/o-mnie',
        text: 'Więcej o mnie',
      },
    ],
  };

  return {
    welcome,
    aboutMe,
  };
};
