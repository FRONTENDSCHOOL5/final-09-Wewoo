import styled from 'styled-components';

import PostHeadImg from '../../assets/images/Postpage/PostHeadBG.png';

export const PostHeader = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  padding: 20px;
  background-color: #fff;
  position: relative;
  div {
    background-image: url(${PostHeadImg});
    background-repeat: no-repeat;
    background-position: 90%;
    background-color: #fff;
    background-size: contain;
    margin-top: 10px;
    margin-bottom: 20px;
    h2 {
      font-size: 24px;
      font-weight: 600;
      line-height: 120%;
      margin-bottom: 20px;
    }
    p {
      color: #aaa;
      font-size: 12px;
      font-weight: 500;
    }
  }
`;
export const AddPostBtn = styled.button`
  position: absolute;
  right: 20px;
  bottom: 0px;
  img {
    width: 33px;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;
export const ContentWrap = styled.div`
  width: 100%;
  height: calc(100vh - 290px);
  overflow-y: scroll;
`;

export const PostFrame = styled.section`
  width: 100%;
  margin-bottom: 5px;
`;
export const PostContent = styled.div`
  background-color: #fff;
  padding: 20px;

  div.type-tag {
    display: inline-block;
    padding: 4px 6px;
    border-radius: 4px;
    background: #f6f6f6;
    margin-right: 10px;
    color: #aaa;
    font-size: 12px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.24px;
  }

  .type-tag {
    color: #aaa;
    font-size: 12px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.24px;
  }
`;
export const PostContentBox = styled.p`
  cursor: pointer;
  color: #191919;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.32px;
  margin-top: 20px;
`;
export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div.post-info-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
    img {
      width: 30px;
    }
    span:last-child:before {
      content: '∙';
    }
  }
  span {
    color: #aaa;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.24px;
  }
`;
export const PostReact = styled.div`
  background-color: #fff;
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 18px 20px 20px 20px;
  border-top: 2px solid #f6f6f6;
  button {
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
