import React from 'react';
import styled from 'styled-components';
import BackIcon from '../../assets/icons/common/back.png';
import SendChatIcon from '../../assets/images/ChatPage/sendchatimg.png';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  StyledContentsBox,
  StyledContainer,
  StyledBoxWrapper,
  StyledBackButtonBox,
} from '../LoginAndSignUpPage/loginPageCommonStyle';

export default function ChatRoomPage() {
  const navigate = useNavigate();
  const {
    state: { name = '' },
  } = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <StyledContainer>
        <StyledBoxWrapper>
          <StyledBoxCustom>
            <StyledBackButtonBoxCustom>
              <button onClick={handleBack}>
                <img src={BackIcon} />
              </button>
              <StyledChatUserName>{name}</StyledChatUserName>
            </StyledBackButtonBoxCustom>
            <StyledChatBox>
              {name === '해주' && (
                <>
                  <StyledChatTextLeft>혜연아!</StyledChatTextLeft>
                  <br></br>
                  <StyledChatTextLeft>너 있는곳 괜찮아??</StyledChatTextLeft>
                  <br></br>
                  <StyledChatTextRight>응?? 무슨일있어???</StyledChatTextRight>
                  <br></br>
                  <StyledChatTextLeft>위용위용 알림 울리길래 메세지 보냈음!!</StyledChatTextLeft>
                  <br></br>
                  <StyledChatTextRight>나 자고있어서 못느꼈나봐!</StyledChatTextRight>
                  <br></br>
                  <StyledChatTextRight>그래도 걱정해줘서 너무 고마워 감동ㅠㅠ</StyledChatTextRight>
                  <br></br>
                  <StyledChatTextLeft>별일없다니 다행이야~</StyledChatTextLeft>
                  <br></br>
                  <StyledChatTextLeft>너도 위용위용 어플 받아봐 엄청 편리해!</StyledChatTextLeft>
                  <br></br>
                  <StyledChatTextRight>알겠어! 위용위용!! 지금 바로 받아볼께~</StyledChatTextRight>
                </>
              )}
            </StyledChatBox>
            <Styled>
              <StyledChatRoomInput placeholder='대화할 내용을 입력해주세요.' />
              <StyledSendChatBtn>
                <img className='sendchatbtn' src={SendChatIcon} alt='SendChatIcon' />
              </StyledSendChatBtn>
            </Styled>
          </StyledBoxCustom>
        </StyledBoxWrapper>
      </StyledContainer>
    </>
  );
}
const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 335px;
  height: 44px;
  border-radius: 50px;
  background: #eee;
  margin-top: 24px;
  margin-bottom: 28px;
  padding: 0px 7px 0px 20px;
`;

const StyledBackButtonBoxCustom = styled(StyledBackButtonBox)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  button {
    position: absolute;
    left: 0px;
  }
`;
const StyledChatBox = styled.div`
  width: 376px;
  height: 600px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
`;
const StyledChatUserName = styled.span`
  color: #606060;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.32px;
  margin-top: 7px;
`;

const StyledBoxCustom = styled(StyledContentsBox)`
  width: 375px;
  height: 812px;
  background: #ffffff;
  display: flex;
`;

const StyledChatTextLeft = styled.span`
  border-radius: 12px 12px 12px 12px;
  background: #fff;
  color: #606060;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  border: none;
  align-self: flex-start;
  box-sizing: border-box;
  padding: 10px;
  margin: 12px;
  margin-top: 10px;
`;

const StyledChatTextRight = styled(StyledChatTextLeft)`
  align-self: flex-end;
  background: #191919;
  color: #fff;
`;
const StyledSendChatBtn = styled.button`
  width: 30px;
  height: 30px;
`;

const StyledChatRoomInput = styled.input`
  font-size: 15px;
  font-weight: 600;
  color: #191919;
`;
