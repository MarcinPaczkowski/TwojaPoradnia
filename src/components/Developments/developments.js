import React from 'react';
import './developments.scss';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import Section from '../Layout/Section/section';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';

const Developments = ({ title, developments }) => {
  return (
    <div className="developments">
      <Section>
        <HeaderTitle title={title} />
      </Section>
      <NegativeMarginWrapper>
        <Section isWide>
          <HorizontalTiles
            tiles={developments.map((d) => {
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
