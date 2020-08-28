import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/style.scss';
import { mapCmsGames } from '../utils/cmsMappers/gamesMappers';
import Games from '../components/Games/games';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const GamesPage = pageData => {
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
              publishdate {
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
  const layoutContext = useContext(LayoutContext);

  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Gry');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <Games games={games} />;
};

export default GamesPage;
