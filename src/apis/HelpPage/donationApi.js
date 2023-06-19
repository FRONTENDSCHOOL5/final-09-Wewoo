import donationimgflood from '../../assets/images/HelpPage/donation-flood.png';
import donationimgwar from '../../assets/images/HelpPage/donation-war.png';

const donationData = [
  {
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
    endline: 25,
    location: '우크라이나',
    detail: '난민 구호 기금',
    donationGoal: 100000000,
    donated: 29400000,
    category: 'donation',
    type: '전쟁',
    image: donationimgwar,
  },
];

export default donationData;
