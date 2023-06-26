import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// img import
import commentIcon from '../../assets/icons/PostPage/comment-icon.png';
import likeIcon from '../../assets/icons/PostPage/like-icon.png';
import addPostImg from '../../assets/images/Postpage/addPost.png';

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

const PostPage = () => {
  const navigate = useNavigate();
  // const [posts, setPosts] = useState([]);

  const addPostNavi = () => {
    navigate('/post/add-post');
  };

  const postDetailNavi = () => {
    navigate('/post/detail');
  };

  return (
    <>
      <section className='container'>
        <div className='wrapper'>
          <h1 className='a11y-hidden'>게시판</h1>
          <PostHeader>
            <TopBar iconColor={'#191919'} />
            <div>
              <h2> 오늘은 김예은 님께 어떤 일이 있었나요? </h2>
              <p> 현재 위치 ・ 안양시 동안구 &gt; </p>
            </div>
            <AddPostBtn onClick={addPostNavi}>
              <img src={addPostImg} alt='새 글 작성' />
            </AddPostBtn>
          </PostHeader>

          {/* 게시글 목록 */}
          {/* {posts.length > 0 ? (
            <div>
              <h2 className='a11y-hidden'>게시글 목록</h2>
              {posts.map((post, index) => (
                <div key={index}>
                  <p>{post.content}</p>
                </div>
              ))}
             
            </div>
          ) : (
            <p>등록된 게시글이 없습니다.</p>
          )} */}

          <ContentWrap>
            <PostFrame>
              <PostContent onClick={postDetailNavi}>
                <div className='type-tag'> 동네위험 </div>
                <div className='type-tag'> 동네위험 </div>
                <PostContentBox className='multi-ellipsis'>
                  계원예대 쪽에 지금 불났나요? 연기가 보이네요계원예대 쪽에 지금 불났나요?
                  연기가계원예대 쪽에 지금 불났나요? 연기가 보이네요계원예대 쪽에 지금 불났나요?
                </PostContentBox>
                <PostInfo>
                  <div>
                    <span> 베리 </span>
                    <span> 내손1동</span>
                  </div>
                  <span> 2023.06.30</span>
                </PostInfo>
              </PostContent>
              <PostReact>
                <div>
                  <img src={likeIcon} alt='정확해요' />
                  <span> 정확해요 3</span>
                </div>
                <div>
                  <img src={commentIcon} alt='댓글' />
                  <span> 댓글 4</span>
                </div>
              </PostReact>
            </PostFrame>

            <PostFrame>
              <PostContent>
                <div className='type-tag'> 동네위험 </div>
                <div className='type-tag'> 동네위험 </div>
                <PostContentBox className='multi-ellipsis'>
                  계원예대 쪽에 지금 불났나요? 연기가 보이네요계원예대 쪽에 지금 불났나요?
                  연기가계원예대 쪽에 지금 불났나요? 연기가 보이네요계원예대 쪽에 지금 불났나요?
                </PostContentBox>
                <PostInfo>
                  <div>
                    <span> 베리 </span>
                    <span> 내손1동</span>
                  </div>
                  <span> 2023.06.30</span>
                </PostInfo>
              </PostContent>
              <PostReact>
                <div>
                  <img src={likeIcon} alt='정확해요' />
                  <span> 정확해요 3</span>
                </div>
                <div>
                  <img src={commentIcon} alt='댓글' />
                  <span> 댓글 4</span>
                </div>
              </PostReact>
            </PostFrame>
            <PostFrame>
              <PostContent>
                <div className='type-tag'> 동네위험 </div>
                <div className='type-tag'> 동네위험 </div>
                <PostContentBox className='multi-ellipsis'>
                  계원예대 쪽에 지금 불났나요? 연기가 보이네요계원예대 쪽에 지금 불났나요?
                  연기가계원예대 쪽에 지금 불났나요? 연기가 보이네요계원예대 쪽에 지금 불났나요?
                </PostContentBox>
                <PostInfo>
                  <div>
                    <span> 베리 </span>
                    <span> 내손1동</span>
                  </div>
                  <span> 2023.06.30</span>
                </PostInfo>
              </PostContent>
              <PostReact>
                <div>
                  <img src={likeIcon} alt='정확해요' />
                  <span> 정확해요 3</span>
                </div>
                <div>
                  <img src={commentIcon} alt='댓글' />
                  <span> 댓글 4</span>
                </div>
              </PostReact>
            </PostFrame>
          </ContentWrap>
          <BottomNavBar />
        </div>
      </section>
    </>
  );
};

export default PostPage;
