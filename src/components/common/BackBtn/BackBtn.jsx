import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../assets/icons/common/back.png';

const Btn = styled.button`
  width: 30px;
`;
const BackBtn = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <Btn onClick={onBack}>
      <button>
        <img src={BackIcon} />
      </button>
    </Btn>
  );
};

export default BackBtn;
