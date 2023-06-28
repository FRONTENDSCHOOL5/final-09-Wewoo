import React, { useState, useContext, useEffect } from 'react';

import TopBar from '../../components/common/TopBar/TopBar';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import BottomNavBar from '../../components/common/BottomNavBar/BottomNavBar';
import {
  MainHeader,
  MainSponsor,
  MainVolunteer,
  MainFollow,
  MainFollowList,
} from './MainPageStyled';
import { UserContext } from '../../context/UserContext';

// 예시로 넣은 이미지 임포트 (마지막에 빼야한다)
import BarChart from '../../components/BarChart/BarChart';
import Slider from '../../components/common/Slider/Slider';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function MainPage() {
  const url = 'https://api.mandarin.weniv.co.kr';
  const [donations, setDonations] = useState(0);
  const { user, updateUser, refresh, updateRefresh } = useContext(UserContext);
  const [searchedFollowerInfo, setSearchedFollowerInfo] = useState();
  const [searchedFollowingInfo, setSearchedFollowingInfo] = useState();
  const navigate = useNavigate();

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
        setSearchedFollowerInfo(data);
        // updateRefresh();
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };

  const getUserInfo = async () => {
    await updateUser(JSON.parse(localStorage.getItem('user')));
    console.log(user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (user) {
      getMyFollowingInfo();
      getMyFollowerInfo();
    }
  }, [user]);

  const goToUserProfile = (accountname) => {
    navigate(`/profile/${accountname}`);
  };

  const logoutHandler = () => {
    localStorage.setItem('user', null);
    localStorage.setItem('accessToken', null);
    updateUser('');
    navigate('/');
  };

  return (
    <>
      <h1 className='a11y-hidden'> 메인 페이지 </h1>

      <MainHeader>
        <TopBar iconColor={'#fff'} />
        <div className='main-user-info'>
          <div className='main-text-info'>
            <p className='main-text'>
              {user?.username} 님 <br />
              안전한 하루 보내세요!
            </p>
            {/* <p className='user-info'> */}
            {/* 안양시 동안구 */}
            {/* <button type='button'> &gt; </button>{' '} */}
            {/* </p> */}
          </div>

          <img src={user?.image} alt='프로필사진' />
          <LogOutButton onClick={logoutHandler}>로그아웃</LogOutButton>
        </div>
      </MainHeader>

      {/*       <SlideUI>
        <div>
          <SlideItem w='200' bgImg={weatherImg}>
            <span> 동안구 </span>
            <p> 미세먼지 없는 화창한 날씨예요</p>
          </SlideItem>
          <SlideItem w='200' bgImg={weatherImg}>
            <span> 동안구 </span>
            <p> 미세먼지 없는 화창한 날씨예요</p>
          </SlideItem>
        </div>
      </SlideUI> */}

      <MainVolunteer>
        <SectionHeader
          firstHeadText='봉사 일정이 있어요'
          // secondHeadText=''
          // num='2'
          // firstBtnText='건의'
          // secondBtnText='일정 보기'
          padding={true}
        ></SectionHeader>
        <Slider type={'volun'} />
      </MainVolunteer>
      <MainFollow>
        <SectionHeader
          firstHeadText='내가 팔로우한'
          secondHeadText='이웃이에요'
          // num='132'
          // firstBtnText='명의'
          // secondBtnText='이웃 보기'
        ></SectionHeader>
        <MainFollowList>
          {searchedFollowingInfo?.map((el, index) => {
            return (
              <li key={index} onClick={() => goToUserProfile(el.accountname)}>
                <div>
                  <img src={el.image} alt='프로필 사진' />
                </div>
                <span>{el.username}</span>
              </li>
            );
          })}
        </MainFollowList>
      </MainFollow>
      <MainFollow>
        <SectionHeader
          firstHeadText='나를 팔로우한'
          secondHeadText='이웃이에요'
          // num='132'
          // firstBtnText='명의'
          // secondBtnText='이웃 보기'
        ></SectionHeader>
        <MainFollowList>
          {searchedFollowerInfo?.map((el, index) => {
            return (
              <li key={index} onClick={() => goToUserProfile(el.accountname)}>
                <div>
                  <img src={el.image} alt='프로필 사진' />
                </div>
                <span>{el.username}</span>
              </li>
            );
          })}
        </MainFollowList>
      </MainFollow>
      <MainSponsor>
        <SectionHeader
          firstHeadText='그동안'
          secondHeadText='이만큼 후원했어요'
          firstBtnText='자세히 보기'
        ></SectionHeader>
        <article>
          <span> 총 누적 후원금 </span>
          <span> {donations?.toLocaleString()}원</span>
        </article>
        <BarChart color={'#191919'} setDonations={setDonations} />
      </MainSponsor>
      <BottomNavBar />
    </>
  );
}

const LogOutButton = styled.div`
  position: absolute;
  color: #999;
  font-size: 10px;
  right: 30px;
  bottom: -15px;
  transform: translateX(50%);
  cursor: pointer;
`;
