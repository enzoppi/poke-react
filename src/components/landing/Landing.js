import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Layout from '../layout/Layout';
import Navbar from '../navbar/Navbar';
import './Landing.css';
import SectionsRoutes from '../sections/Sections-Routes';

function Landing(props) {
  return (
    <Layout>
      <BrowserRouter>
        <Header>
          <Navbar />
        </Header>
        <SectionsRoutes />
        <Footer />
      </BrowserRouter>
    </Layout>
  );
}

export default Landing;
