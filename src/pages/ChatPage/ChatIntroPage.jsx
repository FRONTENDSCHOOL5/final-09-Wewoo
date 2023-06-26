import React from 'react';
import styled from 'styled-components';
import BackIcon from '../../assets/icons/common/back.png';
import { useNavigate } from 'react-router-dom';
import yellowIcon from '../../assets/images/ChatPage/yelloicon.png';
import RainbowIcon from '../../assets/images/ChatPage/rainbowicon.png';
import KoreaIcon from '../../assets/images/ChatPage/koreadisasterinformationsociety.png';
import SuwonIcon from '../../assets/images/ChatPage/suwonfirstwelfarefoundation.png';
import PyeongchonIcon from '../../assets/images/ChatPage/pyeongchonculture.png';
import GreenWarnigIcon from '../../assets/images/ChatPage/greenwarniglight.png';
import BottomNavBar from '../../components/common/BottomNavBar/BottomNavBar';

import {
  StyledContentsBox,
  StyledContainer,
  StyledBoxWrapper,
  StyledBackButtonBox,
} from '../LoginAndSignUpPage/loginPageCommonStyle';

export default function ChatIntroPage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <StyledContainer>
        <StyledBoxWrapper>
          <StyledBoxCustom>
            <StyledBackButtonBox>
              <button onClick={handleBack}>
                <img src={BackIcon} />
              </button>
            </StyledBackButtonBox>
            <div className='contents'>
              {/* Top Texts 시작 */}
              <StyledTopTexts>
                <StyleGoodDayText>
                  <span>위용위용님, </span>
                  <br></br>
                  <span>오늘도 좋은 하루 보내요!</span>
                </StyleGoodDayText>
                <StyledUnreadChat>
                  <span>읽지 않은 채팅이 1개 있어요</span>
                </StyledUnreadChat>
              </StyledTopTexts>
              {/* Top Texts 끝 */}

              {/* My neighbor 시작 */}
              <div className='mb-23'>
                <StyledmyTitleText>내 이웃</StyledmyTitleText>
                <StyledmyContentsButton
                  onClick={() => navigate('/chat-room', { state: { name: '민수' } })}
                >
                  <div>
                    <img src={yellowIcon} alt='yellowIcon' />
                  </div>
                  <StyledusercontentBox>
                    <StyledUserName>
                      민수
                      <img className='greenlight' src={GreenWarnigIcon} alt='yellowIcon' />
                    </StyledUserName>
                    <StyledUserChat>
                      별 일 없는거지? 그쪽에 지진 났다길래 연락 한번...
                    </StyledUserChat>
                  </StyledusercontentBox>
                </StyledmyContentsButton>
                <StyledmyContentsButton
                  onClick={() => navigate('/chat-room', { state: { name: '해주' } })}
                >
                  <div>
                    <img src={RainbowIcon} alt='RainbowIcon' />
                  </div>
                  <StyledusercontentBox>
                    <StyledUserName>해주</StyledUserName>
                    <StyledUserChat>다행이야 항상 위용위용을 기억해!</StyledUserChat>
                  </StyledusercontentBox>
                </StyledmyContentsButton>
              </div>
              {/* My neighbor 끝 */}

              {/* My Institution 시작 */}
              <div className='mt-29'>
                <div>
                  <StyledmyTitleText>내 기관</StyledmyTitleText>
                </div>
                <StyledmyContentsButton
                  onClick={() => navigate('/chat-room', { state: { name: '한국재난정보학회' } })}
                >
                  <div>
                    <img src={KoreaIcon} alt='yellowIcon' />
                  </div>
                  <StyledusercontentBox>
                    <StyledUserName>한국재난정보학회</StyledUserName>
                    <StyledUserChat>
                      [5월 새싹소식🌱] 한국재난협회에서 드리는 5월의...
                    </StyledUserChat>
                  </StyledusercontentBox>
                </StyledmyContentsButton>

                <StyledmyContentsButton
                  onClick={() => navigate('/chat-room', { state: { name: '수원제일복지재단' } })}
                >
                  <div className='rainbowLogo'>
                    <img src={SuwonIcon} alt='RainbowIcon' />
                  </div>
                  <StyledusercontentBox>
                    <StyledUserName>수원제일복지재단</StyledUserName>
                    <StyledUserChat>
                      수원시 복지재단에서 정기 휴관일을 안내드립니다. ...
                    </StyledUserChat>
                  </StyledusercontentBox>
                </StyledmyContentsButton>
                <StyledmyContentsButton
                  onClick={() => navigate('/chat-room', { state: { name: '평촌청소년도움의집' } })}
                >
                  <div>
                    <img src={PyeongchonIcon} alt='yellowIcon' />
                  </div>
                  <StyledusercontentBox>
                    <StyledUserName>평촌청소년도움의집</StyledUserName>
                    <StyledUserChat>
                      아이들과 함께하는 클린 캠페인 봉사활동 모집 시작...
                    </StyledUserChat>
                  </StyledusercontentBox>
                </StyledmyContentsButton>
              </div>
              {/* My Institution 끝 */}
            </div>
          </StyledBoxCustom>
          <BottomNavBar />
        </StyledBoxWrapper>
      </StyledContainer>
    </>
  );
}

const StyledusercontentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 19px;
`;

const StyledTopTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-bottom: 30px;
`;

const StyleGoodDayText = styled.div`
  color: #191919;
  font-size: 24px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: -0.72px;
  margin-top: 8px;
`;

const StyledmyTitleText = styled.div`
  color: #191919;
  font-size: 22px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: -0.66px;
`;

const StyledUnreadChat = styled.div`
  color: #191919;
  font-size: 14px;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.28px;
`;

const StyledUserName = styled.span`
  color: #191919;
  font-size: 16px;
  font-weight: 600;
  .greenlight {
    margin-left: 7px;
    width: 11px;
    height: 13.2px;
  }
`;
const StyledUserChat = styled.span`
  color: #606060;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 500;
  margin-top: 8px;
`;

const StyledmyContentsButton = styled.button`
  display: flex;
  margin-top: 30px;

  .img {
    width: 50px;
    height: 50px;
  }
`;
const StyledBoxCustom = styled(StyledContentsBox)`
  background: #ffffff;
  height: 682px;
  .contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .mt-29 {
    margin-top: 29px;
  }

  .mb-23 {
    margin-bottom: 23px;
  }
`;
