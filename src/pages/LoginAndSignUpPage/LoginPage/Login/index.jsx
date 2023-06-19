import React, { useState } from 'react';
import BackIcon from '../../../../assets/icons/common/back.png';
import {
  StyledContentsBox,
  StyledBoxWapper,
  StyledContainer,
  StyledHeader,
  StyledBackButtonBox,
  StyledLoginTab,
  StyledInputText,
  StyledInput,
  StyledErrorMessage,
  StyledNextButton,
} from '../../loginCommonStyled';

export default function Login({ onBack }) {
  const [hasErrorMessage, setHasErrorMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const url = 'https://api.mandarin.weniv.co.kr';

  // const handleSignup = () => {
  //   axios
  //     .post(`${url}/user`, {
  //       username: '안양진',
  //       email: 'ayz0155@gmail.com',
  //       password: 'password',
  //       accountname: '안양진',
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const handleLogin = () => {
    // api 쏘고.
    // 성공일때 main page로 이동.

    const examId = 'ayz0155@gmail.com';
    const examPwd = 'password';
    // 실패일때
    if (examId !== email || examPwd !== password) {
      setHasErrorMessage(true);
      return;
    }
    alert('로그인 성공');
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
      <StyledBoxWapper>
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
      </StyledBoxWapper>
    </StyledContainer>
  );
}
