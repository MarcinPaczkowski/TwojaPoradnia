import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { useStaticQuery, graphql } from 'gatsby';
import { mapCmsGamesPage } from '../utils/cmsMappers/games/gamesPageMapper';
import Games from '../components/Games/games';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import GatsbyHelmet from '../components/Helmet/helmet';

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

  const gamesPage = mapCmsGamesPage(cmsGamesPage[0]);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Gry');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return (
    <>
      <GatsbyHelmet
        siteMetadata={gamesPage.seo}
        currentSiteUrl={pageData.location.href}
      />
      <Games title={gamesPage.title} games={gamesPage.games} />
    </>
  );
};

export default GamesPage;
