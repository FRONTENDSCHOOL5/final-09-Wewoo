import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, redirect, Navigate } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import PostPage from './PostPage/PostPage';
import AddPost from './PostPage/AddPost/AddPost';
import PostDetail from './PostPage/PostDetail/PostDetail';
import HelpPage from './HelpPage/HelpPage';
import PreventPage from './PreventPage/PreventPage';
import Earthquake from './PreventPage/components/Earthquake';
import LoginPage from './LoginAndSignUpPage';
import SignUpPage from './LoginAndSignUpPage/SignUpPage';
import ProfilePage from './ProfilePage/ProfilePage';
import DonationPage from './DonationPage/DonationPage';
import ErrorPage from './LoginAndSignUpPage/Error404Page';
import SearchPage from './SearchPage/SearchPage';
import DonationDetail from '../components/DonationPage/DonationDetail/DonationDetail';
import { UserContext } from '../context/UserContext';

const NoMatch = () => {
  const { user } = useContext(UserContext);

  if (user === null) {
    // 로그인하지 않은 경우 LoginPage로 리디렉션
    return <Navigate to='/' />;
  } else {
    // 로그인한 경우 MainPage로 리디렉션
    return <Navigate to='/main' />;
  }
};

export default function AppRouter() {
  const { user, updateUser } = useContext(UserContext);

  const getUserInfo = async () => {
    await updateUser(JSON.parse(localStorage.getItem('user')));
    console.log(user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<MainPage />} /> */}

        <Route path='/' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        {user ? (
          <>
            <Route path='/main' element={<MainPage />} />
            <Route path='/donation-detail' element={<DonationDetail />} />
            <Route path='/profile/:accountname' element={<ProfilePage />} />
            <Route path='/help/*' element={<Outlet />}>
              <Route index element={<HelpPage />} />
              <Route path='donation/:donationId' element={<DonationPage />} />
            </Route>
            <Route path='/post/*' element={<Outlet />}>
              <Route index element={<PostPage />} />
              <Route path='add-post/' element={<AddPost />} />
              <Route path='detail/:postId' element={<PostDetail />} />
            </Route>
            <Route path='/prevent/*' element={<Outlet />}>
              <Route index element={<PreventPage />} />
              <Route path='info/:type' element={<Earthquake />} />
            </Route>
            <Route path='/search' element={<SearchPage />} />
            <Route path='/404' element={<ErrorPage />} />
            <Route path='*' element={<NoMatch />} />
          </>
        ) : (
          <>
            <Route path='*' element={<NoMatch />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
