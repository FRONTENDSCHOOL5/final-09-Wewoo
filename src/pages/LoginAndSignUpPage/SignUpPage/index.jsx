import React, { useState } from 'react';
import styled from 'styled-components';
import BackIcon from '../BackIcon';

import { useNavigate } from 'react-router-dom';
import {
  StyledBackButtonBox,
  StyledHeader,
  StyledContentsBox,
  StyledContainer,
  StyledBoxWapper,
  StyledLoginTab,
  StyledInputText,
  StyledInput,
  StyledErrorMessage,
  StyledNextButton,
} from '../commonStyled';

export default function SignUpPage() {
  const [signUpLevel, setSignUpLevel] = useState(1);

  const [accountInfo, setAccountInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState([]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNextButton = () => {
    if (signUpLevel === 1) {
      if (accountInfo.password.length < 6) {
        setErrorMessage(['passwordError']);
        return;
      }

      if (accountInfo.password !== accountInfo.confirmPassword) {
        setErrorMessage(['confirmPasswordError']);
        return;
      }
      // 2.4 이메일 검증 api 사용, 아이디가 중복이어서 error 나면
      // setErrorMessage(['emailError']);
    }

    setSignUpLevel((prev) => prev + 1);
  };

  const handleEmail = (e) => {
    setAccountInfo((prev) => ({ ...prev, email: e.target.value }));
    if (errorMessage.includes('emailError')) {
      setErrorMessage((prev) => prev.filter((ele) => ele !== 'emailError'));
    }
  };

  const handlePassword = (e) => {
    setAccountInfo((prev) => ({ ...prev, password: e.target.value }));

    if (errorMessage.includes('passwordError')) {
      setErrorMessage((prev) => prev.filter((ele) => ele !== 'passwordError'));
    }
  };

  const handleConfirmPassword = (e) => {
    setAccountInfo((prev) => ({ ...prev, confirmPassword: e.target.value }));

    if (errorMessage.includes('confirmPasswordError')) {
      setErrorMessage((prev) => prev.filter((ele) => ele !== 'confirmPasswordError'));
    }
  };

  return (
    <StyledContainer>
      <StyledBoxWapper>
        <StyledContentsBox>
          <StyledBackButtonBox>
            <button onClick={handleBack}>
              <BackIcon />
            </button>
          </StyledBackButtonBox>
          <StyledHeader>
            {signUpLevel === 1 && (
              <>
                <span>위험할 때 용이하게 </span>
                <span>당신의 정보를 알려주세요</span>
              </>
            )}
            {signUpLevel === 2 && (
              <>
                <span>본인의 프로필을</span>
                <span>설정해주세요</span>
              </>
            )}
          </StyledHeader>
          <StyledLoginTabBox>
            <StyledLoginTab className={signUpLevel === 1 ? '' : 'disable'}>
              계정 설정
            </StyledLoginTab>
            <StyledLoginTab className={signUpLevel === 1 ? 'disable' : ''}>
              프로필 설정
            </StyledLoginTab>
          </StyledLoginTabBox>

          {signUpLevel === 1 && (
            <>
              <StyledInputText>아이디</StyledInputText>
              <StyledInput
                onChange={handleEmail}
                className={errorMessage.includes('emailError') ? '' : 'mb-37'}
                placeholder='example@gmail.com'
              />
              {errorMessage.includes('emailError') && (
                <StyledErrorMessage className='mb-18'>
                  *이미 가입된 이메일 주소입니다.
                </StyledErrorMessage>
              )}
              <StyledInputText>비밀번호</StyledInputText>
              <StyledInput
                type='password'
                className={errorMessage.includes('passwordError') ? '' : 'mb-20'}
                onChange={handlePassword}
                placeholder='비밀번호를 입력해주세요'
              />
              {errorMessage.includes('passwordError') && (
                <StyledErrorMessage className='mb-18'>
                  *비밀번호는 6자 이상이어야 합니다.
                </StyledErrorMessage>
              )}
              <StyledInputText>비밀번호 확인</StyledInputText>
              <StyledInput
                type='password'
                onChange={handleConfirmPassword}
                placeholder='비밀번호를 한번 더 입력해주세요'
              />
              {errorMessage.includes('confirmPasswordError') && (
                <StyledErrorMessage>*비밀번호가 일치하지않습니다.</StyledErrorMessage>
              )}
            </>
          )}
        </StyledContentsBox>

        <StyledNextButton
          disabled={!accountInfo.email || !accountInfo.password || !accountInfo.confirmPassword}
          onClick={handleNextButton}
          className={
            !accountInfo.email || !accountInfo.password || !accountInfo.confirmPassword
              ? 'disable'
              : ''
          }
        >
          다음
        </StyledNextButton>
      </StyledBoxWapper>
    </StyledContainer>
  );
}

const StyledLoginTabBox = styled.div`
  display: flex;
  gap: 25px;
  align-self: flex-start;
`;
