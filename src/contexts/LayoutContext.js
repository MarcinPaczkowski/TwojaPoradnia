import { createContext } from 'react';

const LayoutContext = createContext({
  breadcrumbs: null,
  setBreadcrumbs: breadcrumbs => {},
});

export default LayoutContext;
