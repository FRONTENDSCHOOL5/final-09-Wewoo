const actionData = [
  {
    id: 0,
    textList: [
      '여름철에는 항상 기상상황에 주목하며 주변 사람들과 함께 정보를 공유합니다.',
      '열사병 등 온열질환의 증상과 가까운 병원 연락처 등을 가족이나 이웃과 함께 사전에 파악하고 어떻게 조치해야 하는지를 알아둡니다.',
      '폭염예보에 맞추어 무더위에 필요한 용품이나 준비사항을 가족이나 이웃과 함께 확인하고 정보를 공유합니다.',
    ],
    type: 'heatwave',
  },
  {
    id: 1,
    textList: [
      '바람을 등지고 주변의 낙엽, 나뭇가지 등 연소물질을 신속히 제거한 후 소방서, 경찰서 등에 신고한 후 낮은 자세로 엎드려 구조를 기다립니다.',
      '재난방송 등 산불상황을 알리는 사항에 집중하여 들어야 합니다.',
      '대피할 여유가 없을 때는 낙엽이나 나뭇가지 등이 없는 곳에서 얼굴 등을 가리고 불길이 지나갈 때까지 엎드려 있습니다.',
    ],
    type: 'wildfire',
  },
  {
    id: 2,
    textList: [
      '유리창이나 넘어지기 쉬운 가구 주변 등 위험한 위치를 확인해 두고 지진 발생 시 가까이 가지 않도록 합니다.',
      '깨진 유리에 다치지 않도록 두꺼운 실내화를 준비해 둡니다.',
      '화재를 일으킬 수 있는 난로나 위험물을 주의해 관리합니다.',
    ],
    type: 'earthquake',
  },
  {
    id: 3,
    textList: [
      '산사태 취약지역 주민은 대피를 준비하고, 행정기관에서 안내한 대피장소를 사전에 숙지하고 간단한 생필품 등 사전 준비합니다.',
      '텔레비전, 인터넷, 라디오를 통해 기상정보를 확인하고 관계 행정기관의 안내에 귀 기울인다.',
      '산사태는 상부에서 하부로 발생합니다 .대피시 산사태 발생방향과 수직방향의 가장 가까운 높은 곳으로 이동합니다.',
    ],
    type: 'landslide',
  },
  {
    id: 4,
    textList: [
      '야외활동을 자제하고 주변의 독거노인 등 건강이 염려되는 분들의 안부를 살피고 가족이나 이웃과 주변에 있는 사람들과 함께 강풍에 대처합니다.',
      '대피 시에는 쓰러질 위험이 있는 나무 밑이나 전신주 밑을 피하고 안전한 건물을 이용합니다.',
      '강풍으로 파손된 전기시설 등 위험 상황을 발견했을 때에는 감전 위험이 있으니 접근하거나 만지지 말고 119나 시·군․구청에 연락하여 조치를 취하도록 합니다.',
    ],
    type: 'typhoon',
  },
  {
    id: 5,
    textList: [
      '홍수피해가 예상되는 지역의 주민은 라디오나 TV, 인터넷을 통해 기상변화를 알아 둡시다.',
      '갑작스러운 홍수가 발생하였으면 높은 곳으로 빨리 대피합시다.',
      '강풍으로 파손된 전기시설 등 위험 상황을 발견했을 때에는 감전 위험이 있으니 접근하거나 만지지 말고 119나 시·군․구청에 연락하여 조치를 취하도록 합니다.',
    ],
    type: 'flood',
  },
  {
    id: 6,
    textList: [
      '주변의 배수로, 빗물받이는 수시로 청소를 실시하고 비탈면, 옹벽, 축대 등이 위험할 경우 정비하거나 시·군·구청에 신고합니다.',
      '비상상황이 예견될 때에는 가족이나 이웃과 함께 즉시 안전한 곳으로 이동할 수 있도록 하고, 가족이 각각 이동할 때를 대비하여 다시 만날 장소를 미리 정합니다.',
      '응급약품, 손전등, 식수, 비상식량, 라디오, 핸드폰 충전기, 휴대용 버너, 담요 등 비상용품을 미리 한 곳에 준비해 둡니다.',
    ],
    type: 'heavy-rain',
  },
  {
    id: 7,
    textList: [
      '외출 시에는 바닥면이 넓은 운동화나 등산화를 착용하고, 주머니에 손을 넣지 말고 보온 장갑 등을 착용하여 체온을 유지합니다.',
      '되도록 외출을 자제하고 대중교통을 이용하고, 부득이 차량을 이용할 경우에는 반드시 차량용 안전장구(체인, 염화칼슘, 삽 등)를 휴대합니다.',
      '눈사태 위험지역, 노후주택 등 붕괴 위험이 있는 건물의 주민은 주변에 있는 사람들에게 알려주고 위험지역에 있는 사람들과 함께 안전한 곳으로 이동 준비를 합니다.',
    ],
    type: 'heavy-snow',
  },
];

export default actionData;