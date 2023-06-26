import React, { useState } from 'react';
import styled from 'styled-components';
import earthquakeAction from '../../../assets/images/PreventPage/earthquake-action.png';
import actionData from '../../../apis/PreventPage/actionApi';

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
  background-color: #f6f6f6;
  color: #999;
  padding: 8px 12px;
  font-size: ${(props) => props.theme.fontSize.sm};
  box-sizing: border-box;

  &.active {
    background-color: ${(props) => props.theme.colors.customYellow};
    color: ${(props) => props.theme.colors.customBlack};
  }
`;

const MainList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  h2 {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.md};
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
    background-color: #eee;
  }
  span.active {
    background-color: ${(props) => props.theme.colors.customBlack};
  }
`;

const TipsList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: ${(props) => props.theme.fontSize.sm};
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
      background-color: ${(props) => props.theme.colors.customBlack};
    }
  }
`;

export default function ActionTips({ type }) {
  const [indicator, setIndicator] = useState(1);
  const [circleStates, setCircleStates] = useState([true, false, false, false]);
  const [actionTips, setActionTips] = useState(1);

  const indexClick = (index) => {
    const newCircleStates = circleStates.map((state, i) => (i === index ? true : false));
    setCircleStates(newCircleStates);
    setIndicator(index + 1);
  };

  const actionButton = [
    { id: 1, name: '지진 대비' },
    { id: 2, name: '지진 발생' },
    { id: 3, name: '대피 후' },
  ];

  const actionClick = (buttonIndex) => {
    setActionTips(buttonIndex);
  };

  return (
    <>
      <BtnList>
        {actionButton.map((data, index) => (
          <Button
            key={data.id}
            className={actionTips === data.id ? 'active' : ''}
            onClick={() => actionClick(data.id)}
          >
            {data.name}
          </Button>
        ))}
      </BtnList>
      <MainList>
        <h2>
          집 안에서 대피할 수 있는 <br /> <span>안전한 공간</span>을 파악해 두세요
        </h2>
        <img src={earthquakeAction} alt='지진 안내 사진' />
        <CircleList>
          {circleStates.map((state, index) => {
            return (
              <span
                key={index}
                onClick={() => indexClick(index)}
                className={indicator === index + 1 ? 'active' : ''}
              ></span>
            );
          })}
        </CircleList>
        <TipsList>
          {actionData
            .filter((el) => el.type === type)
            .map((data) =>
              data.textList.map((text, index) => {
                return <li key={index}>{text}</li>;
              }),
            )}
        </TipsList>
      </MainList>
    </>
  );
}
