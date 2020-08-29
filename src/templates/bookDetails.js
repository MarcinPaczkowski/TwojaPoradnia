import React, { useEffect, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsBook } from '../utils/cmsMappers/booksMapper';
import EntryBlog from '../components/EntryBlog/entryBlog';

const BookDetails = pageData => {
  const bookDetails = mapCmsBook(pageData.pageContext);
  const layoutContext = useContext(LayoutContext);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const breadcrumbs = buildBreadcrumbs(pageData, 'Książki');
    layoutContext.setBreadcrumbs(breadcrumbs);
  }, [pageData]);

  return <EntryBlog blog={bookDetails} />;
};

export default BookDetails;
