import React from 'react';
import styled from 'styled-components';
import earthquake from '../../../assets/icons/PreventPage/header-earthquake.png';
import earthquakeAction from '../../../assets/images/PreventPage/earthquake-action.png';

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

const BtnList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 10px;
`;

const Button = styled.button`
  width: 105px;
  text-align: center;
  border-radius: 8px;
  background-color: gold;
  padding: 8px 12px;
  font-size: 14px;
  box-sizing: border-box;
`;

const MainList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  h2 {
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;

    span {
      background: linear-gradient(to top, #ffcc00 40%, transparent 50%);
    }
  }
`;

const CircleList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

const TipsList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 14px;
  font-weight: 400;

  li {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 20px;

    &::before {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      left: -15px;
      background-color: #191919;
    }
  }
`;

export default function ActionTips() {
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
        <main>
          <BtnList>
            <Button>지진 대비</Button>
            <Button>지진 발생</Button>
            <Button>대피 후</Button>
          </BtnList>
          <MainList>
            <h2>
              집 안에서 대피할 수 있는 <br /> <span>안전한 공간</span>을 파악해 두세요
            </h2>
            <img src={earthquakeAction} alt='지진 안내 사진' />
            <CircleList>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </CircleList>
            <TipsList>
              <li>
                유리창이나 넘어지기 쉬운 가구 주변 등 위험한 위치를 확인해 두고 지진 발생 시 가까이
                가지 않도록 합니다.
              </li>
              <li>깨진 유리에 다치지 않도록 두꺼운 실내화를 준비해 둡니다.</li>
              <li>화재를 일으킬 수 있는 난로나 위험물을 주의해 관리합니다.</li>
            </TipsList>
          </MainList>
        </main>
      </div>
    </section>
  );
}
