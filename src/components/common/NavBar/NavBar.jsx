import React, { useState } from 'react';
import campaignApi from '../../../apis/HelpPage/campaignApi';
import donationApi from '../../../apis/HelpPage/donationApi';
import styled from 'styled-components';

export default function NavBar({ navType }) {
  const compareFn = (a, b) => {
    return a.endline - b.endline;
  };
  const intergratedData = [...campaignApi, ...donationApi];
  intergratedData.sort(compareFn).splice(5);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [displayedDonation, setDisplayedDonation] = useState(
    intergratedData.filter((el) => el.category === 'donation'),
  );

  const navArr = [
    ['관심재난', '화재', '대지', '수해', '사고', '대처요령', '테스트1', '테스트2'],
    ['추천', '산불', '지진', '화재', '홍수', '이웃', '의료', '식량'],
  ];
  // const navType = 'help';

  const filteringDataHandler = (index, event) => {
    setActiveNavIndex(index);

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
            ) : (
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
            )}
          </ul>
        </Navbar>
      </div>
    </section>
  );
}

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
