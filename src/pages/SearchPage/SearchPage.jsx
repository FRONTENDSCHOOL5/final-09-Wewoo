import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import backIcon from '../../assets/icons/common/back.png';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/icons/common/search-icon.png';

export default function SearchPage() {
  const url = 'https://api.mandarin.weniv.co.kr';
  const navigate = useNavigate();
  const { user, updateRefresh, updateUser, refresh } = useContext(UserContext);
  const [searchedUser, setSearchedUser] = useState('');
  const [searchedUserInfo, setSearchedUserInfo] = useState(null);
  const [isVisibleFollow, setIsVisibleFollow] = useState(false);
  const [searchedFollowingInfo, setSearchedFollowingInfo] = useState();

  const backToPage = () => {
    navigate(-1);
  };

  const searchUserBtnHandler = async (e) => {
    e.preventDefault();
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

  const getUserInfo = async () => {
    await updateUser(JSON.parse(localStorage.getItem('user')));
    console.log(user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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
  useEffect(() => {
    getMyFollowingInfo();
  }, [searchedUserInfo, refresh]);

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
        setSearchedFollowingInfo(data);
        // updateRefresh();
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };

  const goToUserProfile = (accountname) => {
    navigate(`/profile/${accountname}`);
  };

  return (
    <>
      <SearchPageHeader>
        <img src={backIcon} alt='뒤로가기버튼' onClick={backToPage} />
        <span>이웃해요</span>
      </SearchPageHeader>
      <SearchMain>
        <div>
          {/* <span>이웃을 검색해요</span> */}
          <form onSubmit={searchUserBtnHandler}>
            <Input
              type='text'
              name='searchInput'
              value={searchedUser}
              onChange={(e) => setSearchedUser(e.target.value)}
            />
            <button type='submit'>
              <img src={searchIcon} />
            </button>
          </form>
        </div>
        {searchedUserInfo && (
          <SearchedUserUl>
            {searchedUserInfo?.map((el, index) => {
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
                    <SearchedUserInfo
                      onClick={() => {
                        goToUserProfile(el.accountname);
                      }}
                    >
                      <ImgContainer>
                        <img
                          src={el.image ? el.image : 'https://mandarin.api.weniv.co.kr/Ellipse.png'}
                          alt='유저 프로필이미지'
                        />
                      </ImgContainer>
                      <SearchedUserInfoDesc>
                        <span>{el.username}</span>
                        <span>@{el.accountname}</span>
                      </SearchedUserInfoDesc>
                    </SearchedUserInfo>
                    {searchedFollowingInfo?.filter((el2) => el2._id === el._id).length === 0 &&
                      el._id !== user._id && (
                        <FollowBtn
                          onClick={() => {
                            followingUser(el);
                          }}
                          type={'add'}
                        >
                          팔로우
                        </FollowBtn>
                      )}
                    {searchedFollowingInfo?.filter((el2) => el2._id === el._id).length === 0 &&
                      el._id === user._id && (
                        <FollowBtn
                          onClick={() => {
                            followingUser(el);
                          }}
                          type={'delete'}
                        >
                          나
                        </FollowBtn>
                      )}
                    {!(searchedFollowingInfo?.filter((el2) => el2._id === el._id).length === 0) && (
                      <FollowBtn
                        onClick={() => {
                          unfollowingUser(el);
                        }}
                        type={'delete'}
                      >
                        삭제
                      </FollowBtn>
                    )}
                  </SearchedUserContainer>
                </li>
              );
            })}
          </SearchedUserUl>
        )}
        {searchedUserInfo?.length === 0 && <span>검색 결과가 없습니다.</span>}
      </SearchMain>
    </>
  );
}

const SearchedUserUl = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin-top: 30px;
  li {
    width: 85%;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;
  }
`;

const SearchMain = styled.div`
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    /* span {
      font-size: 12px;
      align-self: flex-start;
    } */
    form {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      gap: 15px;
      position: relative;
      input {
        display: block;
        /* height: 40px; */
        border-radius: 40px;
        padding: 12px 40px;
      }
      button {
        position: absolute;
        right: 16px;
        width: 25px;
        aspect-ratio: 1/1;
        object-fit: cover;
      }
    }
  }
`;

const SearchPageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 16px;
  padding: 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
  img {
    position: absolute;
    width: 15px;
    left: 20px;
    cursor: pointer;

    aspect-ratio: 15/15;
    object-fit: contain;
  }
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const FollowBtn = styled.button`
  padding: 10px;
  text-align: center;
  border-radius: 100px;
  border: 1px solid black;
  display: block;
  width: 48px;
  font-size: 10px;
  color: ${(props) => (props.type === 'add' ? 'white' : 'black')};
  background-color: ${(props) => (props.type === 'add' ? 'black' : 'white')};
`;

const SearchedUserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
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
  gap: 6px;
  span:nth-child(1) {
    /* font-weight: bold; */
    width: 130px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:nth-child(2) {
    color: #999;
    font-weight: normal;
    font-size: 13px;
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
