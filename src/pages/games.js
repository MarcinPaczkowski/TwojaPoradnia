import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';
import { mapCmsGames } from '../utils/cmsMappers/gamesMappers';
import Games from '../components/Games/games';

const GamesPage = () => {
  const {
    allKontentItemGame: { nodes: cmsGames },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemGame {
          nodes {
            elements {
              title {
                value
              }
              shortdescription {
                value
              }
              image {
                value {
                  description
                  fluid(maxWidth: 720) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
              slug {
                value
              }
            }
          }
        }
      }
    `
  );

  const games = mapCmsGames(cmsGames);

  return (
    <Layout>
      <Games games={games} />
    </Layout>
  );
};

export default GamesPage;
