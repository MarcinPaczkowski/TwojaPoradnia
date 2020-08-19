import React from 'react';
import './coursesAndLectures.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { v4 as uuid } from 'uuid';
import Section from '../Layout/Section/section';
import HeaderTitle from '../Shared/HeaderTitle/headerTitle';
import NegativeMarginWrapper from '../Layout/NegativeMarginWrapper/negativeMarginWrapper';
import ImageTile from '../Shared/ImageTile/imageTile';

const CoursesAndLectures = () => {
  const { courseImage, lectureImage } = useStaticQuery(
    graphql`
      query {
        courseImage: file(relativePath: { eq: "szkolenie1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        lectureImage: file(relativePath: { eq: "wyklad1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  const tiles = [
    {
      link: {
        url: '/szkolenia',
        text: 'Szkolenia',
      },
      image: {
        src: courseImage.childImageSharp.fluid,
        alt: 'Szkolenia',
      },
    },
    {
      link: {
        url: '/wyklady',
        text: 'Wykłady',
      },
      image: {
        src: lectureImage.childImageSharp.fluid,
        alt: 'Wykład',
      },
    },
  ];
  return (
    <div className="courses-lectures">
      <Section>
        <HeaderTitle title="Szkolenia i wykłady" />
      </Section>
      <NegativeMarginWrapper>
        <Section>
          <div className="courses-lectures__items">
            <ImageTile tile={tiles[0]} key={uuid()} />
            <ImageTile tile={tiles[1]} key={uuid()} />
          </div>
        </Section>
      </NegativeMarginWrapper>
    </div>
  );
};

export default CoursesAndLectures;
