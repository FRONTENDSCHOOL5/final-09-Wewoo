import React, { useState } from 'react';
import TopBar from '../../components/common/TopBar/TopBar';
import searchBtn from '../../assets/icons/PreventPage/search.png';
import heatWave from '../../assets/icons/PreventPage/heat-wave.png';
import wildfire from '../../assets/icons/PreventPage/wildfire.png';
import earthquake from '../../assets/icons/PreventPage/earthquake.png';
import landslide from '../../assets/icons/PreventPage/landslide.png';
import typhoon from '../../assets/icons/PreventPage/typhoon.png';
import flood from '../../assets/icons/PreventPage/flood.png';
import heavyRain from '../../assets/icons/PreventPage/heavy-rain.png';
import heavySnow from '../../assets/icons/PreventPage/heavy-snow.png';
import shield from '../../assets/icons/PreventPage/shield.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/common/NavBar/NavBar';
import BottomNavBar from '../../components/common/BottomNavBar/BottomNavBar';
import NewsFrame from '../../components/common/NewsFrame/NewsFrame';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.customBlack};
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  div {
    position: relative;
    margin-top: 10px;
    margin-bottom: 20px;

    &::before {
      position: absolute;
      content: '';
      background: url(${shield}) no-repeat 0, 0 / contain;
      top: -20px;
      right: 15px;
      width: 90px;
      height: 120px;
      opacity: 0.3;
    }
  }

  h1 {
    margin-bottom: 20px;
    color: #fff;
    font-weight: 600;
    line-height: 150%;
    font-size: ${(props) => props.theme.fontSize.lg};
  }
  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: ${(props) => props.theme.fontSize.xs};
    font-weight: 500;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 2px;
      width: 5px;
      height: 5px;
      margin-left: 7px;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.5);
      transform: rotate(45deg);
    }
  }
`;

const Search = styled.form`
  position: relative;

  input {
    width: 335px;
    background-color: #fff;
    height: 55px;
    padding: 15px;
    box-sizing: border-box;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    position: relative;
    top: 45px;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSize.base};

    &::placeholder {
      color: #cccccc;
    }
  }

  button {
    width: 20px;
    position: absolute;
    top: 60px;
    right: 30px;
    margin: 0;
  }
`;

const MainIcon = styled.main`
  background-color: #fff;
  width: 100%;
  /* padding-bottom: 120px; */
`;

const WeatherList = styled.div`
  width: 90%;
  height: 163px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin: 0px auto 50px;
  background-color: rgb(255, 255, 255);
`;

const WeatherIcon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;

  &::before {
    content: '';
    width: 25px;
    height: 25px;
    background-color: ${(props) =>
      props.color === 'yellow'
        ? 'rgba(255, 204, 0, 0.3)'
        : props.color === 'red'
        ? 'rgba(255, 79, 1, 0.3)'
        : 'rgba(0, 80, 200, 0.3)'};
    border-radius: 50%;
    position: absolute;
    top: 30px;
    right: 0;
    transform: translateY(-50%);
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export default function PreventPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [type, setType] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (inputValue.includes('지진')) {
      navigate('/prevent/info/earthquake');
    } else if (inputValue.includes('폭염')) {
      navigate('/prevent/info/heatwave');
    } else if (inputValue.includes('호우')) {
      navigate('/prevent/info/heavyrain');
    } else if (inputValue.includes('산불')) {
      navigate('/prevent/info/wildfire');
    } else if (inputValue.includes('산사태')) {
      navigate('/prevent/info/landslide');
    } else if (inputValue.includes('강풍')) {
      navigate('/prevent/info/typhoon');
    } else if (inputValue.includes('홍수')) {
      navigate('/prevent/info/flood');
    } else if (inputValue.includes('폭설')) {
      navigate('/prevent/info/heavysnow');
    }
  };

  const searchNavi = (name) => {
    if (name === '지진') {
      navigate('/prevent/info/earthquake');
    } else if (name === '폭염') {
      navigate('/prevent/info/heatwave');
    } else if (name === '호우') {
      navigate('/prevent/info/heavyrain');
    } else if (name === '산불') {
      navigate('/prevent/info/wildfire');
    } else if (name === '산사태') {
      navigate('/prevent/info/landslide');
    } else if (name === '강풍') {
      navigate('/prevent/info/typhoon');
    } else if (name === '홍수') {
      navigate('/prevent/info/flood');
    } else if (name === '폭설') {
      navigate('/prevent/info/heavysnow');
    }
  };

  const btnData = [
    { id: 0, name: '폭염', src: heatWave, color: 'red', type: 1 },
    { id: 1, name: '산불', src: wildfire, color: 'red', type: 1 },
    {
      id: 2,
      name: '지진',
      src: earthquake,
      color: 'yellow',
      type: 2,
    },
    { id: 3, name: '산사태', src: landslide, color: 'yellow', type: 2 },
    { id: 4, name: '강풍', src: typhoon, color: 'blue', type: 3 },
    { id: 5, name: '홍수', src: flood, color: 'blue', type: 3 },
    { id: 6, name: '호우', src: heavyRain, color: 'blue', type: 3 },
    { id: 7, name: '폭설', src: heavySnow, color: 'blue', type: 3 },
  ];

  return (
    // <section className='container'>
    //   <div className='wrapper'>
    <>
      <Header style={{ padding: 20 }}>
        <TopBar iconColor={'#fafafa'} />
        <div>
          <h1>
            안전을 지키는 방법
            <br />
            함께 알아볼까요?
          </h1>
        </div>
        {/* <Search>
          <input
            value={inputValue}
            type='text'
            id='search-input'
            placeholder='지진 발생 시 대피 방법'
            onChange={handleInputChange}
          />
          <label htmlFor='search-input'></label>
          <button onClick={handleClick}>
            <img src={searchBtn} alt='검색버튼' />
          </button>
        </Search> */}
      </Header>
      <MainIcon>
        <NavBar navType={'prevent'} setType={setType} />
        <WeatherList>
          {btnData.map((data, index) => {
            return type === 0 ? (
              <WeatherIcon
                color={data.color}
                key={index}
                type={data.type}
                onClick={() => searchNavi(data.name)}
              >
                <img src={data.src} alt={data.name + '아이콘'} />
                <span>{data.name}</span>
              </WeatherIcon>
            ) : (
              type === data.type && (
                <WeatherIcon
                  color={data.color}
                  key={index}
                  type={data.type}
                  onClick={() => searchNavi(data.name)}
                >
                  <img src={data.src} alt={data.name + '아이콘'} />
                  <span>{data.name}</span>
                </WeatherIcon>
              )
            );
          })}
        </WeatherList>
        <SectionHeader
          firstHeadText='재난 관련'
          secondHeadText='최근 뉴스에요'
          // num='2'
          // firstBtnText='건의'
          // secondBtnText='일정 보기'
          padding={true}
        ></SectionHeader>

        <NewsFrame />
      </MainIcon>

      <BottomNavBar />
    </>
    //   {/* </div>
    // </section> */}
  );
}
