import React from 'react';
import styled from 'styled-components';
const Top = styled.article`
  display: flex;
  align-items: flex-end;
`;
const TopBar = () => {
  return (
    <>
      <Top>
        <button className='a11y-hidden'>
          <img src='' alt='채팅' />
          채팅{' '}
        </button>
        <button className='a11y-hidden'>
          <img src='' alt='알림' />
          알림{' '}
        </button>
        <button className='a11y-hidden'>
          <img src='' alt='설정' />
          설정{' '}
        </button>
      </Top>
    </>
  );
};

export default TopBar;
