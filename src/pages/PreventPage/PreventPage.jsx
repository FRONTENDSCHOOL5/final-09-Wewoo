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

const Header = styled.header`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  .header-box {
    padding: 25px;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      background: url(${shield}) no-repeat 0, 0 / contain;
      top: 5px;
      right: 25px;
      width: 90px;
      height: 120px;
      opacity: 0.3;
    }
  }

  .header-box h1 {
    margin-bottom: 20px;
    color: #fff;
    font-weight: 600;
    font-size: 24px;
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
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
    margin-left: 20px;
    position: relative;
    top: 20px;
    font-weight: 500;
    font-size: 16px;
  }

  button {
    width: 20px;
    position: absolute;
    top: 37px;
    right: 30px;
    margin: 0;
  }
`;

const EmergencyList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-top: 36px;
  gap: 25px;
  font-size: 18px;
  font-weight: 600;
  color: #ccc;
`;

const MainIcon = styled.main`
  background-color: #fff;
  width: 100%;
`;

const WeatherList = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin: 28px auto;
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

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (inputValue.includes('지진')) {
      navigate('/info');
    }
  };

  const handleWeatherClick = () => {
    navigate('/info');
  };

  return (
    <section className='container'>
      <div className='wrapper'>
        <TopBar />
        <Header>
          <div className='header-box'>
            <h1>
              안전을 지키는 방법
              <br />
              함께 알아볼까요?
            </h1>
            <p>관심재난을 설정해 보세요</p>
          </div>
          <Search>
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
          </Search>
        </Header>
        <MainIcon>
          <EmergencyList>
            <button>관심재난</button>
            <button>화재</button>
            <button>대지</button>
            <button>수해</button>
            <button>사고</button>
            <button>대처요령</button>
          </EmergencyList>
          <WeatherList>
            <WeatherIcon color='red'>
              <img src={heatWave} alt='폭염아이콘' />
              <span>폭염</span>
            </WeatherIcon>
            <WeatherIcon color='red'>
              <img src={wildfire} alt='산불아이콘' />
              <span>산불</span>
            </WeatherIcon>
            <WeatherIcon color='yellow' onClick={handleWeatherClick}>
              <img src={earthquake} alt='지진아이콘' />
              <span>지진</span>
            </WeatherIcon>
            <WeatherIcon color='yellow'>
              <img src={landslide} alt='산사태아이콘' />
              <span>산사태</span>
            </WeatherIcon>
            <WeatherIcon>
              <img src={typhoon} alt='강풍아이콘' />
              <span>강풍</span>
            </WeatherIcon>
            <WeatherIcon>
              <img src={flood} alt='홍수아이콘' />
              <span>홍수</span>
            </WeatherIcon>
            <WeatherIcon>
              <img src={heavyRain} alt='호우아이콘' />
              <span>호우</span>
            </WeatherIcon>
            <WeatherIcon>
              <img src={heavySnow} alt='폭설아이콘' />
              <span>폭설</span>
            </WeatherIcon>
          </WeatherList>
        </MainIcon>
      </div>
    </section>
  );
}
