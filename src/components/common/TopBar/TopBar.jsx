import React from 'react';
import styled from 'styled-components';
import chatIcon from '../../../assets/icons/common/chat.png';
import noticeIcon from '../../../assets/icons/common/notice.png';
import settingIcon from '../../../assets/icons/common/setting.png';

const Top = styled.article`
  background-color: transparent;
  width: 100%;
  padding: 15px 40px 15px 0;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  button {
    margin-left: 15px;
  }
`;

const TopBar = (props) => {
  return (
    <>
      <Top {...props}>
        <button>
          <img src={chatIcon} alt='채팅' />
        </button>
        <button>
          <img src={noticeIcon} alt='알림' />
        </button>
        <button>
          <img src={settingIcon} alt='설정' />
        </button>
      </Top>
    </>
  );
};

export default TopBar;
