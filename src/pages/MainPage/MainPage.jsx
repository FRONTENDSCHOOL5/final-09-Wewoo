import React from 'react';
import styled from 'styled-components';
import weatherImg from '../../assets/images/main/weatherEX.png';
import profileImg from '../../assets/images/main/profileEX.png';
import SectionHead from '../../components/common/SectionHead/SectionHead';
import Header from '../../components/common/Header/Header';

const MainHeader = styled.section`
  width: 100%;
  padding: 20px 20px 70px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #191919;

  div:first-child {
    p.main-text {
      font-size: 24px;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: #fff;
      margin-bottom: 20px;
    }
    p.user-info {
      font-size: 12px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.02em;
      color: #fff;
      opacity: 0.75;
    }
  }
`;

const SlideUI = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 0 20px;
  flex-wrap: nowrap;
  justify-content: initial;
  overflow-x: scroll;

  position: relative;
  bottom: 40px;
  div {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-shrink: 0;
  }
`;
const SlideItem = styled.li`
  width: ${(props) => props.w}px;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  font-weight: 800;
  flex-basis: 1;
  flex-shrink: 0;
  padding: 15px 35px 20px 15px;

  span {
    font-size: 12px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.6);
  }
  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: white;
    margin-top: 15px;
  }
`;

const MainSponsor = styled.section`
  background-color: #fff;
  width: 100%;
  padding: 75px 20px 65px 20px;
  margin-bottom: 5px;
  article {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #191919;
    padding: 20px 15px;
    color: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    margin: 30px 0 20px 0;
    span:first-child {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    span:last-child {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
  }
  div.graph {
    width: 335px;
    height: 100px;
    background-color: aqua;
  }
`;
const MainVolunteer = styled.section`
  width: 100%;
  padding: 65px 20px 70px 20px;
  background-color: #fff;
  margin-bottom: 5px;
  div.slide {
    width: 335px;
    height: 100px;
    background-color: aqua;
    margin-top: 25px;
  }
`;
const MainFollow = styled.section`
  width: 100%;
  padding: 65px 20px 65px 20px;
  background: #fff;
`;
const MainFollowList = styled.div`
  display: flex;
  color: #000;
  gap: 15px;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: initial;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 15px;
  /* 스크롤 안 보이게 */
  div {
    flex-direction: column;
    text-align: center;
    img {
      border: 1px solid #eee;
      width: 60px;
      aspect-ratio: 1;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.02em;
    }
  }
  div:nth-child(1) {
    color: #ccc;
  }
`;
export default function MainPage() {
  return (
    <section className='container'>
      <div className='wrapper'>
        <h1 className='a11y-hidden'> 메인 페이지 </h1>
        <Header />
        <MainHeader>
          <div>
            <p className='main-text'>
              {' '}
              박승기 님 <br />
              안전한 하루 보내세요!
            </p>
            <p className='user-info'>
              {' '}
              안양시 동안구 ・ 30대 ・ 요식업
              <button type='button'> &gt; </button>{' '}
            </p>
          </div>
          <div>
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
          <SectionHead
            firstHeadText='그동안'
            secondHeadText='이만큼 후원했어요'
            firstBtnText='전체 보기'
          >
            {' '}
          </SectionHead>
          <article>
            <span> 총 누적 후원금 </span>
            <span> 195,000원</span>
          </article>

          <div className='graph'>그래프자리</div>
        </MainSponsor>
        <MainVolunteer>
          <SectionHead
            firstHeadText='5일 뒤에'
            secondHeadText='봉사 일정이 있어요'
            num='3'
            firstBtnText='건의'
            secondBtnText='일정 보기'
          >
            {' '}
          </SectionHead>
          <div className='slide'> 슬라이드 자리 </div>
        </MainVolunteer>
        <MainFollow>
          <SectionHead
            firstHeadText='최근에 활동한'
            secondHeadText='이웃이에요'
            num='132'
            firstBtnText='명의'
            secondBtnText='이웃 보기'
          >
            {' '}
          </SectionHead>
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
      </div>
    </section>
  );
}
