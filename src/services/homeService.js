import backgroundImage from '../images/testBgr.jpg';

const getWelcomeData = () => {
  const welcome = {
    backgroundImageLink: backgroundImage,
    title: 'Zadbam o Ciebie i Twoją rodzinę',
    description:
      'Opowiedz mi o swoich problemach i razem znajdźmy ich rozwiązanie!',
  };

  return welcome;
};

export default getWelcomeData;
