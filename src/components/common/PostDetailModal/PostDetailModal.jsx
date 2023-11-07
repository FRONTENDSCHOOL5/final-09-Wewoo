import React, { useState } from 'react';
import styled from 'styled-components';

import commentModalBtn from '../../../assets/icons/PostPage/modal-icon.png';
import neighborIcon from '../../../assets/icons/PostPage/neighbor-icon.svg';
import chatIcon from '../../../assets/icons/PostPage/chat-icon.svg';
import reportIcon from '../../../assets/icons/PostPage/report-icon.svg';
import deleteIcon from '../../../assets/icons/PostPage/delete-icon.svg';

const ModalOpenBtn = styled.button`
  width: 2px;
  img {
    width: 2px;
    aspect-ratio: 1/7;
  }
`;
const Modal = styled.article`
  position: relative;
  ul.show-modal {
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: -180px;
    width: 130px;
    padding: 15px 8px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    transition: 1s;
  }
  ul.hide-modal {
    display: none;
    position: absolute;
    right: 5px;
    width: 130px;
    padding: 15px 8px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    transition: 1s;
  }
  li {
    width: 100%;
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      p {
        color: #191919;
        font-size: 12px;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.24px;
      }
    }
  }
`;

const PostDetailModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const ClickModal = () => {
    setModalOpen((modalOpen) => !modalOpen);
  };
  return (
    <>
      <ModalOpenBtn type='button' onClick={ClickModal}>
        <img src={commentModalBtn} alt='댓글추가기능 이용버튼' />
      </ModalOpenBtn>
      <Modal>
        <ul className={modalOpen ? 'show-modal' : 'hide-modal'}>
          <li>
            <button type='button'>
              <img src={neighborIcon} alt='이웃맺기' />
              <p> 이웃맺기 </p>
            </button>
          </li>
          <li>
            <button type='button'>
              <img src={chatIcon} alt='채팅걸기' />
              <p> 채팅걸기 </p>
            </button>
          </li>
          <li>
            <button type='button'>
              <img src={reportIcon} alt='신고하기' />
              <p> 신고하기 </p>
            </button>
          </li>
          <li>
            <button type='button'>
              <img src={deleteIcon} alt='삭제하기' />
              <p> 삭제하기 </p>
            </button>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default PostDetailModal;
