import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImg from '../../assets/images/loginPage/backgroundimg.png';
import { StyledContentsBox, StyledContainer, StyledBoxWrapper } from './loginPageCommonStyle';

export default function IntroScreen() {
  return (
    <>
      <StyledContainer>
        <StyledBoxWrapper>
          <StyledBoxCustom>
            {/* <div className='backimg'><img src={backgroundImg} alt='backgroundImg' /></div> */}
            <StyledTextT>위용위용</StyledTextT>
            <StyledTextB>
              <span>
                위험할 때, <br /> 용이하게
              </span>
            </StyledTextB>
          </StyledBoxCustom>
        </StyledBoxWrapper>
      </StyledContainer>
    </>
  );
}

const animationBG = keyframes`
0%{ 
    background-position: 60% 50%;
}
100%{
  background-position: 80% 50%;
}
`;

const StyledBoxCustom = styled(StyledContentsBox)`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  padding: 0;
  background-size: 80%;
  background: no-repeat center;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: 80% 50%;
  background-size: cover;
  animation-name: ${animationBG};
  animation-duration: 3s;
  transition: all 0.5s ease-in-out;
  /* animation-iteration-count: infinite; */
`;

const StyledTextT = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.28px;
  margin-top: 590px;
  margin-bottom: 11px;
  margin-left: 30px;
`;
const StyledTextB = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: 800;
  line-height: 125%;
  letter-spacing: -0.64px;
  margin-left: 30px;
  margin-bottom: 127px;
`;
