import React from 'react';
import { StyledInputText, StyledInput, StyledErrorMessage } from '../loginPageCommonStyle';

export default function AccountNameForm({
  setAccountInfo,
  setErrorMessage,
  errorMessage,
  accountInfo,
}) {
  const handleAccountName = (e) => {
    setAccountInfo((prev) => ({ ...prev, accountName: e.target.value }));
    if (errorMessage.includes('accountNameError')) {
      setErrorMessage((prev) => prev.filter((ele) => ele !== 'accountNameError'));
    }
  };

  return (
    <>
      <StyledInputText>사용자 이름</StyledInputText>
      <StyledInput
        value={accountInfo.accountName}
        onChange={handleAccountName}
        className={errorMessage.includes('accountNameError') ? '' : 'mb-37'}
        placeholder='영문, 숫자, 특수문자(.), (_)만 사용 가능합니다.'
      />
      {errorMessage.includes('accountNameError') && (
        <StyledErrorMessage>*영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.</StyledErrorMessage>
      )}
    </>
  );
}
