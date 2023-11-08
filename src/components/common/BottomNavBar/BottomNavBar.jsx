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

const NavBar = styled.ul`
  display: flex;
  width: 100%;
  padding: 20px 27px 6px;
  justify-content: space-between;
  background-image: url(${navbarbgImg});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background-size: cover;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
  position: sticky;
  bottom: -2px;
  z-index: 50;

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

  const navList = [
    { name: '예방해요', img: preventNot, selectImg: preventSelect, path: ['/prevent'] },
    { name: '소통해요', img: postNot, selectImg: postSelect, path: ['/post'] },
    { name: '마이위용', img: myWewooNot, selectImg: myWewooSelect, path: ['/main'] },
    { name: '이웃해요', img: mapNot, selectImg: mapSelect, path: ['/search'] },
    { name: '도와줘요', img: helpNot, selectImg: helpSelect, path: ['/help'] },
  ];

  useEffect(() => {
    const path = location.pathname;
    const navIndex = navList.findIndex((item) => item.path.includes(path));
    setIndexID(navIndex !== -1 ? navIndex : '');
    // eslint-disable-next-line
  }, [location]);

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
