import styled from 'styled-components';

// img import
import PostHeadImg from '../../assets/images/Postpage/PostHeadBG.png';

export const PostHeader = styled.div`
  display: block;
  width: 100%;
  padding: 10px 20px 20px 20px;
  background-color: #fff;
  position: relative;
  div {
    background-image: url(${PostHeadImg});
    background-repeat: no-repeat;
    background-position: 95%;
    background-color: #fff;
    background-size: contain;
    h2 {
      width: 200px;
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
  bottom: -450px;
`;
export const ContentWrap = styled.div`
  width: 100%;
  height: 465px;
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
  line-height: 100%;
  letter-spacing: -0.32px;
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    gap: 5px;
    span:first-child:after {
      content: '∙';
      margin-left: 5px;
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
