import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from './UserContext';

export default function SearchUserTest() {
  const url = 'https://api.mandarin.weniv.co.kr';
  const { user, updateRefresh } = useContext(UserContext);
  const [searchedUser, setSearchedUser] = useState('');
  const [searchedUserInfo, setSearchedUserInfo] = useState(null);
  // const [isVisibleFollow, setIsVisibleFollow] = useState(false);

  const searchUserBtnHandler = async () => {
    try {
      const response = await fetch(url + `/user/searchuser/?keyword=${searchedUser}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log(searchedUser);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSearchedUserInfo(data);
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     console.log(user);
  //     if (user?.following.filter((el) => el === searchedUserInfo._id).length === 0) {
  //       setIsVisibleFollow(true);
  //     } else {
  //       setIsVisibleFollow(false);
  //     }
  //   }
  // }, [searchedUserInfo]);

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

  return (
    <section className='container'>
      <div className='wrapper'>
        <div>
          <label htmlFor='searchInput'>유저 검색</label>
          <Input
            type='text'
            name='searchInput'
            value={searchedUser}
            onChange={(e) => setSearchedUser(e.target.value)}
          />
          <button onClick={searchUserBtnHandler}>검색</button>
        </div>
        {searchedUserInfo && (
          <ul>
            {searchedUserInfo?.map((el, index) => {
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
        )}
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

const Input = styled.input`
  border: 1px solid black;
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
