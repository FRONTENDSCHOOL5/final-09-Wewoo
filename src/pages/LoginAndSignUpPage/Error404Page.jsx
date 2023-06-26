import React from 'react';
import styled from 'styled-components';
import BackIcon from '../../assets/icons/common/back.png';
import errorImg from '../../assets/images/loginPage/404logo.png';
import { useNavigate } from 'react-router-dom';

import {
  StyledContentsBox,
  StyledContainer,
  StyledBoxWrapper,
  StyledBackButtonBox,
} from './loginPageCommonStyle';

export default function Error404Page({ onback }) {
  const navigate = useNavigate();
  const handleStartLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <StyledContainer>
        <StyledBoxWrapper>
          <StyledBoxCustom>
            <StyledBackButtonBox onClick={handleStartLogin}>
              <button onClick={onback}>
                <img src={BackIcon} />
              </button>
            </StyledBackButtonBox>
            <div className='errorLogo'>
              <img src={errorImg} alt='Error404Logo' />
            </div>
            <h1>404 ERRORS</h1>
            <StyledText>
              <span>앗! 페이지를 로드할 수 없어요.</span>
            </StyledText>
          </StyledBoxCustom>
        </StyledBoxWrapper>
      </StyledContainer>
    </>
  );
}

const StyledBoxCustom = styled(StyledContentsBox)`
  width: 375px;
  height: 812px;
  background: #ffffff;
  .errorLogo {
    margin-top: 200px;
    margin-bottom: 20.33px;
    width: 101px;
    height: 54.67px;
  }

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 8px;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 34px;
  text-align: center;
  font-weight: 400;
  font-size: 17px;
  color: #aaaaaa;
  letter-spacing: -0.02em;
  line-height: 150%;
`;
