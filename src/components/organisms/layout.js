import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../navigation/navBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
