import React, { useState } from 'react';
import BackIcon from '../../assets/icons/common/back.png';
import {
  StyledContentsBox,
  StyledBoxWrapper,
  StyledContainer,
  StyledHeader,
  StyledBackButtonBox,
  StyledLoginTab,
  StyledInputText,
  StyledInput,
  StyledErrorMessage,
  StyledNextButton,
} from './loginPageCommonStyle';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../apis/user';

export default function Login({ onBack }) {
  const [hasErrorMessage, setHasErrorMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    loginApi(
      { email, password },
      {
        onSuccess: ({ user, message }) => {
          if (message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
            setHasErrorMessage(true);
            return;
          }

          localStorage.setItem('accessToken', user.token);
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/', { replace: true });
        },
        onError: () => setHasErrorMessage(true),
      },
    );
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    if (hasErrorMessage) {
      setHasErrorMessage(false);
    }
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    if (hasErrorMessage) {
      setHasErrorMessage(false);
    }
  };

  const handlePasswordInputEnter = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  return (
    <StyledContainer>
      <StyledBoxWrapper>
        <StyledContentsBox>
          <StyledBackButtonBox>
            <button onClick={onBack}>
              <img src={BackIcon} />
            </button>
          </StyledBackButtonBox>

          <StyledHeader>
            <span>위용위용에 회원가입이</span> <span>되어있으신가요?</span>
          </StyledHeader>

          <StyledLoginTab>로그인</StyledLoginTab>

          <StyledInputText>아이디</StyledInputText>
          <StyledInput
            className='mb-37'
            value={email}
            onChange={handleEmailInput}
            placeholder='example@gmail.com'
          />

          <StyledInputText>비밀번호</StyledInputText>
          <StyledInput
            value={password}
            onChange={handlePasswordInput}
            onKeyUp={handlePasswordInputEnter}
            placeholder='비밀번호를 입력해주세요'
            type='password'
          />
          {hasErrorMessage && (
            <StyledErrorMessage>*이메일 또는 비밀번호가 일치하지 않습니다.</StyledErrorMessage>
          )}
        </StyledContentsBox>

        <StyledNextButton
          disabled={!(password && email)}
          className={!(password && email) ? 'disable' : ''}
          onClick={handleLogin}
        >
          로그인
        </StyledNextButton>
      </StyledBoxWrapper>
    </StyledContainer>
  );
}
