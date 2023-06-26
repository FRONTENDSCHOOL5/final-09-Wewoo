import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import styled from 'styled-components';

export default function ProfileTest() {
  const { user, refresh, updateRefresh } = useContext(UserContext);
  const url = 'https://api.mandarin.weniv.co.kr';
  const [follower, setFollower] = useState();
  const [following, setFollowing] = useState();
  const [searchedFollowerInfo, setSearchedFollowerInfo] = useState();
  const [searchedFollowingInfo, setSearchedFollowingInfo] = useState();

  const followInfoHandler = async () => {
    try {
      const response = await fetch(url + `/profile/${user.accountname}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setFollower(data.profile.followerCount);
        setFollowing(data.profile.followingCount);
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const followingUser = async (userInfo) => {
    console.log(userInfo);
    try {
      const response = await fetch(url + `/profile/${userInfo.accountname}/follow`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const unfollowingUser = async (userInfo) => {
    console.log(userInfo);
    try {
      const response = await fetch(url + `/profile/${userInfo.accountname}/unfollow`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const getMyFollowingInfo = async () => {
    console.log(user);
    try {
      const response = await fetch(url + `/profile/${user.accountname}/following`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSearchedFollowerInfo(data);
        // updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const getMyFollowerInfo = async () => {
    console.log(user);
    try {
      const response = await fetch(url + `/profile/${user.accountname}/follower`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSearchedFollowingInfo(data);
        // updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  useEffect(() => {
    if (user) {
      followInfoHandler();
      getMyFollowingInfo();
      getMyFollowerInfo();
    }
  }, [user, refresh]);

  return (
    <section className='container'>
      <div className='wrapper'>
        <div>
          <div>
            <span>내가 팔로우한 이웃 </span>
            <span>{following}</span>
          </div>
          <ul>
            {searchedFollowerInfo?.map((el, index) => {
              let isVisibleFollow = false;
              // if (user) {
              console.log(user);
              if (
                user?.following.filter((el2) => {
                  console.log(el2);
                  return el2 === el._id;
                }).length === 0
              ) {
                isVisibleFollow = true;
              }
              // }
              console.log(isVisibleFollow);
              return (
                <li key={index}>
                  <SearchedUserContainer>
                    <SearchedUserInfo>
                      <ImgContainer>
                        <img src={el.image} alt='유저 프로필이미지' />
                      </ImgContainer>
                      <SearchedUserInfoDesc>
                        <span>{el.username}</span>
                        <span>@{el.accountname}</span>
                      </SearchedUserInfoDesc>
                    </SearchedUserInfo>
                    {isVisibleFollow && (
                      <FollowBtn
                        onClick={() => {
                          followingUser(el);
                        }}
                      >
                        팔로우
                      </FollowBtn>
                    )}
                    {!isVisibleFollow && (
                      <FollowBtn
                        onClick={() => {
                          unfollowingUser(el);
                        }}
                      >
                        삭제
                      </FollowBtn>
                    )}
                  </SearchedUserContainer>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div>
            <span>나를 팔로우한 이웃 </span>
            <span>{follower}</span>
          </div>
          <ul>
            {searchedFollowingInfo?.map((el, index) => {
              let isVisibleFollow = false;
              // if (user) {
              console.log(user);
              if (
                user?.following?.filter((el2) => {
                  console.log(el2);
                  return el2 === el._id;
                }).length === 0
              ) {
                isVisibleFollow = true;
              }
              // }
              console.log(isVisibleFollow);
              return (
                <li key={index}>
                  <SearchedUserContainer>
                    <SearchedUserInfo>
                      <ImgContainer>
                        <img src={el.image} alt='유저 프로필이미지' />
                      </ImgContainer>
                      <SearchedUserInfoDesc>
                        <span>{el.username}</span>
                        <span>@{el.accountname}</span>
                      </SearchedUserInfoDesc>
                    </SearchedUserInfo>
                    {isVisibleFollow && (
                      <FollowBtn
                        onClick={() => {
                          followingUser(el);
                        }}
                      >
                        팔로우
                      </FollowBtn>
                    )}
                    {!isVisibleFollow && (
                      <FollowBtn
                        onClick={() => {
                          unfollowingUser(el);
                        }}
                      >
                        삭제
                      </FollowBtn>
                    )}
                  </SearchedUserContainer>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

const FollowBtn = styled.button`
  display: block;
  width: 40px;
`;

const SearchedUserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  gap: 20px;
`;

const SearchedUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SearchedUserInfoDesc = styled.div`
  display: flex;
  flex-direction: column;
  span:nth-child(1) {
    font-weight: bold;
    width: 100px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:nth-child(2) {
    color: #999;
  }
`;

const ImgContainer = styled.div`
  width: 40px;
  overflow: hidden;
  border-radius: 100px;

  img {
    display: block;
    width: 100%;

    aspect-ratio: 60/60;
    object-fit: cover;
  }
`;
