import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import HelpPage from './HelpPage/HelpPage';
<<<<<<< HEAD
import PreventPage from './PreventPage/PreventPage';
import LoginPage from './LoginAndSignUpPage/LoginPage';
import SignUpPage from './LoginAndSignUpPage/SignUpPage';
import Earthquake from './PreventPage/components/Earthquake';
=======
import LoginPage from './LoginAndSignUpPage';
import SignUpPage from './LoginAndSignUpPage/SignUpPage';
import ErrorPage from './LoginAndSignUpPage/Error404Page';
import FirstScreenPage from './LoginAndSignUpPage/IntroScreen';
>>>>>>> develop

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
        <Route path='/404' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
