import React from 'react';
import './lectures.scss';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import Section from '../Layout/Section/section';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';
import Lecture from './Lecture/lecture';

const Lectures = ({ lectures }) => {
  return (
    <div className="lectures">
      <Section>
        <HeaderTitle title="Wykłady" />
      </Section>
      <NegativeMarginWrapper>
        <Section isWide>
          <div className="lectures__items">
            {lectures.map((l, i) => (
              <Section hasColor={i % 2 === 0} key={`${l.title}-${i}`}>
                <Lecture lecture={l} />
              </Section>
            ))}
          </div>
        </Section>
      </NegativeMarginWrapper>
    </div>
  );
};

export default Lectures;
