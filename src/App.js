// import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/Register';
import LoginPage from './pages/Login';
import Layout from './components/organisms/layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
