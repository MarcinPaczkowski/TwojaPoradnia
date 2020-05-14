import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './materials.scss';
import Tile from '../Shared/Tile/tile';

const Materials = () => {
  const { testImage } = useStaticQuery(
    graphql`
      query {
        testImage: file(relativePath: { eq: "test1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const tile = {
    image: {
      src: testImage.childImageSharp.fluid,
      alt: 'Karta',
    },
    title: 'Karta wdzięczności',
    description:
      'Wyrażanie wdzięczności stanowi podstawę szczęścia całej rodziny. Korzystaj codziennie.',
    link: {
      url:
        'https://myapple.pl/uploads/image/file/c/6/c/big_4af807db-ab1b-412d-bab1-146dc4604c6c.jpg',
      text: 'Pobierz',
    },
  };
  return (
    <div className="materials">
      <h1 className="materials__title">Materiały</h1>
      <div className="materials__grid">
        <Tile tile={tile}></Tile>
        <Tile tile={tile}></Tile>
        <Tile tile={tile}></Tile>
        <Tile tile={tile}></Tile>
        <Tile tile={tile}></Tile>
        <Tile tile={tile}></Tile>
        <Tile tile={tile}></Tile>
        <Tile tile={tile}></Tile>
      </div>
    </div>
  );
};

export default Materials;
