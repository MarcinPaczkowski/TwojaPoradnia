import React from 'react';
import './classes.scss';
import HorizontalTiles from '../Shared/HorizontalTiles/horizontalTiles';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import Section from '../Layout/Section/section';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';

const Classes = ({ classes }) => {
  return (
    <div className="classes">
      <Section>
        <HeaderTitle title="Zajęcia" />
      </Section>
      <NegativeMarginWrapper>
        <Section isWide={true}>
          <HorizontalTiles
            tiles={classes.map(c => {
              return {
                title: c.title,
                description: c.shortDescription,
                image: c.image,
                url: c.urlToDetails,
              };
            })}
          />
        </Section>
      </NegativeMarginWrapper>
    </div>
  );
};

export default Classes;
