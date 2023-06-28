import styled from 'styled-components';
import commentBtn from '../../../assets/icons/PostPage/modal-icon.png';
import { ImgUpload } from '../AddPost/AddPostStyle';

export const PostDetailTop = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`;

export const PostContentBox = styled.section`
  width: 100%;
  background-color: #fff;
  border-top: 3px solid #f6f6f6;
  border-bottom: 3px solid #f6f6f6;
  p {
    color: #191919;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.32px;
    margin: 0 20px 20px 20px;
    img {
      margin-top: 20px;
    }
  }
`;
export const PostInfo = styled.div`
  margin: 15px 20px 25px 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
  img {
    width: 30px;
    aspect-ratio: 1;
  }
  p.user-name {
    color: #191919;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.28px;
    margin: 0 5px 0 10px;
  }
  span {
    color: #aaa;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.24px;
  }
  span::before {
    content: '∙';
  }
  p.post-time {
    color: #aaa;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.24px;
    margin-left: auto;
    margin-right: 0;
  }
`;
export const PostReact = styled.div`
  width: auto;
  background-color: #fff;
  display: flex;
  gap: 20px;
  padding: 17px 0 20px 20px;
  border-top: 2px solid #f6f6f6;
  /*  왜 아예 안보이지 F6F6f6?은?? */
  cursor: pointer;
  div {
    color: #666;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.42px;
    img {
      width: 15px;
      aspect-ratio: 1;
      margin-right: 4px;
    }
  }
`;
export const PostCommentBox = styled.section`
  background-color: #fff;
  width: 100%;
  border-bottom: 2px solid #f6f6f6;
  div.react-wrap {
    padding: 0 20px 15px 60px;
    p.comment-content {
      color: #191919;
      font-size: 14px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.28px;
      margin-bottom: 15px;
    }
  }
`;

export const CommentPostInfo = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 15px 20px 6px 20px;
  img.user-img {
    width: 30px;
    aspect-ratio: 1;
  }
  p.user-name {
    color: #191919;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.28px;
    margin: 0 5px 0 10px;
  }
  span {
    color: #aaa;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.24px;
  }
  span::before {
    content: '∙';
  }
  p.post-time {
    color: #aaa;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.24px;
    margin-left: auto;
    margin-right: 10px;
  }
`;
export const CommentModal = styled.article`
  position: absolute;
  right: 5px;
  width: 130px;
  padding: 15px 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  li {
    width: 100%;
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      img {
        width: 36px;
      }
      p {
        color: #191919;
        font-size: 12px;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.24px;
      }
    }
  }
  li:last-child {
    border-top: 1px solid #eee;
  }
`;
export const CommentToReact = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  p.reply-comment {
    color: #666;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.24px;
    cursor: pointer;
  }
  button.like-btn {
    display: flex;
    align-items: center;
    color: #666;
    gap: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.24px;
    img {
    }
  }
`;

export const ReplyCommentBox = styled.section`
  background-color: #fff;
  width: 100%;
  padding: 15px 20px 15px 60px;
  border-bottom: 2px solid #f6f6f6;
  p.comment-content {
    color: #191919;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.28px;
    padding: 11px 0 15px 0;
  }
  span.user-tag {
    color: #666;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.28px;
  }
  div.react-wrap {
  }
`;
export const ReplayCommentInfo = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  img.user-img {
    width: 25px;
    aspect-ratio: 1;
  }
  p.user-name {
    color: #191919;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.28px;
    margin: 0 5px 0 10px;
  }
  span {
    color: #aaa;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.24px;
  }
  span::before {
    content: '∙';
  }
  p.post-time {
    color: #aaa;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.24px;
    margin-left: auto;
    margin-right: 10px;
  }
`;
export const WriteCommentBox = styled.section`
  background-color: #fff;
  width: 100%;
  padding: 10px 10px 34px 20px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;

  button:nth-child(2) {
    margin-left: 25px;
    margin-right: 19px;
  }
  input {
    margin-left: auto;
    width: 100%;
    padding: 10px 0 10px 12px;
    border-radius: 8px;
    /* border: 1px solid blue; */
    color: #191919;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.32px;
  }
  input:hover {
    border: 1px solid #aaa;
  }
  input:active {
    border: 1px solid #aaa;
  }
  input::placeholder {
    color: #aaa;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.32px;
  }
`;
