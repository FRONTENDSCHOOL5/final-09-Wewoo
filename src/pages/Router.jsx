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
import UpdatePost from './PostPage/UpdatePost/UpdatePost';
import DonationDetail from '../components/DonationPage/DonationDetail/DonationDetail';
import { UserContext } from '../context/UserContext';
import FollowerListPage from './ProfilePage/FollowerListPage/FollowerListPage';
import FollowingListPage from './ProfilePage/FollowingListPage/FollowingListPage';
import ProfileUpdatePage from './ProfilePage/ProfileUpdatePage/ProfileUpdatePage';

export default function AppRouter() {
  const { user, updateUser } = useContext(UserContext);

  const getUserInfo = async () => {
    await updateUser(JSON.parse(localStorage.getItem('user')));
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route>
            <Route path='/main' element={<MainPage />} />
            <Route path='/donation-detail' element={<DonationDetail />} />
            <Route path='/profile/:accountname/*' element={<Outlet />}>
              <Route index element={<ProfilePage />} />
              <Route path='follower/' element={<FollowerListPage />} />
              <Route path='following/' element={<FollowingListPage />} />
              <Route path='update/' element={<ProfileUpdatePage />} />
            </Route>
            <Route path='/help/*' element={<Outlet />}>
              <Route index element={<HelpPage />} />
              <Route path='donation/:donationId' element={<DonationPage />} />
            </Route>
            <Route path='/post/*' element={<Outlet />}>
              <Route index element={<PostPage />} />
              <Route path='add-post/' element={<AddPost />} />
              <Route path='detail/:postId' element={<PostDetail />} />
              <Route path='detail/:postId/update-post' element={<UpdatePost />} />
            </Route>
            <Route path='/prevent/*' element={<Outlet />}>
              <Route index element={<PreventPage />} />
              <Route path='info/:type' element={<Earthquake />} />
            </Route>
            <Route path='/search' element={<SearchPage />} />
            <Route path='/404' element={<ErrorPage />} />
            <Route path='*' element={<MainPage />} />
          </Route>
        ) : (
          <>
            <Route path='*' element={<LoginPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
