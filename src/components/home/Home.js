import React from 'react';
import Layout from '../layout/Layout';
import Header from '../header/Header';
import Search from '../search/Search';

function Home(props) {
  return (
    <Layout>
      <Header></Header>
      <Search />
    </Layout>
  );
}

export default Home;