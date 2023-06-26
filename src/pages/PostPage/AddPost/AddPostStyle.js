import styled from 'styled-components';
// Image import

export const AddPostTop = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 7px 20px 17px 20px;
  border: 1px solid red;
  button {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
  }
`;

export const WriteForm = styled.form`
  border: 1px solid red;
  background-color: #fff;
  width: 100%;
  padding: 0 20px;

  textarea {
    width: 100%;
    height: 70vh;
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
  position: relative;
  left: -60px;
  bottom: 70px;
  input {
    display: none;
    position: absolute;
  }

  img {
    position: absolute;
    width: 60px;
    aspect-ratio: 1/1;
    /* drop-shadow 적용 하기 */
  }
`;
