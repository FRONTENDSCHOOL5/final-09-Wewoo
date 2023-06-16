import campaignimgwildfire from '../../assets/images/HelpPage/campaign-wildfire.png';
import campaignimgflood from '../../assets/images/HelpPage/campaign-flood.png';
import campaignimgpainting from '../../assets/images/HelpPage/campaign-painting.png';
import campaignimgbriquette from '../../assets/images/HelpPage/campaign-briquette.png';

const campaignData = [
  {
    endline: 16,
    location: '강원도 강릉',
    detail: '화재 피해 복구',
    description: '피해 복구작업에 동참해주세요',
    participantGoal: 100,
    participant: 32,
    category: 'campaign',
    type: 'wildfire',
    image: campaignimgwildfire,
  },
  {
    endline: 37,
    location: '제주도',
    detail: '호우 피해 복구',
    description: '피해 복구작업에 동참해주세요',
    participantGoal: 100,
    participant: 57,
    category: 'campaign',
    type: 'flood',
    image: campaignimgflood,
  },
  {
    endline: 5,
    location: '경남 통영',
    detail: '낙후지역 벽화 그리기',
    description: '벽화 그리기에 동참해주세요',
    participantGoal: 20,
    participant: 18,
    category: 'campaign',
    type: 'painting',
    image: campaignimgpainting,
  },
  {
    endline: 23,
    location: '서울시 성북구',
    detail: '연탄 나르기',
    description: '연탄 나르기에 동참해주세요',
    participantGoal: 50,
    participant: 41,
    category: 'campaign',
    type: 'briquette',
    image: campaignimgbriquette,
  },
];

export default campaignData;
