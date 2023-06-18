import React, { useState } from 'react';
import campaignApi from '../../apis/HelpPage/campaignApi';
import donationApi from '../../apis/HelpPage/donationApi';
import styled from 'styled-components';

const CarouselContainer = styled.section`
  display: flex;
  position: relative;
`;

const SlideImgs = styled.div`
  width: 100%;
  flex-shrink: 0;
  background-color: black;
  transform: translateX(-${(props) => props.index * 375}px);
  transition: 0.3s all;
  img {
    aspect-ratio: 375/390;
    object-fit: cover;
    opacity: 0.4;
  }
`;

const SlideDescription = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20px;
  bottom: 25px;
  span {
    color: white;
  }

  span:nth-child(1) {
    font-size: ${(props) => props.theme.fontSize.sm};
    margin-bottom: 20px;
    span {
      padding: 4px 8px;
      border: 1px solid white;
      border-radius: 10px;
    }
  }

  span:nth-child(2) {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.lg};
  }
  span:nth-child(3) {
    margin-bottom: 15px;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize.lg};
  }

  span:nth-child(4) {
    font-size: ${(props) => props.theme.fontSize.base};
    color: #aaaaaa;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  justify-content: space-between;
  padding: 0px 18px;
  font-size: ${(props) => props.theme.fontSize.xs};

  button {
    width: 32px;
    height: 32px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transition: 0.3s all;
  }
  button:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const SlideNum = styled.div`
  width: 55px;
  right: 14px;
  bottom: 18px;
  padding: 8px 12px;
  position: absolute;
  border-radius: 15px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: ${(props) => props.theme.fontSize.xs};
`;

const Indicator = styled.div`
  align-self: flex-start;
  width: calc(20% + ${(props) => props.index * 20}%);
  height: 5px;
  transition: 0.3s all;
  background-color: #ff4f01;
`;

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const compareFn = (a, b) => {
    return a.endline - b.endline;
  };

  const carouselHandler = (direction) => {
    if (direction === 'right') {
      if (activeIndex <= 3) {
        setActiveIndex((prev) => (prev += 1));
      } else {
        setActiveIndex(0);
      }
    } else {
      if (activeIndex >= 1) {
        setActiveIndex((prev) => (prev -= 1));
      } else {
        setActiveIndex(4);
      }
    }
  };

  const intergratedData = [...campaignApi, ...donationApi];
  intergratedData.sort(compareFn).splice(5);

  return (
    <section className='container'>
      <div className='wrapper'>
        <CarouselContainer>
          <h1 className='a11y-hidden'>도와줘요 페이지</h1>
          {intergratedData.map((el, index) => (
            <SlideImgs key={index * 10} index={activeIndex}>
              <img src={el.image} alt={`${index}번 슬라이드`} />
              <SlideDescription>
                <span>
                  <span>D-{el.endline}</span>
                </span>
                <span>{el.location}</span>
                <span>{el.detail}</span>
                <span>
                  {el.description
                    ? el.description
                    : `총 ${el.donated.toLocaleString()}원
                  (${parseInt((el.donated / el.donationGoal) * 100)}%)`}
                </span>
              </SlideDescription>
            </SlideImgs>
          ))}
          <Buttons index={activeIndex}>
            <button
              type='button'
              onClick={() => {
                carouselHandler('left');
              }}
            >
              &lt;
            </button>
            <button
              type='button'
              onClick={() => {
                carouselHandler('right');
              }}
            >
              &gt;
            </button>
          </Buttons>
          <SlideNum>
            <strong>{activeIndex + 1}</strong> / 5
          </SlideNum>
        </CarouselContainer>
        <Indicator index={activeIndex}></Indicator>
      </div>
    </section>
  );
}
