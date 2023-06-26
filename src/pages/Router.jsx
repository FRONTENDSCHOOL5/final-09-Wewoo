import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import HelpPage from './HelpPage/HelpPage';
import LoginPage from './LoginAndSignUpPage/LoginPage';
import SignUpPage from './LoginAndSignUpPage/SignUpPage';
import SignUpTest from './TestPage/SignUpTest';
import LoginTest from './TestPage/LoginTest';
import AppTest from './TestPage/AppTest';
import IndexTest from './TestPage/IndexTest';
import CurrentDonations from './TestPage/CurrentDonations';
import ProfilePage from './TestPage/ProfilePage';
import ProfileUpdate from './TestPage/ProfileUpdate';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/test-sign-up' element={<SignUpTest />} />
        <Route path='/test-login' element={<LoginTest />} />
        <Route path='/test-main' element={<IndexTest />} />
        <Route path='/test-current-donation' element={<CurrentDonations />} />
        <Route path='/test-profile' element={<ProfilePage />} />
        <Route path='/test-update' element={<ProfileUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}
