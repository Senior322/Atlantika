import Footer from 'components/footer/Footer';
import Header from 'components/header/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Loyaut() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}
