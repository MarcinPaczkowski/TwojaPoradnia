import React from 'react';
import './developments.scss';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import Section from '../Layout/Section/section';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';

const Developments = ({ developments }) => {
  return (
    <div className="developments">
      <Section>
        <HeaderTitle title="Rozwój i wychowanie" />
      </Section>
      <NegativeMarginWrapper>
        <Section isWide={true}>
          <HorizontalTiles
            tiles={developments.map(d => {
              return {
                title: d.title,
                description: d.shortDescription,
                image: d.image,
                url: d.urlToDetails,
              };
            })}
          />
        </Section>
      </NegativeMarginWrapper>
    </div>
  );
};

export default Developments;
