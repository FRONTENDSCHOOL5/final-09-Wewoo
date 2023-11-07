import campaignimgwildfire from '../../assets/images/HelpPage/campaign-wildfire.png';
import campaignimgflood from '../../assets/images/HelpPage/campaign-flood.png';

const userInformStore = [
  {
    name: 'user',
    campaign: [
      {
        endline: 16,
        location: '강원도 강릉',
        detail: '화재 피해 복구',
        description: '피해 복구작업에 동참해주세요',
        participantGoal: 100,
        participant: 32,
        time: '15:00',
        gatherPlace: '강릉시청',
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
        time: '13:00',
        gatherPlace: '서귀포시청',
        category: 'campaign',
        type: 'flood',
        image: campaignimgflood,
      },
    ],
  },
];

export default userInformStore;
