import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import HelpPage from './HelpPage/HelpPage';
import PreventPage from './PreventPage/PreventPage';
import LoginPage from './LoginAndSignUpPage/LoginPage';
import SignUpPage from './LoginAndSignUpPage/SignUpPage';
import Earthquake from './PreventPage/components/Earthquake';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/prevent/*' element={<Outlet />}>
          <Route index element={<PreventPage />} />
          <Route path='info/:type' element={<Earthquake />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
