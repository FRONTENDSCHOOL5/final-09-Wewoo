import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import backicon from '../../../assets/icons/common/back.png';
import { useNavigate } from 'react-router-dom';

export default function DonationsInput({ sendToInform }) {
  const donationsArr = [1, 3, 5, 10, 15, '직접입력'];
  const [activeButton, setActiveButton] = useState(5);
  const [donations, setDonations] = useState(0);
  const inputValue = useRef(0);
  const displayValue = useRef(0);
  const navigate = useNavigate();

  let timeoutId;
  const inputValueFormatHandler = (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      let value = parseInt(displayValue.current.value);
      if (value >= 1000 && value <= 999999999) {
        const dottedValue = value.toLocaleString();
        setDonations(dottedValue);
        displayValue.current.style.display = 'none';
        inputValue.current.style.display = 'block';
      }

      if (value > 999999999) {
        value = 999999999;
        displayValue.current.value = 999999999;
        const dottedValue = value.toLocaleString();
        setDonations(dottedValue);
        displayValue.current.style.display = 'none';
        inputValue.current.style.display = 'block';
      } else if (value < 1000) {
        value = 1000;
        displayValue.current.value = 1000;
        const dottedValue = value.toLocaleString();
        setDonations(dottedValue);
        displayValue.current.style.display = 'none';
        inputValue.current.style.display = 'block';
      }
    }, 1000);
  };

  const addButtonsValue = (el) => {
    const value = el * 10000;
    displayValue.current.value =
      parseInt(displayValue.current.value ? displayValue.current.value : 0) + value;
    const dottedValue = parseInt(displayValue.current.value).toLocaleString();
    setDonations(dottedValue);
    displayValue.current.style.display = 'none';
    inputValue.current.style.display = 'block';
  };

  const returnToInput = (e) => {
    inputValue.current.style.display = 'none';
    displayValue.current.style.display = 'block';
    displayValue.current.focus();
  };

  const goToPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    sendToInform(displayValue.current.value);
    console.log(displayValue.current.value);
  }, [displayValue.current.value, sendToInform]);

  return (
    <section className='container'>
      <div className='wrapper'>
        <DonationHeader>
          <h1>후원금 기부</h1>
          <img src={backicon} alt='뒤로가기' onClick={goToPreviousPage} />
        </DonationHeader>
        <DonationMain>
          <span>후원 금액</span>
          <DonationGrid>
            {donationsArr.map((el, index) => {
              return (
                <button
                  key={index}
                  className={activeButton === index ? 'active' : ''}
                  onClick={() => {
                    setActiveButton(index);
                    if (index !== 5) addButtonsValue(el);
                    else {
                      inputValue.current.style.display = 'none';
                      displayValue.current.style.display = 'block';
                      displayValue.current.focus();
                    }
                  }}
                >
                  {typeof el === 'number' ? `${el}만원` : el}
                </button>
              );
            })}
          </DonationGrid>
          <DonationInput>
            <div>
              <input
                type='number'
                min='1000'
                max='999999999'
                ref={displayValue}
                onKeyUp={inputValueFormatHandler}
                onBlur={inputValueFormatHandler}
                placeholder='0'
              />
              <span ref={inputValue} onClick={returnToInput}>
                {donations ? donations : 0}
              </span>
              <span>원을</span>
            </div>
            <span>후원해요</span>
          </DonationInput>
        </DonationMain>
      </div>
    </section>
  );
}

const DonationMain = styled.section`
  padding: 0 20px;
  span:nth-child(1) {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-top: 50px;
  }
`;

const DonationInput = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  div {
    font-size: 30px;
    display: flex;
    align-self: flex-start;
    input {
      width: 165px;
      text-align: right;
    }
    span:nth-child(2) {
      width: 165px;
      text-align: right;
      display: none;
    }

    input::-webkit-input-placeholder {
      color: black;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  & > span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const DonationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 40px);
  gap: 15px 13px;
  margin-top: 42px;
  margin-bottom: 32px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);

    &.active {
      color: white;
      background-color: black;
    }
  }
`;

const DonationHeader = styled.header`
  width: 100%;
  text-align: center;
  position: relative;
  padding: 15px 20px;
  /* margin-bottom: 2px; */
  border-bottom: 2px solid #ccc;

  img {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;
    width: 8px;
    height: 15px;
  }
`;
