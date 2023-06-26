import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// bottomNavbar 이미지 임포트
// NotSelect
import myWewooNot from '../../../assets/images/BottomNavBar/my-no.svg';
import preventNot from '../../../assets/images/BottomNavBar/prevent-no.svg';
import postNot from '../../../assets/images/BottomNavBar/post-no.svg';
import mapNot from '../../../assets/images/BottomNavBar/map-no.svg';
import helpNot from '../../../assets/images/BottomNavBar/help-no.svg';
// Select
import myWewooSelect from '../../../assets/images/BottomNavBar/my-select.svg';
import preventSelect from '../../../assets/images/BottomNavBar/prevent-select.svg';
import postSelect from '../../../assets/images/BottomNavBar/post-select.svg';
import mapSelect from '../../../assets/images/BottomNavBar/map-select.svg';
import helpSelect from '../../../assets/images/BottomNavBar/help-select.svg';
import navbarbgImg from '../../../assets/images/BottomNavBar/bottom-bg.png';
import { useLocation, useNavigate } from 'react-router-dom';
// useNavigate 현재 있는 경로를 받아옴

const NavBar = styled.ul`
  display: flex;
  width: 100%;
  padding: 20px 27px 15px 27px;
  justify-content: space-between;
  background-image: url(${navbarbgImg});
  background-repeat: no-repeat;
  background-position-y: 0px;
  background-size: contain;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
  position: relative;
  bottom: 0px;

  li:nth-child(3) {
    bottom: 10px;
    img {
      width: 80%;
      margin-bottom: 7px;
    }
  }
`;
const NavListItem = styled.li`
  position: relative;
  bottom: 6px;
  text-align: center;
`;
const NavImg = styled.img`
  width: 90%;
  text-align: center;
`;
const NavTextSpan = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.setColor ? '#191919' : '#eee')};
  margin-top: 3px;
`;
const BottomNavBar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [indexID, setIndexID] = useState(0);
  // indexID = navbar 인덱스

  const navList = [
    { name: '예방해요', img: preventNot, selectImg: preventSelect, path: ['/prevent'] },
    { name: '소통해요', img: postNot, selectImg: postSelect, path: ['/post'] },
    { name: '마이위용', img: myWewooNot, selectImg: myWewooSelect, path: ['/'] },
    { name: '대피해요', img: mapNot, selectImg: mapSelect, path: ['/map'] },
    { name: '도와줘요', img: helpNot, selectImg: helpSelect, path: ['/help'] },
  ];

  useEffect(() => {
    const path = location.pathname;
    // useLocation으로 현재 있는 경로의 pathname을 변수 path에 저장
    const navIndex = navList.findIndex((item) => item.path.includes(path));
    // navListItem에서 조건에 만족하는 첫번째 index번호를 찾음
    // 조건 : item.path가 현재 있는 경로(변수 path)를 가지고 있는가?
    setIndexID(navIndex !== -1 ? navIndex : '');
    // navIndex가 -1 이 아닐때 (== navIndex가 무슨 번호를 찾았을때 ) navIndex 값이 되고 아니라면 아무것도 안하긔
  }, [location]);
  // useEffect는 인자로 하나의 콜백함수, 배열을 받음
  // 콜백함수는 렌더링 될때마다 매번 실행됨
  // location이 바뀔때마다 렌더링 실행

  return (
    <>
      <NavBar>
        {navList.map((el, i) => {
          return (
            <NavListItem
              key={i}
              onClick={() => {
                navigate(el.path[0]);
              }}
            >
              <button>
                <NavImg src={indexID === i ? el.selectImg : el.img} />
                <NavTextSpan setColor={indexID === i}> {el.name} </NavTextSpan>
              </button>
            </NavListItem>
          );
        })}
      </NavBar>
    </>
  );
};

export default BottomNavBar;
