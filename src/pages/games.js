import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import { mapCmsGamesPage } from '../utils/cmsMappers/games/gamesPageMapper';
import Games from '../components/Games/games';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';

const GamesPage = (pageData) => {
  const {
    allKontentItemGamespage: { nodes: cmsGamesPage },
  } = useStaticQuery(
    graphql`
      query {
        allKontentItemGamespage {
          nodes {
            elements {
              title {
                value
              }
              games {
                value {
                  ... on kontent_item_game {
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
              seo__metatitle {
                value
              }
              seo__metadescription {
                value
              }
              seo__metakeywords {
                value
              }
            }
          }
        }
      }
    `
  );

  const layoutContext = useContext(LayoutContext);
  const [gamesPage, setGamesPage] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const gamesPage = mapCmsGamesPage(cmsGamesPage[0]);
    const breadcrumbs = buildBreadcrumbs(pageData, gamesPage.title);
    setGamesPage(gamesPage);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(gamesPage.seo);
  }, [pageData]);

  return (
    <>
      {gamesPage && (
        <>
          <Games title={gamesPage.title} games={gamesPage.games} />
        </>
      )}
    </>
  );
};

export default GamesPage;
