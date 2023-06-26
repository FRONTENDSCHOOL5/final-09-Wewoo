import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from './UserContext';

export default function LoginTest() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });
  const url = 'https://api.mandarin.weniv.co.kr';
  const { user, updateUser, refresh } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = async () => {
    setErrorMessages({
      nickname: '',
      email: '',
      password: '',
      accountName: '',
    });

    if (!validateInputs()) return;

    const userData = {
      user: {
        email,
        password,
      },
    };
    try {
      const response = await fetch(url + '/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        await updateUser(data.user);
        setIsLogin((prev) => !prev);
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const getUsersInfo = async () => {
    try {
      const response = await fetch(url + `/user/myinfo`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (response.ok) {
        console.log('Sign up successful');
        const data = await response.json();
        const newUserData = { ...user, ...data.user };
        updateUser((prevUser) => ({ ...prevUser, ...newUserData }));
        // 로그인 성공 후 사용자 정보를 localStorage에 저장
        localStorage.setItem('user', JSON.stringify(newUserData));
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  useEffect(() => {
    // console.log(isLogin);
    if (user) {
      getUsersInfo();
    }
    console.log('getUserInfo 실행');
  }, [isLogin, refresh]);

  useEffect(() => {
    // 페이지 로드 시 localStorage에서 사용자 정보 가져오기
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      updateUser(JSON.parse(storedUser));
    }
  }, []);

  const handleBlur = (fieldName) => {
    validateField(fieldName);
  };

  const validateField = (fieldName) => {
    switch (fieldName) {
      case 'email':
        if (!email.trim()) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            email: '이메일을 입력해주세요.',
          }));
        } else if (!isValidEmail(email)) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            email: '이메일 형식이 올바르지 않습니다.',
          }));
        } else {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            email: '',
          }));
        }
        break;
      case 'password':
        if (!password.trim()) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            password: '비밀번호를 입력해주세요.',
          }));
        } else if (password.length < 6) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            password: '비밀번호는 6글자 이상이어야 합니다.',
          }));
        } else {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            password: '',
          }));
        }
        break;

      default:
        break;
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (!email.trim()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: '이메일은 필수 입력사항입니다.',
      }));
      isValid = false;
    } else if (!isValidEmail(email)) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: '이메일 형식이 올바르지 않습니다.',
      }));
      isValid = false;
    }

    if (!password.trim()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        password: '비밀번호는 필수 입력사항입니다.',
      }));
      isValid = false;
    } else if (password.length < 6) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        password: '비밀번호는 6글자 이상이어야 합니다.',
      }));
      isValid = false;
    }

    return isValid;
  };

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  return (
    <section className='container'>
      <div className='wrapper'>
        <label htmlFor='email'>이메일</label>
        <Input
          type='email'
          name='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={() => handleBlur('email')}
        />
        {errorMessages.email && <ErrorMessage>{errorMessages.email}</ErrorMessage>}

        <label htmlFor='password'>비밀번호</label>
        <Input
          type='password'
          name='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={() => handleBlur('password')}
        />
        {errorMessages.password && <ErrorMessage>{errorMessages.password}</ErrorMessage>}

        <button onClick={handleLogin}>로그인</button>
      </div>
    </section>
  );
}

const Input = styled.input`
  border: 1px solid black;
`;

const ErrorMessage = styled.span`
  color: red;
`;
