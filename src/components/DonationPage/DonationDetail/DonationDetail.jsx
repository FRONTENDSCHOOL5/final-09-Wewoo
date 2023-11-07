import React from 'react';
import backIcon from '../../../assets/icons/common/back.png';
import plusIcon from '../../../assets/icons/common/plus-icon.png';
import styled from 'styled-components';
import logoimg from '../../../assets/images/loginPage/logo.png';
import { useNavigate } from 'react-router-dom';
import BarChart from '../../BarChart/BarChart';
export default function DonationDetail() {
  const navigate = useNavigate();
  const backToPage = () => {
    navigate(-1);
  };

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  return (
    <section className='container'>
      <div className='wrapper'>
        <CurrDonationsHeader>
          <img src={backIcon} alt='뒤로가기버튼' onClick={backToPage} />
          <span>후원 현황</span>
        </CurrDonationsHeader>
        <DonationSectionHeader>
          <div>
            <span>누적 후원금</span>
            <span>월별</span>
          </div>
          <img src={plusIcon} alt='플러스버튼' />
        </DonationSectionHeader>
        <ChartContainer>
          <span>{`${currentMonth - 4 <= 0 ? currentYear - 1 : currentYear}.${(currentMonth - 4 <= 0
            ? currentMonth - 4 + 12
            : currentMonth - 4
          )
            .toString()
            .padStart(2, '0')} ~ ${currentMonth - 4 <= 0 ? `${currentYear}.` : ''}${currentMonth
            .toString()
            .padStart(2, '0')}월`}</span>
          <BarChart />
        </ChartContainer>
        <DonationListContainer>
          <DonationSectionHeader>
            <div>
              <span>후원목록</span>
              <span>정기후원</span>
            </div>
            <img src={plusIcon} alt='플러스버튼' />
          </DonationSectionHeader>
          <DonationLists>
            <DonationListLeft>
              <img src={logoimg} alt='후원대상프로필사진' />
              <div>
                <span>한국재난협회</span>
                <span>23.04월부터</span>
              </div>
            </DonationListLeft>
            <DonationListRight>10,000 원</DonationListRight>
          </DonationLists>
          <DonationLists>
            <DonationListLeft>
              <img src={logoimg} alt='후원대상프로필사진' />
              <div>
                <span>안양 청소년문화센터</span>
                <span>22.12월부터</span>
              </div>
            </DonationListLeft>
            <DonationListRight>5,000 원</DonationListRight>
          </DonationLists>
          <DonationLists>
            <DonationListLeft>
              <img src={logoimg} alt='후원대상프로필사진' />
              <div>
                <span>수원시 복지재단</span>
                <span>22.08월부터</span>
              </div>
            </DonationListLeft>
            <DonationListRight>5,000 원</DonationListRight>
          </DonationLists>
        </DonationListContainer>
      </div>
    </section>
  );
}

const DonationListContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const DonationLists = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #eaeaea;
`;

const DonationListLeft = styled.div`
  display: flex;
  gap: 12px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span:nth-child(1) {
      font-size: 14px;
      font-weight: bold;
    }
    span:nth-child(2) {
      font-size: 12px;
      color: #606060;
    }
  }
  img {
    width: 33px;

    aspect-ratio: 1/1;
    object-fit: contain;
  }
`;

const DonationListRight = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const DonationSectionHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-weight: bold;
  margin-bottom: 1px;
  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
    span:nth-child(1) {
      font-size: 18px;
    }
    span:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3px 10px;
      font-size: 12px;
      background-color: #e6e6e6;
      border-radius: 50px;
    }
  }
  img {
    width: 15px;

    aspect-ratio: 15/15;
    object-fit: contain;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 40px;
  margin-bottom: 10px;
  span:nth-child(1) {
    font-size: 14px;
    font-weight: bold;
    color: #606060;
  }
`;

const CurrDonationsHeader = styled.header`
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
