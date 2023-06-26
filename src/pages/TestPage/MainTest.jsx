import React, { useContext } from 'react';
import { UserContext } from './UserContext.js';
import styled from 'styled-components';

export default function MainTest() {
  const { user, updateUser } = useContext(UserContext);
  const logoutHandler = () => {
    localStorage.setItem('user', null);
    updateUser('');
  };

  console.log(user);
  return (
    <section className='container'>
      <div className='wrapper'>
        {user ? (
          <MainProfile>
            <div>
              <h2>
                {user.username} 님<br />
                안전한 하루 보내세요!
              </h2>
            </div>
            <ProfileImg>
              <img src={user.image} alt='프로필' />
            </ProfileImg>
            <button onClick={logoutHandler}>로그아웃</button>
          </MainProfile>
        ) : (
          <p>프로필을 보려면 로그인해주세요.</p>
        )}
      </div>
    </section>
  );
}

const MainProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
`;

const ProfileImg = styled.div`
  width: 60px;
  overflow: hidden;
  border-radius: 100px;

  img {
    display: block;
    width: 100%;

    aspect-ratio: 60/60;
    object-fit: cover;
  }
`;
