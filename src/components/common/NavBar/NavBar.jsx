import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import campaignApi from '../../../apis/HelpPage/campaignApi';
import donationApi from '../../../apis/HelpPage/donationApi';
import styled from 'styled-components';
import Slider from '../Slider/Slider';
import EmergencySupplies from '../../../pages/PreventPage/components/EmergencySupplies';

export default function NavBar({ navType, setType }) {
  const navigate = useNavigate();
  const compareFn = (a, b) => {
    return a.endline - b.endline;
  };
  const intergratedData = [...campaignApi, ...donationApi];
  intergratedData.sort(compareFn).splice(5);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [displayedData, setdisplayedData] = useState(
    donationApi.sort((a, b) => a.endline - b.endline),
  );
  const [isDonationExist, setIsDonationExist] = useState(true);

  const navArr = [
    ['관심재난', '화재', '대지', '수해', '사고', '대처요령', '테스트1', '테스트2'],
    ['추천', '산불', '지진', '화재', '홍수', '이웃', '의료', '전쟁'],
    ['비상용품', '행동요령'],
  ];

  const filteringDataHandler = (index, event) => {
    setActiveNavIndex(index);
    setType ? setType(index) : null;
    const listItem = event.target;
    const list = listItem.parentNode;

    const listItemRect = listItem.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    const listItemOffsetLeft = listItemRect.left - listRect.left;
    const scrollLeft = list.scrollLeft;
    const listItemOffset = listItemOffsetLeft + scrollLeft;

    const targetScrollLeft = listItemOffset - 20;

    list.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (navType === 'help') {
      if (activeNavIndex === 0) {
        setdisplayedData(donationApi.sort((a, b) => a.endline - b.endline));
        if (displayedData.length === 0) {
          setIsDonationExist(false);
        } else {
          setIsDonationExist(true);
        }
      } else if (activeNavIndex === 1) {
        setdisplayedData(
          donationApi.filter((el) => {
            return el.type === '산불';
          }),
        );
        if (displayedData.length === 0) {
          setIsDonationExist(false);
        } else {
          setIsDonationExist(true);
        }
      } else if (activeNavIndex === 2) {
        setdisplayedData(
          donationApi.filter((el) => {
            return el.type === '지진';
          }),
        );
        if (displayedData.length === 0) {
          setIsDonationExist(false);
        } else {
          setIsDonationExist(true);
        }
      } else if (activeNavIndex === 3) {
        setdisplayedData(
          donationApi.filter((el) => {
            return el.type === '화재';
          }),
        );
        if (displayedData.length === 0) {
          setIsDonationExist(false);
        } else {
          setIsDonationExist(true);
        }
      } else if (activeNavIndex === 4) {
        setdisplayedData(
          donationApi.filter((el) => {
            return el.type === '홍수';
          }),
        );
        if (displayedData.length === 0) {
          setIsDonationExist(false);
        } else {
          setIsDonationExist(true);
        }
      } else if (activeNavIndex === 5) {
        setdisplayedData(
          donationApi.filter((el) => {
            return el.type === '이웃';
          }),
        );
        if (displayedData.length === 0) {
          setIsDonationExist(false);
        } else {
          setIsDonationExist(true);
        }
      } else if (activeNavIndex === 6) {
        setdisplayedData(
          donationApi.filter((el) => {
            return el.type === '의료';
          }),
        );
        if (displayedData.length === 0) {
          setIsDonationExist(false);
        } else {
          setIsDonationExist(true);
        }
      } else if (activeNavIndex === 7) {
        setdisplayedData(
          donationApi.filter((el) => {
            return el.type === '전쟁';
          }),
        );
        if (displayedData.length === 0) {
          setIsDonationExist(false);
        } else {
          setIsDonationExist(true);
        }
      }
    }
  }, [activeNavIndex, isDonationExist, displayedData.length, navType]);

  return (
    <section className='container'>
      <div className='wrapper'>
        <Navbar>
          <ul>
            {navType === 'prevent' ? (
              <>
                {navArr[0].map((el, i) => {
                  return (
                    <li
                      key={i}
                      className={i === activeNavIndex ? 'active' : ''}
                      onClick={(e) => {
                        filteringDataHandler(i, e);
                      }}
                    >
                      {el}
                    </li>
                  );
                })}
              </>
            ) : navType === 'help' ? (
              <>
                {navArr[1].map((el, i) => {
                  return (
                    <li
                      key={i}
                      className={i === activeNavIndex ? 'active' : ''}
                      onClick={(e) => {
                        filteringDataHandler(i, e);
                      }}
                    >
                      {el}
                    </li>
                  );
                })}
              </>
            ) : (
              <>
                {navArr[2].map((el, i) => {
                  return (
                    <li
                      key={i}
                      className={i === activeNavIndex ? 'active' : ''}
                      onClick={(e) => {
                        filteringDataHandler(i, e);
                      }}
                    >
                      {el}
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </Navbar>
        {isDonationExist && <Slider type={'help'} displayedData={displayedData} />}
        {!isDonationExist && (
          <DonationEmptyIndicator>
            <span>{navArr[1][activeNavIndex]}관련 기금 후원이 없습니다.</span>
          </DonationEmptyIndicator>
        )}
      </div>
    </section>
  );
}

const DonationEmptyIndicator = styled.li`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  font-size: 18px;
  font-weight: bold;
`;

const Navbar = styled.section`
  width: 100%;
  margin-bottom: 30px;
  ul {
    display: flex;
    padding: 0 20px;
    gap: 25px;
    overflow-x: scroll;
    scrollbar-width: none; /* 파이어폭스 */
    &::-webkit-scrollbar {
      /* 크롬, 사파리, 오페라, 엣지 */
      display: none;
    }

    li {
      flex-shrink: 0;
      padding: 20px 0px 10px;
      font-size: 18px;
      font-weight: bold;
      color: #ccc;
      cursor: pointer;
    }

    li.active {
      color: #000;
      border-bottom: 2px solid black;
    }
  }
`;
