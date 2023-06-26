import { imageUploadApi } from '../../../apis/imageUpload';
import {
  accountNameValidationApi,
  emailValidationApi,
  loginApi,
  signUpApi,
} from '../../../apis/user';

export const handleAccountSettingFormNextBtn = (accountInfo, setErrorMessage, setSignUpLevel) => {
  // 이메일 정규표현식 *잘못된 이메일 형식입니다. 코드
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  if (!emailRegex.test(accountInfo.email.toLowerCase())) {
    setErrorMessage(['emailValidationError']);
    return;
  }
  // 비밀번호 유효성 검사 (*비밀번호는 6자 이상이어야 합니다.)
  if (accountInfo.password.length < 6) {
    setErrorMessage(['passwordError']);
    return;
  }

  if (accountInfo.password !== accountInfo.confirmPassword) {
    setErrorMessage(['confirmPasswordError']);
    return;
  }

  emailValidationApi(accountInfo.email, {
    onSuccess: ({ message }) => {
      if (message === '사용 가능한 이메일 입니다.') {
        setSignUpLevel((prev) => prev + 1);
        return;
      }

      if (message === '이미 가입된 이메일 주소 입니다.') {
        setErrorMessage(['emailAlreadyError']);
        return;
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export const handleAccountNameFormNextBtn = (accountInfo, setErrorMessage, setSignUpLevel) => {
  // 계정 id 유효성 검사 (영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.)
  const accountNameRegex = new RegExp('^[a-zA-Z0-9_.]+$');
  if (!accountNameRegex.test(accountInfo.accountName)) {
    setErrorMessage(['accountNameError']);
    return;
  }

  accountNameValidationApi(accountInfo.accountName, {
    onSuccess: ({ message }) => {
      if (message === '사용 가능한 계정ID 입니다.') {
        setSignUpLevel((prev) => prev + 1);
        return;
      }

      if (message === '이미 가입된 계정ID 입니다.') {
        setErrorMessage(['accountNameAlreadyError']);
        return;
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

const handleLogin = (accountInfo, setSignUpLevel) =>
  loginApi(
    { email: accountInfo.email, password: accountInfo.password },
    {
      onSuccess: ({ user }) => {
        localStorage.setItem('accessToken', user.token);
        localStorage.setItem('user', JSON.stringify(user));
        setSignUpLevel((prev) => prev + 1);
      },
      onError: (err) => console.log(err),
    },
  );

const handleSignUp = (userInfo, setSignUpLevel) =>
  signUpApi(userInfo, {
    onSuccess: ({ message }) => {
      if (message === '회원가입 성공') handleLogin(userInfo, setSignUpLevel);
    },
    onError: (err) => {
      console.log(err);
    },
  });

export const handleProfileSettingFormNextBtn = (accountInfo, profileInfo, setSignUpLevel) => {
  const userInfo = {
    username: profileInfo.username,
    email: accountInfo.email,
    password: accountInfo.password,
    accountname: accountInfo.accountName,
    intro: profileInfo.description,
  };

  if (profileInfo.imgFile) {
    imageUploadApi(profileInfo.imgFile, {
      onSuccess: (data) => {
        handleSignUp(
          {
            image: `https://api.mandarin.weniv.co.kr/${data.filename}`,
            ...userInfo,
          },
          setSignUpLevel,
        );
      },
      onError: (err) => {
        console.log(err);
      },
    });
  } else {
    handleSignUp(userInfo, setSignUpLevel);
  }
};
