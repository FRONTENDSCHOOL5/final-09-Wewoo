import React from 'react';
import styled from 'styled-components';
import actionData from '../../../apis/PreventPage/actionApi';

export default function ActionTips({ type }) {
  return (
    <>
      <TipsList>
        {actionData
          .filter((el) => el.type === type)
          .map((data) =>
            data.textList.map((text, index) => {
              return <li key={index}>{text}</li>;
            }),
          )}
      </TipsList>
    </>
  );
}

const TipsList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  margin-bottom: 120px;
  padding: 0 10px;

  li {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 15px;

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
