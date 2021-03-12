import React, { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import { buildBreadcrumbs } from '../utils/breadcrumbsHelpers';
import { mapCmsBook } from '../utils/cmsMappers/books/booksMapper';
import EntryBlog from '../components/EntryBlog/entryBlog';

const BookDetails = (pageData) => {
  const layoutContext = useContext(LayoutContext);
  const [bookDetails, setBookDetails] = useState(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const bookDetails = mapCmsBook(pageData.pageContext);
    const breadcrumbs = buildBreadcrumbs(pageData, 'Książki');
    setBookDetails(bookDetails);
    layoutContext.setBreadcrumbs(breadcrumbs);
    layoutContext.setSeo(bookDetails.seo);
  }, [pageData]);

  return (
    <>
      {bookDetails && (
        <>
          <EntryBlog blog={bookDetails} />
        </>
      )}
    </>
  );
};

export default BookDetails;
