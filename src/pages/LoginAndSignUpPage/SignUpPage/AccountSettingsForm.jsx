import React from 'react';
import { StyledInputText, StyledInput, StyledErrorMessage } from '../loginPageCommonStyle';

export default function AccountSettingsForm({
  setAccountInfo,
  accountInfo,
  setErrorMessage,
  errorMessage,
}) {
  const handleEmail = (e) => {
    setAccountInfo((prev) => ({ ...prev, email: e.target.value }));

    if (errorMessage.includes('emailError')) {
      setErrorMessage((prev) => prev.filter((ele) => ele !== 'emailError'));
    }

    if (errorMessage.includes('emailValidationError')) {
      setErrorMessage((prev) => prev.filter((ele) => ele !== 'emailValidationError'));
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
    <>
      <StyledInputText>아이디</StyledInputText>
      <StyledInput
        value={accountInfo.email}
        onChange={handleEmail}
        className={
          errorMessage.includes('emailError') | errorMessage.includes('emailValidationError')
            ? ''
            : 'mb-37'
        }
        placeholder='example@gmail.com'
      />
      {errorMessage.includes('emailError') && (
        <StyledErrorMessage className='mb-18'>*이미 가입된 이메일 주소입니다.</StyledErrorMessage>
      )}
      {errorMessage.includes('emailValidationError') && (
        <StyledErrorMessage className='mb-18'>*잘못된 이메일 형식입니다.</StyledErrorMessage>
      )}
      <StyledInputText>비밀번호</StyledInputText>
      <StyledInput
        value={accountInfo.password}
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
        value={accountInfo.confirmPassword}
        type='password'
        onChange={handleConfirmPassword}
        placeholder='비밀번호를 한번 더 입력해주세요'
      />
      {errorMessage.includes('confirmPasswordError') && (
        <StyledErrorMessage>*비밀번호가 일치하지않습니다.</StyledErrorMessage>
      )}
    </>
  );
}
