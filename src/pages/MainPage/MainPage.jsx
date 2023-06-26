import React from 'react';

import TopBar from '../../components/common/TopBar/TopBar';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';
import BottomNavBar from '../../components/common/BottomNavBar/BottomNavBar';
import {
  MainHeader,
  SlideUI,
  SlideItem,
  MainSponsor,
  MainVolunteer,
  MainFollow,
  MainFollowList,
} from './MainPageStyled';

// 예시로 넣은 이미지 임포트 (마지막에 빼야한다)
import weatherImg from '../../assets/images/main/weatherEX.png';
import profileImg from '../../assets/images/main/profileEX.png';

export default function MainPage() {
  return (
    <section className='container'>
      <div className='wrapper'>
        <h1 className='a11y-hidden'> 메인 페이지 </h1>

        <MainHeader>
          <TopBar iconColor={'#191919'} />
          <div className='main-user-info'>
            <div className='main-text-info'>
              <p className='main-text'>
                박승기 님 <br />
                안전한 하루 보내세요!
              </p>
              <p className='user-info'>
                안양시 동안구 ・ 30대 ・ 요식업
                <button type='button'> &gt; </button>{' '}
              </p>
            </div>

            <img src={profileImg} alt='프로필사진' />
          </div>
        </MainHeader>

        <SlideUI>
          <div>
            <SlideItem w='150' bgImg={weatherImg}>
              <span> 동안구 </span>
              <p> 미세먼지 없는 화창한 날씨예요</p>
            </SlideItem>
            <SlideItem w='200' bgImg={weatherImg}>
              <span> 동안구 </span>
              <p> 미세먼지 없는 화창한 날씨예요</p>
            </SlideItem>
            <SlideItem w='200' bgImg={weatherImg}>
              <span> 동안구 </span>
              <p> 미세먼지 없는 화창한 날씨예요</p>
            </SlideItem>
          </div>
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
        </SlideUI>
        <MainSponsor>
          <SectionHeader
            firstHeadText='그동안'
            secondHeadText='이만큼 후원했어요'
            firstBtnText='전체 보기'
          ></SectionHeader>
          <article>
            <span> 총 누적 후원금 </span>
            <span> 195,000원</span>
          </article>

          <div className='graph'>그래프자리</div>
        </MainSponsor>
        <MainVolunteer>
          <SectionHeader
            firstHeadText='5일 뒤에'
            secondHeadText='봉사 일정이 있어요'
            num='3'
            firstBtnText='건의'
            secondBtnText='일정 보기'
          ></SectionHeader>
          <div className='slide'> 슬라이드 자리 </div>
        </MainVolunteer>
        <MainFollow>
          <SectionHeader
            firstHeadText='최근에 활동한'
            secondHeadText='이웃이에요'
            num='132'
            firstBtnText='명의'
            secondBtnText='이웃 보기'
<<<<<<< HEAD
          >
            {' '}
          </SectionHeader>
=======
          ></SectionHeader>
>>>>>>> develop
          <MainFollowList>
            <div>
              <img src={profileImg} alt='프로필 사진' />
              <p> 추가하기 </p>
            </div>
            <div>
              <img src={profileImg} alt='프로필 사진' />
              <p> 수영 </p>
            </div>
            <div>
              <img src={profileImg} alt='프로필 사진' />
              <p> 수영 </p>
            </div>
            <div>
              <img src={profileImg} alt='프로필 사진' />
              <p> 수영 </p>
            </div>
            <div>
              <img src={profileImg} alt='프로필 사진' />
              <p> 수영 </p>
            </div>
            <div>
              <img src={profileImg} alt='프로필 사진' />
              <p> 수영 </p>
            </div>
            <div>
              <img src={profileImg} alt='프로필 사진' />
              <p> 수영 </p>
            </div>
          </MainFollowList>
        </MainFollow>
        <BottomNavBar />
      </div>
    </section>
  );
}
