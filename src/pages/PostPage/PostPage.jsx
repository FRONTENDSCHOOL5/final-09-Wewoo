import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// img import
import commentIcon from '../../assets/icons/PostPage/comment-icon.png';
import likeIcon from '../../assets/icons/PostPage/like-icon.png';
import addPostImg from '../../assets/images/Postpage/addPost.png';
import likeActiveIcon from '../../assets/icons/PostPage/like-active-icon.png';
import modalIcon from '../../assets/icons/PostPage/modal-icon.png';

import {
  PostHeader,
  ContentWrap,
  PostFrame,
  PostContent,
  PostContentBox,
  PostInfo,
  PostReact,
  AddPostBtn,
} from './PostPageStyle';
import TopBar from '../../components/common/TopBar/TopBar';
import BottomNavBar from '../../components/common/BottomNavBar/BottomNavBar';
import { UserContext } from '../../context/UserContext';
import styled from 'styled-components';

const PostPage = () => {
  const [postsData, setPostsData] = useState([]);
  const [likeClicked, setLikeClicked] = useState(false);
  const [activePostFilter, setActivePostFilter] = useState(0);
  const [postType, setPostType] = useState('/post/feed/?limit=3&skip=0');
  const postFilterArr = ['이웃들의 글', '나의 글'];
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const getUserInfo = async () => {
    await updateUser(JSON.parse(localStorage.getItem('user')));
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const addPostNavi = () => {
    navigate('/post/add-post');
  };

  const postDetailNavi = () => {
    navigate('/post/detail');
  };

  ///post/feed/?limit=5&skip=5
  ///post?limit=5&skip=0
  const url = 'https://api.mandarin.weniv.co.kr';
  const postTypeHandler = (index) => {
    if (index === 0) {
      setPostType('/post/feed');
      // setPostType('/post?limit=5&skip=0');
    } else if (index === 1) {
      setPostType(`/post/${user.accountname}/userpost`);
    }
    // else {    }
  };
  const getPosts = async () => {
    console.log(user);
    try {
      const response = await fetch(url + postType, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.posts);
        setPostsData(data.posts ? data.posts : data.post);
        console.log('여기야!');
        // updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const postLike = async (postId) => {
    try {
      const response = await fetch(url + `/post/${postId}/heart`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log('좋아요!');

        setLikeClicked((prev) => !prev);
        // updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const unlike = async (postId) => {
    try {
      const response = await fetch(url + `/post/${postId}/unheart`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log('좋아요!');

        setLikeClicked((prev) => !prev);
        // updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  useEffect(() => {
    if (user) {
      getPosts();
    }
  }, [user, likeClicked, activePostFilter, postType]);

  const goToPostDetail = (postId) => {
    navigate(`/post/detail/${postId}`);
  };

  return (
    <>
      <h1 className='a11y-hidden'>게시판</h1>
      <PostHeader>
        <TopBar iconColor={'#191919'} />
        <div>
          <h2>
            {user?.username}님!
            <br />
            오늘은 어떤 일이 있었나요?
          </h2>
        </div>
      </PostHeader>
      <PostNav>
        <ul>
          {postFilterArr.map((el, index) => {
            return (
              <li
                key={index}
                className={activePostFilter === index ? 'active' : ''}
                onClick={() => {
                  setActivePostFilter(index);
                  postTypeHandler(index);
                }}
              >
                {el}
              </li>
            );
          })}
          <AddPostBtn onClick={addPostNavi}>
            <img src={addPostImg} alt='새 글 작성' />
          </AddPostBtn>
        </ul>
      </PostNav>
      <PostsWrapper>
        <ul>
          {postsData ? (
            postsData?.map((el, index) => {
              const date = new Date(el.createdAt);
              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, '0');
              const day = String(date.getDate()).padStart(2, '0');
              const created = `${year}.${month}.${day}.`;
              return (
                <li key={index}>
                  <PostContainer>
                    <PostFirstRow
                      onClick={() => {
                        goToPostDetail(el.id);
                      }}
                    >
                      <div>
                        <PostUserInfoWrapper>
                          <img src={el.author.image} alt='작성자 프로필 사진' />
                          <span>{el.author.username}</span>
                        </PostUserInfoWrapper>
                        <span>{created}</span>
                      </div>
                      {/* <ModalIconWrapper onClick={() => setIsModalOpen((prev) => !prev)}>
                        <img src={modalIcon} alt='더보기버튼' />
                      </ModalIconWrapper>
                      {isModalOpen && (
                        <ModalMenu onClick={() => setIsModalOpen((prev) => !prev)}>
                          테스트
                        </ModalMenu>
                      )} */}
                      <p>{el.content}</p>
                      {el.image && (
                        <FeedImage>
                          <img src={el.image} alt='게시글 이미지' />
                        </FeedImage>
                      )}
                    </PostFirstRow>
                    <PostSecondRow>
                      <div
                        onClick={() => {
                          if (el.hearted) {
                            unlike(el.id);
                          } else {
                            postLike(el.id);
                          }
                        }}
                      >
                        <PostsSocialBtn>
                          <img src={el.hearted ? likeActiveIcon : likeIcon} alt='좋아요버튼' />
                        </PostsSocialBtn>
                        <span>정확해요</span>
                        <span>{el.heartCount}</span>
                      </div>
                      <div>
                        <PostsSocialBtn
                          onClick={() => {
                            goToPostDetail(el.id);
                          }}
                        >
                          <img src={commentIcon} alt='댓글버튼' />
                        </PostsSocialBtn>
                        <span>댓글</span>
                        <span>{el.commentCount ? el.commentCount : 0}</span>
                      </div>
                      {/* {index === postsData.length - 1 && (
                        <ScrollToTopButton>
                          <i className='fa fa-chevron-up'></i>
                        </ScrollToTopButton>
                      )} */}
                    </PostSecondRow>
                  </PostContainer>
                </li>
              );
            })
          ) : (
            <EmptyPostContainer>작성된 게시글이 없습니다.</EmptyPostContainer>
          )}
        </ul>
      </PostsWrapper>
      <BottomNavBar />
    </>
  );
};

export default PostPage;

const ModalMenu = styled.div`
  width: 100px;
  position: absolute;
  right: 7px;
  top: 14px;
  z-index: 49;
  cursor: pointer;
`;
const ModalIconWrapper = styled.div`
  width: 16px;
  position: absolute;
  right: 7px;
  top: 14px;
  z-index: 49;
  cursor: pointer;
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
  }
`;

const PostUserInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0;
  img {
    width: 40px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 100%;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #999;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  font-size: 16px;
  font-weight: bold;
  border-top: 1px solid rgb(221, 221, 221);
`;

const PostsWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 290px);
  overflow-y: scroll;
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    /* 크롬, 사파리, 오페라, 엣지 */
    display: none;
  }
  position: relative;
  li {
    cursor: pointer;
  }
`;

const PostNav = styled.nav`
  width: 100%;
  margin: 10px 0;
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative;
    li {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      /* width: 30px; */
      /* height: 15px; */
      cursor: pointer;
      &.active {
        color: white;
        background-color: black;
        border-radius: 10px;
      }
    }
  }
`;

const FeedImage = styled.div`
  width: 200px;
  overflow: hidden;
  align-self: center;

  img {
    margin-bottom: 25px;
    display: block;
    width: 100%;

    aspect-ratio: 60/60;
    object-fit: cover;
  }
`;

const PostFirstRow = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  /* padding: 30px 0 10px 0; */

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    padding: 35px 20px 10px;
    span:nth-child(1) {
      font-size: 14px;
      color: #aaa;
      font-weight: bold;
      border-radius: 10px;
      padding: 4px 6px;
      background-color: #f6f6f6;
    }
    span: nth-child(2) {
      font-size: 14px;
      color: #999;
    }
  }
  & > span {
    font-size: 12px;
    color: #aaa;
  }
  p {
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 0 20px 10px;
  }
`;

const PostSecondRow = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px 20px 15px;
  border-top: 1px solid #ccc;
  border-bottom: 10px solid #ccc;
  & > div {
    display: flex;
    font-size: 14px;
    gap: 5px;
    align-items: center;
    cursor: pointer;
  }
`;

const PostContainer = styled.div`
  width: 100%;
  /* margin-top: 20px;
  margin-bottom: 50px; */
`;

const PostPageHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 50px;
  align-items: center;

  img {
    border-radius: 100%;
  }
`;

const PostsSocialBtn = styled.div`
  width: 18px;
  overflow: hidden;

  /* border-radius: 100px; */

  img {
    display: block;
    width: 100%;

    aspect-ratio: 60/60;
    object-fit: cover;
  }
`;
