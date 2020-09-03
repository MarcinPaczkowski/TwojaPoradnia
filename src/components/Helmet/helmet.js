import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const GatsbyHelmet = ({ siteMetadata, currentSiteUrl }) => {
  const getMetaKeywords = (site, siteMetadata) => {
    return `${
      siteMetadata && siteMetadata.keywords ? `, ${siteMetadata.keywords}` : ``
    }${site.siteMetadata.keywords}`;
  };

  const { site, logo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            siteName
          }
        }
        logo: file(relativePath: { eq: "Twoja-Pora-Dnia-logo.png" }) {
          publicURL
        }
      }
    `
  );

  const metaKeywords = getMetaKeywords(site, siteMetadata);
  console.log(metaKeywords);

  const metaTitle = siteMetadata?.title || site.siteMetadata.title || '';
  const metaDescription =
    siteMetadata?.description || site.siteMetadata.description || '';

  return (
    <Helmet>
      <html lang="pl" />
      <title>{`${metaTitle} | ${site.siteMetadata.siteName}`}</title>
      <link rel="canonical" href={currentSiteUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <meta itemprop="name" content={site.siteMetadata.author} />
      <meta itemprop="description" content={metaDescription} />
      <meta itemprop="keywords" content={metaKeywords} />
      <meta
        itemprop="image"
        content={`${site.siteMetadata.siteUrl}${logo.publicURL}`}
      />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl" />
      <meta
        property="og:image"
        content={`${site.siteMetadata.siteUrl}${logo.publicURL}`}
      />
      <meta name="twitter:card" content="Podsumowanie" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};

export default GatsbyHelmet;
