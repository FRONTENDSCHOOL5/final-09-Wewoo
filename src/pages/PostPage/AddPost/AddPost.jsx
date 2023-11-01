import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';

import back from '../../../assets/icons/common/back.png';
import addImage from '../../../assets/images/Postpage/addImage.png';
import { AddPostTop } from './AddPostStyle';

const AddPost = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate('/post');
  };
  const { user, updateUser } = useContext(UserContext);
  const url = 'https://api.mandarin.weniv.co.kr';
  const [imagePreview, setImagePreview] = useState([
    'https://mandarin.api.weniv.co.kr/Ellipse.png',
  ]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLength, setImageLength] = useState(0);
  const [loadCheck, setLoadCheck] = useState(0);
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
    const file = event.target.files;
    if (file.length === 1) {
      setImageLength(1);
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onloadend = () => {
        setLoadCheck(0);
        setImagePreview([reader.result]);
        setSelectedImage(file[0]);
      };
    } else if (file.length > 1 && file.length <= 3) {
      const imagePreviews = [];
      const selectedImages = [];

      for (let i = 0; i < file.length; i++) {
        const eachImg = file[i];

        const reader = new FileReader();
        reader.readAsDataURL(eachImg);

        reader.onloadend = () => {
          imagePreviews.push(reader.result);
          selectedImages.push(eachImg);

          if (imagePreviews.length === file.length) {
            setImageLength(file.length);
            setImagePreview(imagePreviews);
            setSelectedImage(selectedImages);
          }
        };
      }
    }
  };

  const addImageHandler = () => {
    addImageBtn.current.click();
  };

  const previousImgUpload = async () => {
    let uploadedImgName = [];
    let fullImgName = '';
    if (imageLength > 1) {
      for (let i = 0; i < imageLength; i++) {
        const imgData = new FormData();
        imgData.append('image', selectedImage[i]);
        try {
          const response = await fetch(url + '/image/uploadfiles', {
            method: 'POST',
            body: imgData,
          });
          if (response.ok) {
            const data = await response.json();
            uploadedImgName.push(`https://api.mandarin.weniv.co.kr/${data[0].filename}`);
          } else {
            console.error('Error:', response.status);
          }
        } catch (error) {
          console.error('실패:', error);
        }
      }
      fullImgName = `${uploadedImgName.join(',')}`;
    } else if (imageLength === 1) {
      const imgData = new FormData();
      imgData.append('image', selectedImage);
      try {
        const response = await fetch(url + '/image/uploadfiles', {
          method: 'POST',
          body: imgData,
        });
        if (response.ok) {
          const data = await response.json();
          fullImgName = `https://api.mandarin.weniv.co.kr/${data[0].filename}`;
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('실패:', error);
      }
    }
    addPostHandler(fullImgName);
  };

  const addPostHandler = async (newImgFilename) => {
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
        // const data = await response.json();
        navigate(-1);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };

  const getUserInfo = async () => {
    await updateUser(JSON.parse(localStorage.getItem('user')));
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
        <img id='addImgBtn' src={addImage} alt='이미지추가버튼' />
        <Input
          type='file'
          name='profileImage'
          multiple
          onChange={handleImageChange}
          bgImg={addImage}
          ref={addImageBtn}
        />
        {imagePreview && (imageLength === 1 || imageLength === 0) && (
          <img src={imagePreview[0]} alt='Preview' style={{ width: '200px' }} />
        )}
        {imagePreview && imageLength >= 2 && (
          <MultiImageContainer>
            {imageLength >= 2 &&
              imagePreview.map((eachImg, index) => {
                return (
                  <li key={index}>
                    <div>
                      <img src={eachImg} alt='Preview' style={{ width: '200px' }} />
                    </div>
                  </li>
                );
              })}
          </MultiImageContainer>
        )}
      </AddImage>
    </>
  );
};

export default AddPost;

const MultiImageContainer = styled.ul`
  display: flex;
  color: #000;
  gap: 15px;
  width: 100%;
  overflow-x: scroll;
  margin-bottom: 25px;
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    /* 크롬, 사파리, 오페라, 엣지 */
    display: none;
  }
  li {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    -webkit-box-align: center;
    align-items: center;
    width: 200px;
    cursor: pointer;
    div {
      width: 100%;
      img {
        border: 1px solid #eee;
        aspect-ratio: 1;
        object-fit: cover;
      }
    }
  }
`;

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
  display: flex;
  justify-content: center;
  width: 80%;
  position: relative;
  margin-bottom: 50px;
  img {
    aspect-ratio: 1;
    object-fit: contain;
  }
  #addImgBtn {
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
