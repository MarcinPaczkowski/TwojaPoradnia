import React from 'react';
import './class.scss';
import { v4 as uuid } from 'uuid';
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
  return (
    <div className="class">
      <Section>
        <HeaderTitle title={classDetails.title} />
      </Section>
      <Section hasColor>
        <HorizontalTile
          imagePosition={TileImagePosition.LEFT}
          content={classDetails.section1}
        />
      </Section>
      <Section>
        <HorizontalText text={classDetails.section2.text} isHtml />
      </Section>
      <Section hasColor>
        <SubTitle title={classDetails.section3.title} />
        <div className="class__boxes-with-circles">
          {classDetails.section3.elements.map(element => (
            <BoxWithCircleImage
              text={element.text}
              image={element.image}
              key={uuid()}
            />
          ))}
        </div>
      </Section>
      <Section>
        <SubTitle title={classDetails.section4.title} />
        <div className="class__perks">
          {classDetails.section4.elements.map(element => (
            <SmallCard
              text={element.text}
              icon={element.image}
              key={uuid()}
              isHtml
            />
          ))}
        </div>
      </Section>
      <Section hasColor>
        <SubTitle title={classDetails.section5.title} />
        <DescriptionList elements={classDetails.section5.elements} />
      </Section>
      <Section>
        <TextWithCircleImage
          text={classDetails.section6.text}
          image={classDetails.section6.image}
          isHtml
        />
      </Section>
      <Section hasColor>
        <SubTitle title={classDetails.section7.title} />
        <div className="class__boxes">
          {classDetails.section7.elements.map(element => (
            <BoxText text={element.text} key={uuid()} isHtml />
          ))}
        </div>
      </Section>
      <Section>
        <SubTitle title={classDetails.section8.title} />
        <BlockOfTextWithButton
          content={classDetails.section8.content}
          link={classDetails.section8.link}
        />
      </Section>
    </div>
  );
};

export default Class;
