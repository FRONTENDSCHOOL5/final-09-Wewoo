import styled from 'styled-components';

export const UpdatePostTop = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  button {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
  }
`;

export const WriteForm = styled.form`
  background-color: #fff;
  width: 100%;
  padding: 0 20px;
  position: relative;
  textarea {
    width: 100%;
    height: 50vh;
    resize: none;
    padding: 20px 0;
  }
  textarea::placeholder {
    padding: 24px 0 0 0;
    font-size: 14px;
    color: #aaa;
  }
`;
export const ImgUpload = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 290px;
  bottom: 20px;
  input {
    display: none;
    position: absolute;
  }
  img {
    width: 60px;
    aspect-ratio: 1/1;
  }
`;
