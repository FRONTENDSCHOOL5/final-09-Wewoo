import donationimgflood from '../../assets/images/HelpPage/donation-flood.png';
import donationimgwar from '../../assets/images/HelpPage/donation-war.png';
import campaignimgbriquette from '../../assets/images/HelpPage/campaign-briquette.png';
import campaignimgwildfire from '../../assets/images/HelpPage/campaign-wildfire.png';

const donationData = [
  {
    id: 1,
    endline: 17,
    location: '경기도 의왕시',
    detail: '홍수 피해 복구 기금',
    donationGoal: 10000000,
    donated: 3776000,
    category: 'donation',
    type: '홍수',
    image: donationimgflood,
  },
  {
    id: 2,
    endline: 25,
    location: '우크라이나',
    detail: '난민 구호 기금',
    donationGoal: 100000000,
    donated: 29400000,
    category: 'donation',
    type: '전쟁',
    image: donationimgwar,
  },
  {
    id: 3,
    endline: 12,
    location: '서울시 성북구',
    detail: '사랑의 연탄 기금',
    donationGoal: 10000000,
    donated: 3120000,
    category: 'donation',
    type: '이웃',
    image: campaignimgbriquette,
  },
  {
    id: 4,
    endline: 37,
    location: '강원도 강릉',
    detail: '화재 피해 복구 기금',
    donationGoal: 100000000,
    donated: 12700000,
    category: 'donation',
    type: '산불',
    image: campaignimgwildfire,
  },
];

export default donationData;
