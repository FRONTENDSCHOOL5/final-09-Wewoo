import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import HelpPage from './HelpPage/HelpPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/help' element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
