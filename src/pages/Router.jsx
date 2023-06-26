import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import PostPage from './PostPage/PostPage';
import AddPost from './PostPage/AddPost/AddPost';
import PostDetail from './PostPage/PostDetail/PostDetail';
import HelpPage from './HelpPage/HelpPage';
import LoginPage from './LoginAndSignUpPage/LoginPage';
import SignUpPage from './LoginAndSignUpPage/SignUpPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post/*' element={<Outlet />}>
          <Route index element={<PostPage />} />
          <Route path='add-post/' element={<AddPost />} />
          {/* <Route path=':id' element={<PostDetail />} /> */}
          <Route path='detail/' element={<PostDetail />} />
        </Route>
        <Route path='/help' element={<HelpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
