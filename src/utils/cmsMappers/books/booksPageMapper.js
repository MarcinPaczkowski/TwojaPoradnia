import { mapCmsSeoData } from '../seoMapper';
import { mapCmsBooks } from './booksMapper';

const map = (cmsBooksPage) => {
  return {
    title: cmsBooksPage.elements.title.value,
    books: mapCmsBooks(cmsBooksPage.elements.books.value),
    seo: mapCmsSeoData(cmsBooksPage.elements),
  };
};

export { map as mapCmsBooksPage };
