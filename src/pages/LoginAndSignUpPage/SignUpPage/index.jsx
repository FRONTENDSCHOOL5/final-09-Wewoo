import React, { useState } from 'react';
import styled from 'styled-components';
import BackIcon from '../../../assets/icons/common/back.png';

import { useNavigate } from 'react-router-dom';
import {
  StyledBackButtonBox,
  StyledHeader,
  StyledContentsBox,
  StyledContainer,
  StyledBoxWrapper,
  StyledLoginTab,
  StyledNextButton,
} from '../loginPageCommonStyle';

import {
  handleAccountNameFormNextBtn,
  handleAccountSettingFormNextBtn,
  handleProfileSettingFormNextBtn,
} from './handleNextButton';
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
      handleAccountSettingFormNextBtn(accountInfo, setErrorMessage, setSignUpLevel);
      return;
    }

    if (signUpLevel === 2) {
      handleAccountNameFormNextBtn(accountInfo, setErrorMessage, setSignUpLevel);
      return;
    }

    if (signUpLevel === 3) {
      handleProfileSettingFormNextBtn(accountInfo, profileInfo, setSignUpLevel);
      return;
    }

    if (signUpLevel === 4) {
      navigate('/');
    }
  };

  const handleChangeLevel = (level) => {
    if (level < signUpLevel && signUpLevel !== 4) setSignUpLevel(level);
  };

  const disable = {
    1: !accountInfo.email || !accountInfo.password || !accountInfo.confirmPassword,
    2: !accountInfo.accountName,
    3: !profileInfo.description && !profileInfo.username,
  };

  const nickName = signUpLevel === 4 ? JSON.parse(localStorage.getItem('user')) : null;

  return (
    <StyledContainer>
      <StyledBoxWrapper>
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
            <StyledLoginTab
              onClick={() => handleChangeLevel(1)}
              className={signUpLevel === 1 ? '' : 'disable'}
            >
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
              handleNextButton={handleNextButton}
            />
          )}
          {/* 프로필 레벨 2 */}
          {signUpLevel === 2 && (
            <AccountNameForm
              accountInfo={accountInfo}
              setAccountInfo={setAccountInfo}
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
              handleNextButton={handleNextButton}
            />
          )}
          {/* 프로필 레벨 3 */}
          {signUpLevel === 3 && (
            <ProfileSettingsForm
              profileInfo={profileInfo}
              setProfileInfo={setProfileInfo}
              handleNextButton={handleNextButton}
            />
          )}
          {/* 프로필 레벨 4 */}
          {signUpLevel === 4 && (
            <>
              <StyledWelcomeText>반갑습니다!</StyledWelcomeText>
              <StyledRememberText>
                {nickName ? nickName.username || nickName.accountname : ''}님, 위급할 땐 위용위용을
                기억해주세요!
              </StyledRememberText>
            </>
          )}
        </StyledContentsBox>

        <div>
          {signUpLevel !== 1 && (
            <StyledlevelDotWrapper>
              <StyledLevelDot isActive={signUpLevel === 2} onClick={() => handleChangeLevel(2)} />
              <StyledLevelDot isActive={signUpLevel === 3} onClick={() => handleChangeLevel(3)} />
              <StyledLevelDot isActive={signUpLevel === 4} onClick={() => handleChangeLevel(4)} />
            </StyledlevelDotWrapper>
          )}
          <StyledNextButton
            disabled={signUpLevel !== 3 && !!disable[signUpLevel]}
            onClick={handleNextButton}
            className={signUpLevel !== 3 && disable[signUpLevel] ? 'disable' : ''}
          >
            {signUpLevel === 3 && disable[signUpLevel]
              ? '다음에 할래요'
              : signUpLevel !== 4
              ? '다음'
              : '시작하기'}
          </StyledNextButton>
        </div>
      </StyledBoxWrapper>
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
  margin-top: 64px;
  margin-bottom: 30px;
  color: #000000;
`;
const StyledRememberText = styled.span`
  width: 236px;
  height: 64px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #a4a4a4;
  line-height: 150%;
  margin-bottom: 100px;
`;

const StyledLoginTabBox = styled.button`
  display: flex;
  gap: 25px;
  align-self: flex-start;
`;

const StyledLevelDot = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#000000' : '#eeeeee')};
  width: 8px;
  height: 8px;
  border-radius: 8px;
`;

const StyledlevelDotWrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`;
