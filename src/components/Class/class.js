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
  return (
    <div className="class">
      <Section>
        <HeaderTitle title={classDetails.title} />
      </Section>
      {classDetails.section1 && (
        <Section hasColor>
          <HorizontalTile
            imagePosition={TileImagePosition.LEFT}
            content={classDetails.section1}
          />
        </Section>
      )}
      {classDetails.section2 && (
        <Section>
          <HorizontalText text={classDetails.section2.text} isHtml />
        </Section>
      )}
      {classDetails.section3 && (
        <Section hasColor>
          <SubTitle title={classDetails.section3.title} />
          <div className="class__boxes-with-circles">
            {classDetails.section3?.elements?.map((element, i) => (
              <BoxWithCircleImage
                text={element.text}
                image={element.image}
                key={`${classDetails.section3.title}-${i}`}
              />
            ))}
          </div>
        </Section>
      )}
      {classDetails.section4 && (
        <Section>
          <SubTitle title={classDetails.section4.title} />
          <div className="class__perks">
            {classDetails.section4?.elements?.map((element, i) => (
              <SmallCard
                text={element.text}
                icon={element.image}
                key={`${classDetails.section4.title}-${i}`}
                isHtml
              />
            ))}
          </div>
        </Section>
      )}
      {classDetails.section5 && (
        <Section hasColor>
          <SubTitle title={classDetails.section5?.title} />
          <DescriptionList elements={classDetails.section5?.elements} />
        </Section>
      )}
      {classDetails.section6 && (
        <Section>
          <TextWithCircleImage
            text={classDetails.section6?.text}
            image={classDetails.section6?.image}
            isHtml
          />
        </Section>
      )}
      {classDetails.section7 && (
        <Section hasColor>
          <SubTitle title={classDetails.section7?.title} />
          <div className="class__boxes">
            {classDetails.section7?.elements?.map((element, i) => (
              <BoxText
                text={element.text}
                key={`${classDetails.section7.title}-${i}`}
                isHtml
              />
            ))}
          </div>
        </Section>
      )}
      {classDetails.section8 && (
        <Section>
          <SubTitle title={classDetails.section8?.title} />
          <BlockOfTextWithButton
            content={classDetails.section8?.content}
            link={classDetails.section8?.link}
          />
        </Section>
      )}
    </div>
  );
};

export default Class;
