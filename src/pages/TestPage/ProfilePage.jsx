import React from 'react';
import styled from 'styled-components';
import backIcon from '../../assets/icons/common/back.png';
import { useNavigate } from 'react-router-dom';
import profileimg from '../../assets/images/loginPage/logo.png';

export default function ProfilePage() {
  const navigate = useNavigate();
  const backToPage = () => {
    navigate('/test-main');
  };

  const goToUpdate = () => {
    navigate('/test-update');
  };
  return (
    <section className='container'>
      <div className='wrapper'>
        <ProfilePageHeader>
          <img src={backIcon} alt='뒤로가기버튼' onClick={backToPage} />
          <span>마이페이지</span>
        </ProfilePageHeader>
        <ProfileDetailContainer>
          <ProfileImgContainer>
            <img src={profileimg} alt='프로필사진' />
          </ProfileImgContainer>
          <FollowInfoContainer>
            <div>
              <span>팔로잉</span>
              <span>17</span>
            </div>
            <div>
              <span>팔로워</span>
              <span>17</span>
            </div>
          </FollowInfoContainer>
          <DetailInfoContainer>
            <span>상세정보</span>
            <div>
              <DetailList>
                <span>아이디(이메일)</span>
                <span>test@test.com</span>
              </DetailList>
              <DetailList>
                <span>닉네임</span>
                <span>테스트</span>
              </DetailList>
              <DetailList>
                <span>계정아이디</span>
                <span>@test</span>
              </DetailList>
              <DetailList>
                <span>자기소개</span>
                <span>안녕하세요</span>
              </DetailList>
            </div>
          </DetailInfoContainer>
          <UpdateBtn onClick={goToUpdate}>상세정보 수정</UpdateBtn>
        </ProfileDetailContainer>
      </div>
    </section>
  );
}

const UpdateBtn = styled.button`
  width: 200px;
  height: 50px;
  text-align: center;
  border-radius: 5px;
  color: white;
  background-color: black;
  margin: 45px 0;
  font-size: 16px;
  font-weight: bold;
`;

const DetailList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  span {
    font-size: 14px;
  }

  span:nth-child(1) {
    color: #a5a5a5;
    margin-bottom: 10px;
  }
`;

const DetailInfoContainer = styled.div`
  width: 100%;
  padding: 0px 20px;
  margin-top: 40px;

  & > span {
    display: block;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: bold;
  }
`;

const FollowInfoContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 200px;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

const ProfileDetailContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const ProfileImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  img {
    border: 1px solid #ccc;
    width: 100px;
    border-radius: 100%;
    cursor: pointer;

    aspect-ratio: 15/15;
    object-fit: cover;
  }
`;

const ProfilePageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 16px;
  margin: 40px 0;

  img {
    position: absolute;
    width: 15px;
    left: 20px;
    cursor: pointer;

    aspect-ratio: 15/15;
    object-fit: contain;
  }
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;
