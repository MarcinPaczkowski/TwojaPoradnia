import React from 'react';
import './course.scss';
import Section from '../Layout/Section/section';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import SubTitle from '../Shared/SubTitle/subTitle';
import HorizontalTile from '../Shared/HorizontalTile/horizontalTile';
import TileImagePosition from '../Shared/HorizontalTile/tileImagePosition';
import TileImageObjectFit from '../Shared/HorizontalTile/tileImageObjectFit';
import HorizontalText from '../Shared/HorizontalText/horizontalText';
import BlockOfTextWithButton from '../Shared/BlockOfTextWithButton/blockOfTextWithButton';

const Course = ({ course }) => {
  return (
    <div className="course">
      <Section>
        <HeaderTitle title={course.title} />
      </Section>
      {course.section7 && (
        <Section hasColor>
          <HorizontalTile
            imagePosition={TileImagePosition.LEFT}
            content={course.section7}
          />
        </Section>
      )}
      {course.section1 && (
        <Section>
          <HorizontalText text={course.section1.text} isHtml />
        </Section>
      )}
      {course.section2 && (
        <Section hasColor>
          <HorizontalTile
            imagePosition={TileImagePosition.RIGHT}
            content={course.section2}
            objectFit={TileImageObjectFit.CONTAIN}
          />
        </Section>
      )}
      {course.section3 && (
        <Section>
          <HorizontalTile
            imagePosition={TileImagePosition.LEFT}
            content={course.section3}
          />
        </Section>
      )}
      {course.section4 && (
        <Section hasColor>
          <HorizontalText text={course.section4.text} isHtml />
        </Section>
      )}
      {course.section5 && (
        <Section>
          <HorizontalText text={course.section5.text} isHtml />
        </Section>
      )}
      {course.section6 && (
        <Section hasColor>
          <SubTitle title={course.section6?.title} />
          <BlockOfTextWithButton
            content={course.section6?.content}
            link={course.section6?.link}
          />
        </Section>
      )}
    </div>
  );
};

export default Course;
