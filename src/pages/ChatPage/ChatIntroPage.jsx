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

export default function ChatIntroPage({ onback }) {
  const navigate = useNavigate();
  const handleStartLogin = () => {
    navigate(-1);
  };

  return (
    <>
      <StyledContainer>
        <StyledBoxWrapper>
          <StyledBoxCustom>
            <StyledBackButtonBox onClick={handleStartLogin}>
              <button onClick={onback}>
                <img src={BackIcon} />
              </button>
            </StyledBackButtonBox>

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
            <StyledmyneighborWrapper>
              <StyledmyTitleText>내 이웃</StyledmyTitleText>
              <StyledmyContentsBox>
                <div>
                  <img src={yellowIcon} alt='yellowIcon' />
                </div>
                <StyledusercontentBox>
                  <StyledUserName>
                    민수
                    <img className='greenlight' src={GreenWarnigIcon} alt='yellowIcon' />
                  </StyledUserName>
                  <StyledUserChat>
                    <br></br>별 일 없는거지? 그쪽에 지진 났다길래 연락 한번...
                  </StyledUserChat>
                </StyledusercontentBox>
              </StyledmyContentsBox>
              <StyledmyContentsBox>
                <div>
                  <img src={RainbowIcon} alt='RainbowIcon' />
                </div>
                <StyledusercontentBox>
                  <StyledUserName>해주</StyledUserName>
                  <StyledUserChat>
                    <br></br>
                    다행이야 항상 위용위용을 기억해!
                  </StyledUserChat>
                </StyledusercontentBox>
              </StyledmyContentsBox>
            </StyledmyneighborWrapper>
            {/* My neighbor 끝 */}

            {/* My Institution 시작 */}
            <StyledmyInstitutionWrapper>
              <div>
                <StyledmyTitleText>내 기관</StyledmyTitleText>
              </div>
              <StyledmyContentsBox>
                <div>
                  <img src={KoreaIcon} alt='yellowIcon' />
                </div>
                <StyledusercontentBox>
                  <StyledUserName>
                    한국재난정보학회 <img></img>
                  </StyledUserName>
                  <StyledUserChat>
                    <br></br>[5월 새싹소식🌱] 한국재난협회에서 드리는 5월의...
                  </StyledUserChat>
                </StyledusercontentBox>
              </StyledmyContentsBox>
              <StyledmyContentsBox>
                <div className='rainbowLogo'>
                  <img src={SuwonIcon} alt='RainbowIcon' />
                </div>
                <StyledusercontentBox>
                  <StyledUserName>
                    수원제일복지재단 <img></img>
                  </StyledUserName>
                  <StyledUserChat>
                    <br></br>
                    수원시 복지재단에서 정기 휴관일을 안내드립니다. ...
                  </StyledUserChat>
                </StyledusercontentBox>
              </StyledmyContentsBox>
              <StyledmyContentsBox>
                <div>
                  <img src={PyeongchonIcon} alt='yellowIcon' />
                </div>
                <StyledusercontentBox>
                  <StyledUserName>
                    평촌청소년도움의집 <img></img>
                  </StyledUserName>
                  <StyledUserChat>
                    <br></br>아이들과 함께하는 클린 캠페인 봉사활동 모집 시작...
                  </StyledUserChat>
                </StyledusercontentBox>
              </StyledmyContentsBox>
            </StyledmyInstitutionWrapper>
            {/* My Institution 끝 */}
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
  /* align-items: center; */
`;

const StyledTopTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-bottom: 30px;
  /* margin-left: 20px; */
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
  margin-left: 10px;
`;

const StyledUnreadChat = styled.div`
  color: #191919;
  font-size: 14px;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: -0.28px;
`;

const StyledmyneighborWrapper = styled.div`
  width: 375px;
  height: 160px;
  margin-left: 20px;
  /* margin-top: 15px; */
`;

const StyledmyInstitutionWrapper = styled(StyledmyneighborWrapper)`
  width: 375px;
  height: 160px;
  margin-left: 20px;
  margin-top: 77px;
`;

const StyledUserName = styled.span`
  color: #191919;
  /* text-align: center; */
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
  margin-top: 0px;
`;

const StyledmyContentsBox = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 10px;

  .img {
    width: 50px;
    height: 50px;
  }
`;
const StyledBoxCustom = styled(StyledContentsBox)`
  width: 375px;
  height: 812px;
  background: #ffffff;
  display: flex;
`;
