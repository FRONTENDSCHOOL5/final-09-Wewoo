import styled from 'styled-components';

export const MainHeader = styled.section`
  width: 100%;
  padding: 20px 20px 70px 20px;
  background-color: #191919;
  div.main-user-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    div.main-text-info {
      flex-direction: column;
      p.main-text {
        font-size: 24px;
        font-weight: 600;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: #fff;
        margin-bottom: 20px;
      }
      p.user-info {
        font-size: 12px;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: #fff;
        opacity: 0.75;
      }
    }
    img {
      width: 60px;
      height: 60px;
      aspect-ratio: 1/1;
    }
  }
`;

export const SlideUI = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  /* padding: 0 20px; */
  flex-wrap: nowrap;
  justify-content: initial;
  overflow-x: scroll;

  position: relative;
  bottom: 40px;
  div {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-shrink: 0;
  }
`;
export const SlideItem = styled.li`
  width: ${(props) => props.w}px;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  font-weight: 800;
  flex-basis: 1;
  flex-shrink: 0;
  padding: 15px 35px 20px 15px;

  span {
    font-size: 12px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.6);
  }
  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: white;
    margin-top: 15px;
  }
`;

export const MainSponsor = styled.section`
  background-color: #fff;
  width: 100%;
  padding: 75px 20px 65px 20px;
  margin-bottom: 5px;
  article {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #191919;
    padding: 20px 15px;
    color: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    margin: 30px 0 20px 0;
    span:first-child {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    span:last-child {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
  }
  div.graph {
    width: 335px;
    height: 100px;
    background-color: aqua;
  }
`;
export const MainVolunteer = styled.section`
  width: 100%;
  padding: 65px 20px 70px 20px;
  background-color: #fff;
  margin-bottom: 5px;
  div.slide {
    width: 335px;
    height: 100px;
    background-color: aqua;
    margin-top: 25px;
  }
`;
export const MainFollow = styled.section`
  width: 100%;
  padding: 65px 20px 65px 20px;
  background: #fff;
`;
export const MainFollowList = styled.div`
  display: flex;
  color: #000;
  gap: 15px;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: initial;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 15px;
  /* 스크롤 안 보이게 */
  div {
    flex-direction: column;
    text-align: center;
    img {
      border: 1px solid #eee;
      width: 60px;
      aspect-ratio: 1;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -0.02em;
    }
  }
  div:nth-child(1) {
    color: #ccc;
  }
`;
