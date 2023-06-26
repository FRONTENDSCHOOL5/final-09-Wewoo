import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import heatWave from '../../../assets/images/PreventPage/header-heatwave.png';
import wildfire from '../../../assets/images/PreventPage/header-wildfire.png';
import earthquake from '../../../assets/images/PreventPage/header-earthquake.png';
import landslide from '../../../assets/images/PreventPage/header-landslide.png';
import typhoon from '../../../assets/images/PreventPage/header-typhoon.png';
import flood from '../../../assets/images/PreventPage/header-flood.png';
import heavyRain from '../../../assets/images/PreventPage/header-heavyrain.png';
import heavySnow from '../../../assets/images/PreventPage/header-heavysnow.png';
import back from '../../../assets/icons/PreventPage/back.png';
import styled from 'styled-components';

const Header = styled.header`
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.bgimg});
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: right 30px bottom 30px;
  width: 100%;
  padding: 40px 0 30px 20px;

  h1 {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.lg};
    position: relative;
    bottom: 30px;
    color: ${(props) => props.fontColor};
  }
`;

const BackButton = styled.button`
  padding-bottom: 60px;
`;

export default function PreventHeader() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [bgimg, setBgimg] = useState('');
  const [fontColor, setFontColor] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const BackBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (params.type === 'earthquake') {
      setName('지진');
      setColor('#FFCC00');
      setBgimg(earthquake);
    } else if (params.type === 'heatwave') {
      setName('폭염');
      setColor('#FF5000');
      setBgimg(heatWave);
      setFontColor('#FAFAFA');
    } else if (params.type === 'wildfire') {
      setName('산불');
      setColor('#FF5000');
      setBgimg(wildfire);
    } else if (params.type === 'heavyrain') {
      setName('호우');
      setColor('#0050C8');
      setFontColor('#FAFAFA');
      setBgimg(heavyRain);
    } else if (params.type === 'landslide') {
      setName('산사태');
      setColor('#FFCC00');
      setBgimg(landslide);
    } else if (params.type === 'typhoon') {
      setName('강풍');
      setColor('#0050C8');
      setFontColor('#FAFAFA');
      setBgimg(typhoon);
    } else if (params.type === 'flood') {
      setName('홍수');
      setColor('#0050C8');
      setFontColor('#FAFAFA');
      setBgimg(flood);
    } else if (params.type === 'heavysnow') {
      setName('폭설');
      setColor('#0050C8');
      setFontColor('#FAFAFA');
      setBgimg(heavySnow);
    }
  }, [params.type]);

  return (
    <>
      <Header type={params.type} color={color} bgimg={bgimg} fontColor={fontColor}>
        <BackButton onClick={BackBtn}>
          <img src={back} alt='뒤로가기 버튼' />
        </BackButton>
        <div>
          <h1>
            {name} 안전, <br /> 지금 알려 드릴게요
          </h1>
        </div>
      </Header>
    </>
  );
}
