import React from 'react';
import { StyledInputText, StyledInput, StyledErrorMessage } from '../loginPageCommonStyle';

export default function AccountNameForm({
  setAccountInfo,
  setErrorMessage,
  errorMessage,
  accountInfo,
  handleNextButton,
}) {
  const handleAccountName = (e) => {
    setAccountInfo((prev) => ({ ...prev, accountName: e.target.value }));
    if (errorMessage.includes('accountNameError')) {
      setErrorMessage((prev) => prev.filter((ele) => ele !== 'accountNameError'));
    }
    if (errorMessage.includes('accountNameAlreadyError')) {
      setErrorMessage((prev) => prev.filter((ele) => ele !== 'accountNameAlreadyError'));
    }
  };
  const handleInputEnter = (e) => {
    if (e.keyCode === 13) {
      handleNextButton();
    }
  };
  return (
    <>
      <StyledInputText>계정 ID</StyledInputText>
      <StyledInput
        value={accountInfo.accountName}
        onChange={handleAccountName}
        onKeyUp={handleInputEnter}
        className={
          errorMessage.includes('accountNameError') ||
          errorMessage.includes('accountNameAlreadyError')
            ? ''
            : 'mb-37'
        }
        placeholder='영문, 숫자, 특수문자(.), (_)만 사용 가능합니다.'
      />
      {errorMessage.includes('accountNameError') && (
        <StyledErrorMessage>*영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.</StyledErrorMessage>
      )}
      {errorMessage.includes('accountNameAlreadyError') && (
        <StyledErrorMessage>*이미 가입된 계정ID 입니다.</StyledErrorMessage>
      )}
    </>
  );
}
