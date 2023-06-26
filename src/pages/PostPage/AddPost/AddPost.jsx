import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Image import
import back from '../../../assets/icons/common/back.png';
import addImage from '../../../assets/images/Postpage/addImage.png';

import { AddPostTop, WriteForm, ImgUpload } from './AddPostStyle';

const AddPost = ({ onCreatePost, onCancel }) => {
  const contentRef = useRef('');
  const imageRef = useRef('');

  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const clickWriteHandle = () => {
    setContent(contentRef.current.value);
    setImage(imageRef.current.value);
  };

  useEffect(() => {
    // console.log(`content ${content}`);
  }, [content, image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePost(content);
    setContent('');
    onCreatePost(image);
    setImage('');
  };
  const handleUploadImg = () => {
    const imgUploadInput = document.getElementById('img-upload');
    imgUploadInput.click();
    imgUploadInput.onchange = (e) => {
      setImage((prev) => ({ ...prev, imgFile: e.target.files[0] }));
    };
  };
  const navigate = useNavigate();
  const backPage = () => {
    navigate('/post');
  };

  return (
    <>
      <section className='container'>
        <div className='wrapper'>
          <h2 className='a11y-hidden'>게시글 작성</h2>
          <AddPostTop>
            <button type='button' onClick={backPage}>
              <img src={back} />
            </button>
            <button type='submit' onClick={clickWriteHandle}>
              완료
            </button>
          </AddPostTop>
          <WriteForm action='/post' method='post' onSubmit={handleSubmit}>
            <textarea placeholder='텍스트를 입력하세요' defaultValue={content} ref={contentRef} />

            <ImgUpload onClick={handleUploadImg}>
              <input id='img-upload' type='file' multiple={true} accept='image/*' ref={imageRef} />
              <img src={addImage} alt='사진 추가' />
            </ImgUpload>
          </WriteForm>
        </div>
      </section>
    </>
  );
};

export default AddPost;
