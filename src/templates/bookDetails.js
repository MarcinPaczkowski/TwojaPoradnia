import React from 'react';
import Layout from '../components/Layout/layout';
import '../styles/style.scss';

const BookDetails = data => {
  console.log(data);
  return (
    <Layout>
      <p>Szczegóły</p>
    </Layout>
  );
};

export default BookDetails;
