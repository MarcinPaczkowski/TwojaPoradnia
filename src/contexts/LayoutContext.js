import { createContext } from 'react';

const LayoutContext = createContext({
  breadcrumbs: null,
  seo: null,
  setBreadcrumbs: (breadcrumbs) => {},
  setSeo: (seo) => {},
});

export default LayoutContext;
