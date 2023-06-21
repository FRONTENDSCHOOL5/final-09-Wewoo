import newsFireHouse from '../../assets/images/PreventPage/news-fire-house.jpg';
import newsFireCar from '../../assets/images/PreventPage/news-fire-car.jpg';
import newsDust from '../../assets/images/PreventPage/news-dust.jpg';
import newsAccidentCar from '../../assets/images/PreventPage/news-accident-car.jpg';

const setNewsDate = (ago) => {
  const currentDate = new Date(); // 현재 날짜 가져오기

  const daysAgo = new Date(currentDate.getTime() - ago * 24 * 60 * 60 * 1000); // n일 전 날짜 계산

  const month = String(daysAgo.getMonth() + 1).padStart(2, '0'); // 월 값 가져오기
  const day = String(daysAgo.getDate()).padStart(2, '0'); // 일 값 가져오기

  if (ago === 0) {
    return '오늘';
  } else {
    const formattedDate = `${month}. ${day}.`; // 형식에 맞게 날짜 조합
    return formattedDate; // '05. 01.' 형식으로 출력
  }
};

const newsData = [
  {
    headline: "강남 아파트 지하주차장서 불.. '차량 엔진룸 화재' 추정",
    category: 'news',
    type: '화재',
    date: setNewsDate(0),
    time: '14:00',
    image: newsFireCar,
  },
  {
    headline: "서울 하늘을 뒤덮은 미세먼지 호흡기는 '비상'",
    category: 'news',
    type: '미세먼지',
    date: setNewsDate(0),
    time: '10:00',
    image: newsDust,
  },
  {
    headline: '평창동 주택 지하 1층서 불.. 주민 6명 대피',
    category: 'news',
    type: '화재',
    date: setNewsDate(1),
    time: '09:50',
    image: newsFireHouse,
  },
  {
    headline: '면목동 사가정역 교차로에서 교통사고 발생',
    category: 'news',
    type: '교통사고',
    date: setNewsDate(3),
    time: '18:00',
    image: newsAccidentCar,
  },
];

export default newsData;
