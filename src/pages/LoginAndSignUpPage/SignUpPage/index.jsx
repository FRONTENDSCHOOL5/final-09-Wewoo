import React, { useState } from 'react';
import styled from 'styled-components';
import BackIcon from '../../../assets/icons/common/back.png';

import { useNavigate } from 'react-router-dom';
import {
  StyledBackButtonBox,
  StyledHeader,
  StyledContentsBox,
  StyledContainer,
  StyledBoxWapper,
  StyledLoginTab,
  StyledNextButton,
} from '../loginPageCommonStyle';

import AccountSettingsForm from './AccountSettingsForm';
import AccountNameForm from './AccountNameForm';
import ProfileSettingsForm from './ProfileSettingsForm';

export default function SignUpPage() {
  const [signUpLevel, setSignUpLevel] = useState(1);

  const [accountInfo, setAccountInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    accountName: '',
  });

  const [profileInfo, setProfileInfo] = useState({
    imgFile: null,
    description: '',
    username: '',
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

  return (
    <StyledContainer>
      <StyledBoxWapper>
        <StyledContentsBox>
          <StyledBackButtonBox>
            <button onClick={handleBack}>
              <img src={BackIcon} />
            </button>
          </StyledBackButtonBox>
          <StyledHeader>
            {signUpLevel === 1 ? (
              <>
                <span>위험할 때 용이하게 </span>
                <span>당신의 정보를 알려주세요</span>
              </>
            ) : (
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
            <AccountSettingsForm
              setAccountInfo={setAccountInfo}
              accountInfo={accountInfo}
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
            />
          )}
          {/* 프로필 레벨 2 */}
          {signUpLevel === 2 && (
            <AccountNameForm
              accountInfo={accountInfo}
              setAccountInfo={setAccountInfo}
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
            />
          )}
          {/* 프로필 레벨 3 */}
          {signUpLevel === 3 && (
            <ProfileSettingsForm profileInfo={profileInfo} setProfileInfo={setProfileInfo} />
          )}
          {/* 프로필 레벨 4 */}
          {signUpLevel === 4 && (
            <>
              <StyledWelcomeText>반갑습니다!</StyledWelcomeText>
              <StyledRememberText>닉네임님, 위급할 땐 위용위용을 기억해주세요!</StyledRememberText>
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

const StyledWelcomeText = styled.h1`
  width: 109px;
  height: 29px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #000000;
`;
const StyledRememberText = styled.h2`
  width: 236px;
  height: 64px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #a4a4a4;
`;

const StyledLoginTabBox = styled.div`
  display: flex;
  gap: 25px;
  align-self: flex-start;
`;

// const customStyledInputText = styled(StyledInputText)`
//   margin-left: 2px;
// `;
