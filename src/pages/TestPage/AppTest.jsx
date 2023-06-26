import React from 'react';
import MainTest from './MainTest';
import LoginTest from './LoginTest';
import ProfileTest from './ProfileTest';
import SearchUserTest from './SearchUserTest';
import PostsTest from './PostsTest';
import BarChart from './ChartTest';

export default function AppTest() {
  return (
    <div>
      <LoginTest />
      <MainTest />
      <ProfileTest />
      <SearchUserTest />
      <PostsTest />
    </div>
  );
}
