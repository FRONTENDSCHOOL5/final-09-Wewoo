import React, { useState } from 'react';
import TopBar from '../../../components/common/TopBar/TopBar';
import PostDetailModal from '../../../components/common/PostDetailModal/PostDetailModal';
import {
  PostDetailTop,
  PostContentBox,
  PostInfo,
  PostReact,
  PostCommentBox,
  CommentPostInfo,
  CommentToReact,
  ReplyCommentBox,
  ReplayCommentInfo,
  WriteCommentBox,
} from './PostDetailStyle';

//image import
import profileEXImg from '../../../assets/images/Postpage/profileEX.png';
import commentIcon from '../../../assets/icons/PostPage/comment-icon.png';
import likeIcon from '../../../assets/icons/PostPage/like-icon.png';
import mapIcon from '../../../assets/icons/PostPage/map-icon.svg';
import imageIcon from '../../../assets/icons/PostPage/image-icon.svg';
// 예시 이미지 임포트
import postEX from '../../../assets/images/main/weatherEX.png';

const PostDetail = ({ id, post, onDeletePost, modalOpen, setModalOpen }) => {
  return (
    <>
      <section className='container'>
        <div className='wrapper'>
          <PostDetailTop>
            <TopBar iconColor={'#191919'} />
          </PostDetailTop>

          <PostContentBox>
            <PostInfo>
              <img className='user-img' src={profileEXImg} />
              <p className='user-name'> 베리 </p>
              <span> 내손1동</span>
              <p className='post-time'> 5분 전</p>
            </PostInfo>
            <p>
              계원예대 쪽에 지금 불났나요? 연기가 보이네요. 계원예대 쪽에 지금 불났나요? 연기가
              보이네요. 계원예대 쪽에 지금 불났나요? 연기가 보이네요. 계원예대 쪽에 지금 불났나요?
              연기가 보이네요.
              <img src={postEX} />
            </p>
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
          </PostContentBox>

          <PostCommentBox>
            <CommentPostInfo>
              <img className='user-img' src={profileEXImg} />
              <p className='user-name'> 베리 </p>
              <span> 내손1동</span>
              <p className='post-time'> 5분 전</p>
              <PostDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </CommentPostInfo>
            <div className='react-wrap'>
              <p className='comment-content'>저도 주변 카페인데 무슨 일 있나요?</p>
              <CommentToReact>
                <p className='reply-comment'> 답글쓰기</p>
                <button className='like-btn'>
                  <img src={likeIcon} alt='좋아요' />
                </button>
              </CommentToReact>
            </div>
          </PostCommentBox>
          <ReplyCommentBox>
            <ReplayCommentInfo>
              <img className='user-img' src={profileEXImg} />
              <p className='user-name'> 베리 </p>
              <span> 내손1동</span>
              {/*  작성자를 나타내는건,,,어떤 로직일가요 */}
              <p className='post-time'> 5분 전</p>
              <PostDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </ReplayCommentInfo>
            <div className='react-wrap'>
              <p className='comment-content'>
                <span className='user-tag'> @치즈</span> 계원예대 근처 호프집에서 불이 났대요.
              </p>
              <CommentToReact>
                <p className='reply-comment'> 답글쓰기</p>
                <button className='like-btn'>
                  <img src={likeIcon} alt='좋아요' />5
                </button>
              </CommentToReact>
            </div>
          </ReplyCommentBox>

          <PostCommentBox>
            <CommentPostInfo>
              <img className='user-img' src={profileEXImg} />
              <p className='user-name'> 베리 </p>
              <span> 내손1동</span>
              <p className='post-time'> 5분 전</p>
              <PostDetailModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </CommentPostInfo>
            <div className='react-wrap'>
              <p className='comment-content'>저도 주변 카페인데 무슨 일 있나요?</p>
              <CommentToReact>
                <p className='reply-comment'> 답글쓰기</p>
                <button className='like-btn'>
                  <img src={likeIcon} alt='좋아요' />
                </button>
              </CommentToReact>
            </div>
          </PostCommentBox>
          <WriteCommentBox>
            <button type='button'>
              <img src={mapIcon} alt='위치 찍기' />
            </button>
            <button type='button'>
              <img src={imageIcon} alt='사진 올리기' />
            </button>
            <input type='text' placeholder='댓글을 입력해 주세요' />
          </WriteCommentBox>
        </div>
      </section>
    </>
  );
};

export default PostDetail;
