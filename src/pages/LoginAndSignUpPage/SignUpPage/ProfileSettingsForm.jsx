import React, { useEffect, useState } from 'react';
import { StyledInputText, StyledInput } from '../loginPageCommonStyle';
import styled from 'styled-components';
import uploadCamera from '../../../assets/images/loginPage/uploadCamera.png';
import uploadDefaultImg from '../../../assets/images/loginPage/uploadDefaultImg.png';

export default function ProfileSettingsForm({ profileInfo, setProfileInfo }) {
  const [preview, setPreview] = useState('');
  const handleDescription = (e) => {
    setProfileInfo((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleUsername = (e) => {
    setProfileInfo((prev) => ({ ...prev, username: e.target.value }));
  };

  const handleUploadImg = () => {
    const imgUploadInput = document.getElementById('img-upload');
    imgUploadInput.click();
    imgUploadInput.onchange = (e) => {
      setProfileInfo((prev) => ({ ...prev, imgFile: e.target.files[0] }));
      if (preview) {
        URL.revokeObjectURL(preview);
      }
      setPreview(URL.createObjectURL(e.target.files[0]));
    };
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <>
      <StyledImgUpload onClick={handleUploadImg}>
        <input id='img-upload' type='file' accept='image/*' />
        <img className='camera' src={uploadCamera} />
        {preview ? (
          <img className='preview' src={preview} />
        ) : (
          <img src={uploadDefaultImg} alt='프로필 이미지' />
        )}
      </StyledImgUpload>

      <StyledInputText>사용자 이름</StyledInputText>
      <StyledInput
        value={profileInfo.username}
        onChange={handleUsername}
        className='mb-37'
        placeholder='사용자 이름 또는 닉네임을 입력해 주세요.'
      />
      <StyledInputText>소개</StyledInputText>

      <StyledInput
        value={profileInfo.description}
        onChange={handleDescription}
        placeholder='자신을 소개해주세요.'
      />
    </>
  );
}

const StyledImgUpload = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  position: relative;

  .camera {
    position: absolute;
    bottom: -4.91px;
    right: 0px;
    z-index: 3;
    width: 35.9px;
    height: 35.9px;
  }
  .preview {
    width: 106px;
    height: 106px;
    object-fit: cover;
    border-radius: 50%;
  }

  input {
    display: none;
  }
`;
