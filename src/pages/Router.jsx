import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import HelpPage from './HelpPage/HelpPage';
import LoginPage from './LoginAndSignUpPage/LoginPage';
import SignUpPage from './LoginAndSignUpPage/SignUpPage';
import DonationPage from './DonationPage/DonationPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/help/*' element={<Outlet />}>
          <Route index element={<HelpPage />} />
          <Route path='donation/:donationId' element={<DonationPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
