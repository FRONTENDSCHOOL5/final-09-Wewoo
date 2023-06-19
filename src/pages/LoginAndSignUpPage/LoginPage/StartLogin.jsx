import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  StyledContentsBox,
  StyledCommonButton,
  StyledContainer,
  StyledBoxWapper,
} from '../loginPageCommonStyle';
import logoImg from '../../../assets/images/loginPage/logo.png';

export default function StartLogin({ onLogin }) {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <StyledContainer>
      <StyledBoxWapper>
        <StyledBoxCustom>
          <div className='logo'>
            <img src={logoImg} alt='위용위용logo' />
          </div>
          <h1>위용위용</h1>

          <StyledText>
            <span>
              각종 재난으로부터 <br />
              당신의 안전을 책임질게요
            </span>
          </StyledText>
          <StyledButtonBox>
            <StyledLoginButton onClick={onLogin}>로그인하기</StyledLoginButton>
            <StyledJoinButton onClick={handleSignUp}>회원가입하기</StyledJoinButton>
          </StyledButtonBox>
        </StyledBoxCustom>
        <StyledNextTimeButton>다음에 할래요</StyledNextTimeButton>
      </StyledBoxWapper>
    </StyledContainer>
  );
}

const StyledBoxCustom = styled(StyledContentsBox)`
  .logo {
    margin-top: 134px;
    margin-bottom: 18px;
    width: 100px;
    height: 100px;
    border-radius: 24.7934px;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 75px;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 34px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  line-height: 150%;
`;

const StyledButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLoginButton = styled(StyledCommonButton)`
  border: 2px solid #191919;
  width: 331px;
  margin-bottom: 15px;
`;

const StyledJoinButton = styled(StyledCommonButton)`
  background-color: #191919;
  color: white;
`;

const StyledNextTimeButton = styled.button`
  align-self: center;
  font-weight: 400;
  font-size: 14px;
  color: #aaaaaa;
  padding-bottom: 8px;
  border-bottom: 2px solid #dddddd;
  margin-bottom: 59px;
`;
