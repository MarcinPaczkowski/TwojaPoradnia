import React from 'react';
import './class.scss';
import Section from '../Layout/Section/section';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import HorizontalTile from '../Shared/HorizontalTile/horizontalTile';
import TileImagePosition from '../Shared/HorizontalTile/tileImagePosition';
import HorizontalText from '../Shared/HorizontalText/horizontalText';
import BoxWithCircleImage from '../Shared/BoxWithCircleImage/boxWithCircleImage';
import SmallCard from '../Shared/SmallCard/smallCard';
import SubTitle from '../Shared/SubTitle/subTitle';
import DescriptionList from '../Shared/DescriptionList/descriptionList';
import TextWithCircleImage from '../Shared/TextWithCircleImage/textWithCircleImage';
import BoxText from '../Shared/BoxText/boxText';
import BlockOfTextWithButton from '../Shared/BlockOfTextWithButton/blockOfTextWithButton';

const Class = ({ classDetails }) => {
  const content1 = {
    title: 'Tytuł',
    description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus dignissimos eligendi similique amet quo harum, minus soluta libero vero doloribus iste a. Adipisci qui vel dicta veniam eius maxime!
     Sapiente quis nisi dolores magni, ipsum minima hic expedita sit aspernatur consectetur eveniet illum beatae repellat atque facere excepturi alias sed fuga rerum aperiam eius adipisci quasi. A, labore quibusdam.
    Molestias facilis incidunt deserunt officia itaque dignissimos repudiandae ipsum. Qui, sunt. Vel repellendus nisi dolor, excepturi eaque minus eveniet iusto aliquid doloribus ex perspiciatis assumenda, sint ratione labore facilis voluptatibus?
    Similique itaque consectetur accusantium quasi libero. Velit laudantium asperiores harum labore molestias, totam non. Aliquam asperiores at alias, pariatur quasi aut? Sapiente nulla natus laboriosam quod pariatur? Voluptatem, adipisci id.</p>`,
    image: classDetails.image,
  };
  const content2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facere a autem fuga et suscipit accusamus, doloribus cum culpa maxime repellat reprehenderit nihil. Beatae illo est pariatur voluptatem quia quibusdam.Illum beatae impedit non id laudantium cum optio tenetur vel voluptatibus vitae excepturi temporibus nihil consectetur necessitatibus asperiores, velit consequatur quas? Cumque pariatur ea molestias amet facilis, dolor eligendi alias?`;
  const content3 = [
    { text: 'Lorem ipsum dolor sit amet.', icon: {} },
    { text: 'Lorem ipsum dolor sit amet.', icon: {} },
    { text: 'Lorem ipsum dolor sit amet.', icon: {} },
    { text: 'Lorem ipsum dolor sit amet.', icon: {} },
    { text: 'Lorem ipsum dolor sit amet.', icon: {} },
    { text: 'Lorem ipsum dolor sit amet.', icon: {} },
  ];
  const content4 = {
    content: [
      '<h3>Testowowowow</h3>',
      '<p>Lorem ipsum dolor sit amet.</p>',
      '<p>Lorem ipsum dolor sit amet.</p>',
      '<p>Lorem ipsum dolor sit amet.</p>',
    ],
    link: {
      text: 'Zapisz się',
      url: '/kontakt',
    },
  };

  return (
    <div className="class">
      <Section hasColor={false}>
        <HeaderTitle title={classDetails.title} />
      </Section>
      <Section hasColor={true}>
        <HorizontalTile
          imagePosition={TileImagePosition.LEFT}
          content={content1}
        />
      </Section>
      <Section hasColor={false}>
        <HorizontalText text={content2} />
      </Section>
      <Section hasColor={true}>
        <SubTitle title="Testowy tytuł" />
        <div className="class__boxes-with-circles">
          <BoxWithCircleImage />
          <BoxWithCircleImage />
        </div>
      </Section>
      <Section hasColor={false}>
        <SubTitle title="Testowy tytuł" />
        <div className="class__perks">
          <SmallCard text="Lorem ipsum dolor sit amet." />
          <SmallCard text="Lorem ipsum dolor sit amet." />
          <SmallCard text="Lorem ipsum dolor sit amet." />
          <SmallCard text="Lorem ipsum dolor sit amet." />
          <SmallCard text="Lorem ipsum dolor sit amet." />
          <SmallCard text="Lorem ipsum dolor sit amet." />
        </div>
      </Section>
      <Section hasColor={true}>
        <SubTitle title="Testowy tytuł" />
        <DescriptionList elements={content3} />
      </Section>
      <Section hasColor={false}>
        <TextWithCircleImage text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ex odit, quisquam veniam aperiam dolores sed deserunt labore ipsam iste? Excepturi aspernatur quibusdam recusandae quos fugit cumque debitis, repellendus ducimus?Impedit neque repellendus ea, voluptatum repellat error architecto distinctio! Ipsa, sed mollitia alias quidem magni odio obcaecati eum, hic officia, repellendus dolorem! Neque dolores quasi minima perferendis nisi numquam! Deleniti." />
      </Section>
      <Section hasColor={true}>
        <SubTitle title="Testowy tytuł" />
        <div className="class__boxes">
          <BoxText text="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." />
          <BoxText text="Lorem ipsum dolor sit amet." />
          <BoxText text="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." />
        </div>
      </Section>
      <Section hasColor={false}>
        <SubTitle title="Testowy tytuł" />
        <BlockOfTextWithButton
          content={content4.content}
          link={content4.link}
        />
      </Section>
    </div>
  );
};

export default Class;
