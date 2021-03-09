import React from 'react';
import GatsbyHelmet from '../components/Helmet/helmet';
import NotFound from '../components/NotFound/notFound';

const NotFoundPage = pageData => (
  <>
    <GatsbyHelmet
      siteMetadata={{ title: '404', description: 'Nie znaleziono strony' }}
      currentSiteUrl={pageData.location.href}
    />
    <NotFound />
  </>
);

export default NotFoundPage;
