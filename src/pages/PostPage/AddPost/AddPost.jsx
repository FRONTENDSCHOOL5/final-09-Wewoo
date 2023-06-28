import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';

// Image import
import back from '../../../assets/icons/common/back.png';
import addImage from '../../../assets/images/Postpage/addImage.png';

// 예시 이미지
import { AddPostTop } from './AddPostStyle';

const AddPost = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate('/post');
  };
  const { user, updateUser } = useContext(UserContext);
  const url = 'https://api.mandarin.weniv.co.kr';
  const [imagePreview, setImagePreview] = useState('https://mandarin.api.weniv.co.kr/Ellipse.png');
  const [selectedImage, setSelectedImage] = useState(null);
  const addImageBtn = useRef();
  const [postContent, setPostContent] = useState('');
  const textareaRef = useRef(null);
  const handleContentChange = (event) => {
    setPostContent(event.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setSelectedImage(file);
      };
    }
  };

  const addImageHandler = () => {
    addImageBtn.current.click();
  };

  const previousImgUpload = async () => {
    const imgData = new FormData();
    imgData.append('image', selectedImage);
    try {
      const response = await fetch(url + '/image/uploadfiles', {
        method: 'POST',
        body: imgData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(data[0].filename);
        const fullImgName = `https://api.mandarin.weniv.co.kr/${data[0].filename}`;
        console.log(fullImgName);
        addPostHandler(fullImgName);
        // updateRefresh();
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };

  const addPostHandler = async (newImgFilename) => {
    console.log(user);
    const postData = {
      post: {
        content: postContent,
        image: newImgFilename,
      },
    };
    try {
      const response = await fetch(url + `/post`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(data.post);
        navigate(-1);
        // updateRefresh();
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };

  const getUserInfo = async () => {
    await updateUser(JSON.parse(localStorage.getItem('user')));
    console.log(user);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <AddPostTop>
        <button type='button' onClick={backPage}>
          <img src={back} />
        </button>
        <button type='submit' onClick={previousImgUpload}>
          완료
        </button>
      </AddPostTop>
      <PostContent>
        <span>이웃들에게 알려주세요</span>
        <textarea
          placeholder='자유롭게 글을 작성해주세요'
          value={postContent}
          onChange={handleContentChange}
          ref={textareaRef}
        />
      </PostContent>
      <AddImage onClick={addImageHandler}>
        <img src={addImage} alt='이미지추가버튼' />
        <Input
          type='file'
          name='profileImage'
          onChange={handleImageChange}
          bgImg={addImage}
          ref={addImageBtn}
        />
        {imagePreview && <img src={imagePreview} alt='Preview' style={{ width: '200px' }} />}
      </AddImage>
    </>
  );
};

export default AddPost;

const PostContent = styled.div`
  margin-top: 20px;
  width: 100%;

  font-size: 16px;
  font-weight: bold;
  padding-bottom: 15px;
  span:nth-child(1) {
    padding: 0 20px;
  }

  textarea {
    width: 100%;
    padding: 20px;
    font-size: 14px;
    margin-top: 10px;
    font-weight: normal;

    resize: none;
    overflow-y: hidden;
    box-sizing: border-box;
  }
`;
const AddImage = styled.div`
  width: 200px;
  position: relative;
  margin-bottom: 50px;
  img {
    aspect-ratio: 1;
    object-fit: contain;
  }
  img:nth-child(1) {
    position: absolute;
    width: 60px;
    z-index: 49;
    right: 0;
    bottom: 0;
  }
`;
const Input = styled.input`
  display: none;
`;
