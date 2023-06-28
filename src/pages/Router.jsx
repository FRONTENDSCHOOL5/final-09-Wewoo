import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import PostPage from './PostPage/PostPage';
import AddPost from './PostPage/AddPost/AddPost';
import PostDetail from './PostPage/PostDetail/PostDetail';
import HelpPage from './HelpPage/HelpPage';
import PreventPage from './PreventPage/PreventPage';
import Earthquake from './PreventPage/components/Earthquake';
import LoginPage from './LoginAndSignUpPage';
import SignUpPage from './LoginAndSignUpPage/SignUpPage';
import SignUpTest from './TestPage/SignUpTest';
import LoginTest from './TestPage/LoginTest';
import AppTest from './TestPage/AppTest';
import IndexTest from './TestPage/IndexTest';
import CurrentDonations from './TestPage/CurrentDonations';
import ProfilePage from './TestPage/ProfilePage';
import ProfileUpdate from './TestPage/ProfileUpdate';
import DonationPage from './DonationPage/DonationPage';
import ErrorPage from './LoginAndSignUpPage/Error404Page';
import ChatIntroPage from './ChatPage/ChatIntroPage';
import ChatRoomPage from './ChatPage/ChatRoomPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/help/*' element={<Outlet />}>
          <Route index element={<HelpPage />} />
          <Route path='donation/:donationId' element={<DonationPage />} />
        </Route>
        <Route path='/post/*' element={<Outlet />}>
          <Route index element={<PostPage />} />
          <Route path='add-post/' element={<AddPost />} />
          <Route path='detail/' element={<PostDetail />} />
        </Route>
        <Route path='/prevent/*' element={<Outlet />}>
          <Route index element={<PreventPage />} />
          <Route path='info/:type' element={<Earthquake />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/test-sign-up' element={<SignUpTest />} />
        <Route path='/test-login' element={<LoginTest />} />
        <Route path='/test-main' element={<IndexTest />} />
        <Route path='/test-current-donation' element={<CurrentDonations />} />
        <Route path='/test-profile' element={<ProfilePage />} />
        <Route path='/test-update' element={<ProfileUpdate />} />
        <Route path='/404' element={<ErrorPage />} />
        <Route path='/chat' element={<ChatIntroPage />} />
        <Route path='/chat-room' element={<ChatRoomPage />} />
      </Routes>
    </BrowserRouter>
  );
}
