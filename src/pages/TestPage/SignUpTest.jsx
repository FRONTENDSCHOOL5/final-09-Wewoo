import React, { useState } from 'react';
import styled from 'styled-components';

export default function SignUpTest() {
  const [imagePreview, setImagePreview] = useState('https://mandarin.api.weniv.co.kr/Ellipse.png');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountName, setAccountName] = useState('');
  const [bio, setBio] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    nickname: '',
    email: '',
    password: '',
    accountName: '',
  });

  const url = 'https://api.mandarin.weniv.co.kr';

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
    }
  };

  const handleSignUp = async () => {
    setErrorMessages({
      nickname: '',
      email: '',
      password: '',
      accountName: '',
    }); // Reset error messages

    if (!validateInputs()) return; // Validate inputs before sign up

    const userData = {
      user: {
        username: nickname,
        email: email,
        password: password,
        accountname: accountName,
        intro: bio,
        image: imagePreview ? imagePreview : 'https://mandarin.api.weniv.co.kr/Ellipse.png',
      },
    };

    try {
      const response = await fetch(url + '/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Sign up successful');
        // Handle the response from the API
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Error signing up:', response.status);
        // Handle error cases
      }
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error cases
    }
  };

  const handleBlur = (fieldName) => {
    validateField(fieldName);
  };

  const validateField = (fieldName) => {
    switch (fieldName) {
      case 'nickname':
        if (!nickname.trim()) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            nickname: '닉네임은 필수 입력사항입니다.',
          }));
        } else {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            nickname: '',
          }));
        }
        break;
      case 'email':
        if (!email.trim()) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            email: '이메일은 필수 입력사항입니다.',
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
            password: '비밀번호는 필수 입력사항입니다.',
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
      case 'accountName':
        if (!accountName.trim()) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            accountName: '계정이름은 필수 입력사항입니다.',
          }));
        } else if (!isValidAccountName(accountName)) {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            accountName: '계정이름 양식이 올바르지 않습니다.(영문, 숫자, 밑줄, 마침표만 사용가능)',
          }));
        } else {
          setErrorMessages((prevErrors) => ({
            ...prevErrors,
            accountName: '',
          }));
        }
        break;
      default:
        break;
    }
  };

  const validateInputs = () => {
    let isValid = true;

    // Validate nickname
    if (!nickname.trim()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        nickname: '닉네임은 필수 입력사항입니다.',
      }));
      isValid = false;
    }

    // Validate email
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

    // Validate password
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

    // Validate accountName
    if (!accountName.trim()) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        accountName: '계정이름은 필수 입력사항입니다.',
      }));
      isValid = false;
    } else if (!isValidAccountName(accountName)) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        accountName: '계정이름 양식이 올바르지 않습니다.(영문, 숫자, 밑줄, 마침표만 사용가능)',
      }));
      isValid = false;
    }

    return isValid;
  };

  const isValidEmail = (value) => {
    // Email validation logic
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isValidAccountName = (value) => {
    // Account Name validation logic
    return /^[a-zA-Z0-9._]+$/.test(value);
  };

  return (
    <section className='container'>
      <div className='wrapper'>
        <label htmlFor='username'>닉네임</label>
        <Input
          type='text'
          name='username'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          onBlur={() => handleBlur('nickname')}
        />
        {errorMessages.nickname && <ErrorMessage>{errorMessages.nickname}</ErrorMessage>}

        <label htmlFor='email'>이메일</label>
        <Input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
        />
        {errorMessages.email && <ErrorMessage>{errorMessages.email}</ErrorMessage>}

        <label htmlFor='password'>비밀번호</label>
        <Input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => handleBlur('password')}
        />
        {errorMessages.password && <ErrorMessage>{errorMessages.password}</ErrorMessage>}

        <label htmlFor='accountname'>계정이름</label>
        <Input
          type='text'
          name='text'
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          onBlur={() => handleBlur('accountName')}
        />
        {errorMessages.accountName && <ErrorMessage>{errorMessages.accountName}</ErrorMessage>}

        <label htmlFor='intro'>자기소개</label>
        <Textarea name='intro' value={bio} onChange={(e) => setBio(e.target.value)} />

        <label htmlFor='profileImage'>프로필사진</label>
        <Input type='file' name='profileImage' onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} alt='Preview' style={{ width: '200px' }} />}

        <button onClick={handleSignUp}>회원가입</button>
      </div>
    </section>
  );
}

const Input = styled.input`
  border: 1px solid #191919;
`;

const Textarea = styled.textarea`
  border: 1px solid #191919;
`;

const ErrorMessage = styled.span`
  color: red;
`;
