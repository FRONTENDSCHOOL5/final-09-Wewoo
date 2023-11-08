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
            <IntroTextBox>
              <StyledTextT>위용위용</StyledTextT>
              <StyledTextB>
                <span>
                  위험할 때, <br /> 용이하게
                </span>
              </StyledTextB>
            </IntroTextBox>
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

const IntroTextBox = styled.div`
  position: absolute;
  top: 70vh;
  left: 5vh;
`;

const StyledBoxCustom = styled(StyledContentsBox)`
  position: relative;
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
  background-size: auto 102vh;
  animation-name: ${animationBG};
  animation-duration: 3s;
  transition: all 0.5s ease-in-out;
`;

const StyledTextT = styled.span`
  display: block;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.28px;
  margin-left: 10px;
  margin-bottom: 11px;
`;
const StyledTextB = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: 800;
  line-height: 125%;
  letter-spacing: -0.64px;
`;
