import React from 'react';
import bottledWater from '../../../assets/icons/PreventPage/bottled-water.png';
import emergencyRations from '../../../assets/icons/PreventPage/emergency-rations.png';
import ointment from '../../../assets/icons/PreventPage/ointment.png';
import chronicDisease from '../../../assets/icons/PreventPage/chronic-disease.png';
import householdMedicine from '../../../assets/icons/PreventPage/household-medicine.png';
import clothes from '../../../assets/icons/PreventPage/clothes.png';
import underwear from '../../../assets/icons/PreventPage/underwear.png';
import shoes from '../../../assets/icons/PreventPage/shoes.png';
import paperTowel from '../../../assets/icons/PreventPage/paper-towel.png';
import wetTissue from '../../../assets/icons/PreventPage/wet-tissue.png';
import plasticBag from '../../../assets/icons/PreventPage/plastic-bag.png';
import lighter from '../../../assets/icons/PreventPage/lighter.png';
import battery from '../../../assets/icons/PreventPage/battery.png';
import flashlight from '../../../assets/icons/PreventPage/flashlight.png';
import earthquake from '../../../assets/icons/PreventPage/header-earthquake.png';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #ffcc00;
  width: 100%;
  padding: 40px 0 30px 20px;

  div {
    position: relative;
    &::before {
      position: absolute;
      content: '';
      background: url(${earthquake}) no-repeat 0, 0 / contain;
      top: -20px;
      right: 30px;
      width: 85px;
      height: 85px;
      opacity: 0.5;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
  }
`;

const Main = styled.main`
  width: 100%;
`;

const MainList = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px 15px;
`;

const AllBtn = styled.div`
  display: flex;
  width: fit-content;
  gap: 9px;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 30px;
  text-align: center;
`;

const EmergencyBtn = styled.button`
  width: 50px;
  padding: 8px 12px;
  border: 1px solid #191919;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;

  &:first-child {
    width: 28px;
    color: #fff;
    background: #191919;
  }
`;

const Button = styled.button`
  text-align: center;
  div {
    width: 32px;
    height: 32px;
    margin: 10px auto 19px;
  }

  img {
    height: 100%;
    object-fit: contain;
  }

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
  }
`;

export default function EmergencySupplies() {
  return (
    <section className='container'>
      <div className='wrapper'>
        <Header>
          <span></span>
          <div>
            <h1>
              지진 안전, <br /> 지금 알려 드릴게요
            </h1>
          </div>
        </Header>
        <Main>
          <AllBtn>
            <EmergencyBtn>전체</EmergencyBtn>
            <EmergencyBtn>비상식품</EmergencyBtn>
            <EmergencyBtn>구급약품</EmergencyBtn>
            <EmergencyBtn>생활용품</EmergencyBtn>
            <EmergencyBtn>가공식품</EmergencyBtn>
          </AllBtn>
          <MainList>
            <Button>
              <div>
                <img src={bottledWater} alt='생수' />
              </div>
              <span>생수</span>
            </Button>
            <Button>
              <div>
                <img src={emergencyRations} alt='비상식량' />
              </div>
              <span>비상식량</span>
            </Button>
            <Button>
              <div>
                <img src={ointment} alt='연고' />
              </div>
              <span>연고</span>
            </Button>
            <Button>
              <div>
                <img src={chronicDisease} alt='지병약' />
              </div>
              <span>지병약</span>
            </Button>
            <Button>
              <div>
                <img src={householdMedicine} alt='비상약' />
              </div>
              <span>비상약</span>
            </Button>
            <Button>
              <div>
                <img src={clothes} alt='의류' />
              </div>
              <span>의류</span>
            </Button>
            <Button>
              <div>
                <img src={underwear} alt='속옷' />
              </div>
              <span>속옷</span>
            </Button>
            <Button>
              <div>
                <img src={shoes} alt='신발' />
              </div>
              <span>신발</span>
            </Button>
            <Button>
              <div>
                <img src={paperTowel} alt='화장지' />
              </div>
              <span>화장지</span>
            </Button>
            <Button>
              <div>
                <img src={wetTissue} alt='물티슈' />
              </div>
              <span>물티슈</span>
            </Button>
            <Button>
              <div>
                <img src={plasticBag} alt='비닐봉투' />
              </div>
              <span>비닐봉투</span>
            </Button>
            <Button>
              <div>
                <img src={lighter} alt='라이터' />
              </div>
              <span>라이터</span>
            </Button>
            <Button>
              <div>
                <img src={battery} alt='배터리' />
              </div>
              <span>배터리</span>
            </Button>
            <Button>
              <div>
                <img src={flashlight} alt='손전등' />
              </div>
              <span>손전등</span>
            </Button>
          </MainList>
        </Main>
      </div>
    </section>
  );
}
