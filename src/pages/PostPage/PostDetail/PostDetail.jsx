import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// img import
import commentIcon from '../../../assets/icons/PostPage/comment-icon.png';
import likeIcon from '../../../assets/icons/PostPage/like-icon.png';
import likeActiveIcon from '../../../assets/icons/PostPage/like-active-icon.png';
import modalIcon from '../../../assets/icons/PostPage/modal-icon.png';
import addIcon from '../../../assets/images/Postpage/addPost.png';

import backIcon from '../../../assets/icons/common/back.png';
import { UserContext } from '../../../context/UserContext';
import styled from 'styled-components';

const PostPage = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [commentContent, setCommentContent] = useState();
  const modalBtnRef = useRef();
  const [likeClicked, setLikeClicked] = useState(false);
  const [activePostFilter, setActivePostFilter] = useState(0);
  const [postId, setPostId] = useState();
  const navigate = useNavigate();
  const { user, updateUser, refresh, updateRefresh } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getUserInfo = async () => {
    await updateUser(JSON.parse(localStorage.getItem('user')));
  };
  useEffect(() => {
    setPostId(params.postId);
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
  const params = useParams();
  const getPosts = async () => {
    console.log(user);
    try {
      const response = await fetch(url + `/post/${postId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.post);
        setPostsData(data.post);
        console.log('여기야!');
        // updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const getComments = async () => {
    console.log(user);
    try {
      const response = await fetch(url + `/post/${postId}/comments`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCommentsData(data.comments);
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const addCommentBtnHandler = async (e) => {
    e.preventDefault();
    const commentData = {
      comment: {
        content: commentContent,
      },
    };
    try {
      const response = await fetch(url + `/post/${postId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(data.comment);

        updateRefresh();
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('실패:', error);
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
      getComments();
    }
  }, [user, likeClicked, activePostFilter, postId, refresh]);
  /* 
  const goToPostDetail = (postId) => {
    console.log(postId);
  }; */

  const backToPage = () => {
    navigate(-1);
  };

  const date = new Date(postsData.createdAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const created = `${year}.${month}.${day}.`;

  const postReport = async () => {
    try {
      const response = await fetch(url + `/post/${postId}/report`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log('신고완료!');
        // updateRefresh();
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('실패:', error);
    }
  };

  function getTimeDifference(createAt) {
    const currentTime = new Date(); // 현재 Date 객체
    const postTime = new Date(createAt); // 게시글의 createAt
    const timeDifference = currentTime - postTime; // 밀리초 단위의 차이 계산

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes}분 전`;
    } else if (hours < 24) {
      return `${hours}시간 전`;
    } else if (days < 4) {
      return `${days}일 전`;
    } else {
      const date = new Date(createAt);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}.${month}.${day}.`;
    }
  }

  console.log(commentsData);

  return (
    <>
      <PostDetailPageHeader
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        <img src={backIcon} alt='뒤로가기버튼' onClick={backToPage} />
        <span>게시글 상세</span>
      </PostDetailPageHeader>

      <PostsWrapper
        onClick={(e) => {
          if (e.target !== modalBtnRef.current) {
            setIsModalOpen(false);
          }
        }}
      >
        <ul>
          {postsData && (
            <li>
              <PostContainer>
                <PostFirstRow>
                  <div>
                    <PostUserInfoWrapper>
                      <img src={postsData?.author?.image} alt='작성자 프로필 사진' />
                      <span>{postsData?.author?.username}</span>
                    </PostUserInfoWrapper>
                    <span>{postsData?.createdAt && getTimeDifference(postsData?.createdAt)}</span>
                  </div>
                  <ModalIconWrapper
                    onClick={(e) => {
                      setIsModalOpen(true);
                    }}
                    ref={modalBtnRef}
                  >
                    <img src={modalIcon} alt='더보기버튼' />
                  </ModalIconWrapper>
                  {isModalOpen && (
                    <ModalMenu onClick={() => setIsModalOpen((prev) => !prev)}>
                      {user.accountname === postsData.author.accountname ? (
                        <>
                          <li>수정하기</li>
                          <li>삭제하기</li>
                        </>
                      ) : (
                        <li onClick={postReport}>신고하기</li>
                      )}
                    </ModalMenu>
                  )}
                  <p>{postsData?.content}</p>
                  {postsData?.image && (
                    <FeedImage>
                      <img src={postsData?.image} alt='게시글 이미지' />
                    </FeedImage>
                  )}
                </PostFirstRow>
                <PostSecondRow>
                  <div
                    onClick={() => {
                      if (postsData?.hearted) {
                        unlike(postsData?.id);
                      } else {
                        postLike(postsData?.id);
                      }
                    }}
                  >
                    <PostsSocialBtn>
                      <img src={postsData?.hearted ? likeActiveIcon : likeIcon} alt='좋아요버튼' />
                    </PostsSocialBtn>
                    <span>정확해요</span>
                    <span>{postsData?.heartCount}</span>
                  </div>
                  <div>
                    <PostsSocialBtn>
                      <img src={commentIcon} alt='댓글버튼' />
                    </PostsSocialBtn>
                    <span>댓글</span>
                    <span>{postsData?.commentCount ? postsData?.commentCount : 0}</span>
                  </div>
                  {/* {index === postsData.length - 1 && (
                        <ScrollToTopButton>
                          <i className='fa fa-chevron-up'></i>
                        </ScrollToTopButton>
                      )} */}
                </PostSecondRow>
              </PostContainer>
            </li>
          )}
        </ul>
      </PostsWrapper>
      <AddCommentContainer>
        {/* <span>이웃을 검색해요</span> */}
        <form onSubmit={addCommentBtnHandler}>
          <input
            type='text'
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <button type='submit'>
            <img src={addIcon} />
          </button>
        </form>
      </AddCommentContainer>
      {commentsData?.length !== 0 &&
        commentsData?.map((el, index) => {
          return (
            <PostComment key={index}>
              <div>
                <PostCommentWrapper>
                  <img src={el.author?.image} alt='작성자 프로필 사진' />
                  <span>{el.author?.username}</span>
                  {el.author?.accountname === user?.accountname && <span>작성자</span>}
                </PostCommentWrapper>
                {/* <span>{created}</span> */}
              </div>
              <ModalIconWrapper
                onClick={(e) => {
                  setIsModalOpen(true);
                }}
                ref={modalBtnRef}
              >
                <img src={modalIcon} alt='더보기버튼' />
              </ModalIconWrapper>
              {isModalOpen && (
                <ModalMenu onClick={() => setIsModalOpen((prev) => !prev)}>
                  {user.accountname === postsData.author.accountname ? (
                    <>
                      <li>수정하기</li>
                      <li>삭제하기</li>
                    </>
                  ) : (
                    <li onClick={postReport}>신고하기</li>
                  )}
                </ModalMenu>
              )}
              <p>{el.content}</p>
              <CommentCreatedAt>{getTimeDifference(el.createdAt)}</CommentCreatedAt>
            </PostComment>
          );
        })}
    </>
  );
};

export default PostPage;

const AddCommentContainer = styled.div`
  width: 100%;
  padding: 0 5px;
  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
    margin-bottom: 5px;

    box-shadow: 0 5px 7px 0 #ddd;
    input {
      display: block;
      width: 100%;
      /* height: 40px; */
      border-radius: 5px;
      padding: 12px 40px;
      border: 1px solid #aaa;
      /* border-bottom: 1px solid #eee; */
    }
    button {
      position: absolute;
      right: 16px;
      width: 25px;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
`;

const CommentCreatedAt = styled.span`
  align-self: flex-end;
  padding-right: 20px;
`;

const PostComment = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  /* gap: 10px; */
  margin-bottom: 10px;
  padding-bottom: 20px;
  /* padding: 30px 0 10px 0; */
  border-bottom: 3px solid #eee;
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-top: 1px solid #ddd; */
    padding: 20px;
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
    font-size: 14px;
    /* font-weight: bold; */
    padding: 0 20px 10px;
  }
`;

const PostCommentWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0;
  img {
    width: 30px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 100%;
  }
  & > span:nth-child(3) {
    color: #aaa;
    padding: 4px 6px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const PostDetailPageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 16px;
  padding: 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
  img {
    position: absolute;
    width: 15px;
    left: 20px;
    cursor: pointer;

    aspect-ratio: 15/15;
    object-fit: contain;
  }
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const ModalMenu = styled.ul`
  width: 120px;
  position: absolute;
  right: 7px;
  top: 14px;
  z-index: 49;
  cursor: pointer;
  /* height: 85px; */
  border: 1px solid #aaa;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    display: flex;
    width: 100%;
    height: 42px;
    justify-content: center;
    align-items: center;
  }
  li:nth-child(2) {
    border-top: 1px solid #aaa;
  }
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
    pointer-events: none;
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
  overflow-y: scroll;
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    /* 크롬, 사파리, 오페라, 엣지 */
    display: none;
  }
  position: relative;
  li {
    /* cursor: pointer; */
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
    /* font-weight: bold; */
    padding: 0 20px 10px;
  }
`;

const PostSecondRow = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px 20px 15px;
  border-top: 1px solid #ccc;
  /* border-bottom: 1px solid #eee; */
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

// import React, { useState } from 'react';
// import TopBar from '../../../components/common/TopBar/TopBar';
// import PostDetailModal from '../../../components/common/PostDetailModal/PostDetailModal';
// import {
//   PostDetailTop,
//   PostContentBox,
//   PostInfo,
//   PostReact,
//   PostCommentBox,
//   CommentPostInfo,
//   CommentToReact,
//   ReplyCommentBox,
//   ReplayCommentInfo,
//   WriteCommentBox,
// } from './PostDetailStyle';

// //image import
// import profileEXImg from '../../../assets/images/Postpage/profileEX.png';
// import commentIcon from '../../../assets/icons/PostPage/comment-icon.png';
// import likeIcon from '../../../assets/icons/PostPage/like-icon.png';
// import mapIcon from '../../../assets/icons/PostPage/map-icon.svg';
// import imageIcon from '../../../assets/icons/PostPage/image-icon.svg';
// // 예시 이미지 임포트
// import postEX from '../../../assets/images/main/weatherEX.png';

// const PostDetail = ({ id, post, onDeletePost, modalOpen, setModalOpen }) => {
//   return (
//     <>
//       <section className='container'>
//         <div className='wrapper'>
//           <PostDetailTop>{/* <TopBar iconColor={'#191919'} /> */}</PostDetailTop>

//           <PostContentBox>
//             <PostInfo>
//               <img className='user-img' src={profileEXImg} />
//               <p className='user-name'> 베리 </p>
//               <span> 내손1동</span>
//               <p className='post-time'> 5분 전</p>
//             </PostInfo>
//             <p>
//               계원예대 쪽에 지금 불났나요? 연기가 보이네요. 계원예대 쪽에 지금 불났나요? 연기가
//               보이네요. 계원예대 쪽에 지금 불났나요? 연기가 보이네요. 계원예대 쪽에 지금 불났나요?
//               연기가 보이네요.
//               <img src={postEX} />
//             </p>
//             <PostReact>
//               <div>
//                 <img src={likeIcon} alt='정확해요' />
//                 <span> 정확해요 3</span>
//               </div>
//               <div>
//                 <img src={commentIcon} alt='댓글' />
//                 <span> 댓글 4</span>
//               </div>
//             </PostReact>
//           </PostContentBox>

//           <PostCommentBox>
//             <CommentPostInfo>
//               <img className='user-img' src={profileEXImg} />
//               <p className='user-name'> 베리 </p>
//               <span> 내손1동</span>
//               <p className='post-time'> 5분 전</p>
//               <PostDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
//             </CommentPostInfo>
//             <div className='react-wrap'>
//               <p className='comment-content'>저도 주변 카페인데 무슨 일 있나요?</p>
//               <CommentToReact>
//                 <p className='reply-comment'> 답글쓰기</p>
//                 <button className='like-btn'>
//                   <img src={likeIcon} alt='좋아요' />
//                 </button>
//               </CommentToReact>
//             </div>
//           </PostCommentBox>
//           <ReplyCommentBox>
//             <ReplayCommentInfo>
//               <img className='user-img' src={profileEXImg} />
//               <p className='user-name'> 베리 </p>
//               <span> 내손1동</span>
//               {/*  작성자를 나타내는건,,,어떤 로직일가요 */}
//               <p className='post-time'> 5분 전</p>
//               <PostDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
//             </ReplayCommentInfo>
//             <div className='react-wrap'>
//               <p className='comment-content'>
//                 <span className='user-tag'> @치즈</span> 계원예대 근처 호프집에서 불이 났대요.
//               </p>
//               <CommentToReact>
//                 <p className='reply-comment'> 답글쓰기</p>
//                 <button className='like-btn'>
//                   <img src={likeIcon} alt='좋아요' />5
//                 </button>
//               </CommentToReact>
//             </div>
//           </ReplyCommentBox>

//           <PostCommentBox>
//             <CommentPostInfo>
//               <img className='user-img' src={profileEXImg} />
//               <p className='user-name'> 베리 </p>
//               <span> 내손1동</span>
//               <p className='post-time'> 5분 전</p>
//               <PostDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
//             </CommentPostInfo>
//             <div className='react-wrap'>
//               <p className='comment-content'>저도 주변 카페인데 무슨 일 있나요?</p>
//               <CommentToReact>
//                 <p className='reply-comment'> 답글쓰기</p>
//                 <button className='like-btn'>
//                   <img src={likeIcon} alt='좋아요' />
//                 </button>
//               </CommentToReact>
//             </div>
//           </PostCommentBox>
//           <WriteCommentBox>
//             <button type='button'>
//               <img src={mapIcon} alt='위치 찍기' />
//             </button>
//             <button type='button'>
//               <img src={imageIcon} alt='사진 올리기' />
//             </button>
//             <input type='text' placeholder='댓글을 입력해 주세요' />
//           </WriteCommentBox>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PostDetail;
