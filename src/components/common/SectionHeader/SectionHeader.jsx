import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const HeadText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: #fff;
  padding: ${(props) => (props.padding ? '0 20px' : '')};
  div {
    flex-direction: column;
    align-items: flex-start;
    h2 {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: -0.02em;
      color: #191919;
    }
  }
  button {
    font-size: 12px;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: #aaa;
    text-align: right;
    span {
      font-size: 18px;
    }
  }
`;
const SectionHeader = ({
  firstHeadText,
  secondHeadText,
  num,
  firstBtnText,
  secondBtnText,
  padding,
}) => {
  const navigate = useNavigate();
  const goToDonationDetail = () => {
    if (firstBtnText === '자세히 보기') {
      navigate('/donation-detail');
    }
  };
  return (
    <HeadText padding={padding}>
      <div>
        <h2> {firstHeadText}</h2>
        <h2> {secondHeadText}</h2>
      </div>
      <button type='button' onClick={goToDonationDetail}>
        {' '}
        <span> {num} </span> {firstBtnText} <br /> {secondBtnText}
      </button>
    </HeadText>
  );
};

export default SectionHeader;
