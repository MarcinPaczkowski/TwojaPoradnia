import React from 'react';
import Layout from '../components/Layout/layout';
import Home from '../components/Home/home';
import '../styles/style.scss';

const IndexPage = () => {
  return (
    <Layout isHome={true}>
      <Home />
    </Layout>
  );
};

export default IndexPage;
