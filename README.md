# <span id="top">🚨위용위용</span>

![readmeheader](https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/122869001/2031a1c7-587e-473f-b3f5-48dd1740f481)
<strong>위</strong>험할 때 <strong>용</strong>이하게 <br />

<br />

> 🖥️ 계정 ID : `wewoo_test@wewoo_test.com` , 🔒 PW : `wewootest!` <br />
> 📆 개발 기간 : 2023.06.01 ~ 2023.06.30 <br />
> 📆 추가 개발 기간 : 2023.10.01 ~ 2023.10.23

<br />

## 프로젝트 소개

### 위급할때 ! 용이하게 !

&nbsp; 전국적으로 재난이 지속적으로 발생되는 상황에서 국민들은 아직 재난에 무관심하고 재난 관련 정보 제공 또한 미흡해 이러한 상황을 극복하기 위한 대책안을 세워보았습니다. <br />
&nbsp; 위용위용은 스마트폰 및 디지털 플랫폼의 기능을 활용하여 사용자가 사전 조치를 취할 수 있게하며, 제공되는 정보에 입각한 결정을 내리고 중요한 상황에서 안전을 보장받을 수 있도록 합니다.

<br />

## 🔥남양홍🔥

저희는 4명의 프론트엔드 개발자로 구성된 '남양홍' 입니다. <br />
팀원들의 이름에서 하나씩 가져와서 합친 팀명으로, 팀원들이 트러블 없이 함께 헤쳐나가자는 의미에서 지은 팀명입니다.
|홍승표|남현희|안양진|홍수지|
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="180" height="210" alt="승표_프로필" src="https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/0a458b2f-1034-421b-a79f-d3cce39e70a1"> | <img width="180" height="210" alt="현희_프로필" src="https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/6d21017e-e664-424b-8fa9-5480d909c5c7"> | <img width="180" height="210" alt="양진_프로필" src="https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/a6fb1516-a9d8-4cb6-a9f5-37c9512e3c72"> | <img width="180" height="210" alt="수지_프로필" src="https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/2711e00d-94f6-4991-bf40-358d38a0a1dd"> |
| [Jaharim](https://github.com/Jaharim) | [tweety-hh](https://github.com/tweety-hh) | [anyangjin](https://github.com/anyangjin) | [g1azed](https://github.com/g1azed) |
| 팀장 & Tech Leader | 팀원 & Document Operator | 팀원 & Communication Manager | 팀원 & Project Manager |

### 🐯홍승표

- 개발 파트

  - **개발 환경 세팅**
    - ESLint 적용
    - Prettier 적용
    - styled-component
      - GlobalStyle 적용
      - theme 적용
  - **공통 컴포넌트 구현**
    - Carousel
    - NavBar
    - Slider
    - NewsFrame
  - **HelpPage 구현**
  - **DonationPage 구현**
    - DonationDetail
    - DonationInform
    - DonationsInput
  - **ContextAPI 적용**
  - **Router 처리**
    - Router와 Component 연결
    - 비로그인 상태에서 url로 페이지 접근 불가 및 유효하지 않은 url 처리
  - **CSS 처리**
    - 모바일 기반으로 데스크탑, 모바일 대응
    - 팀원 간 merge시 깨지는 CSS 수정
      - SplashPage, LoginPage, SignUpPage, MainPage, PreventPage, HelpPage, BottomNavBar, SectionHeader, TopBar
  - **API 연결 및 기능 구현**
    - 이미지 업로드 기능
      - AddPost
    - 개인 프로필 불러오기 기능 및 마크업
      - ProfilePage
    - 팔로우 / 언팔로우 기능 및 마크업
      - MainPage, SearchPage
    - 팔로잉 / 팔로워 리스트 기능 및 마크업
      - MainPage, ProfilePage
    - 유저 검색 기능 및 마크업
      - SearchPage
    - 게시글 작성 기능 및 AddPost Page 마크업
      - AddPost
    - 팔로잉 게시글 / 나의 게시글 목록 기능 및 마크업
      - PostPage
    - 게시글 상세 기능 및 마크업
      - PostDetail
    - 좋아요 / 좋아요 취소 기능
      - PostPage, PostDetail
    - 댓글 리스트 불러오기 기능 및 마크업
      - PostDetail
    - 댓글 작성 기능 및 마크업
      - PostDetail
    - 로그아웃 기능
      </br>

- **[ 추가 기능 개발 및 오류 개선 ]**
  - 추가 기능 개발
    - 게시글 수정 기능 및 마크업
      - UpdatePost
    - 게시글 삭제 기능
      - PostDetail
    - 댓글 삭제 기능
      - PostDetail
    - 프로필 수정 기능 및 마크업
      - ProfileUpdatePage
    - 마이페이지 내 팔로잉, 팔로워 목록 조회 페이지 기능 및 마크업
      - FollowingListPage, FollowerListPage
  - 오류 개선
    - 로그아웃 시 메인페이지( '/main' )로 이동하여 빈 화면이 출력되는 이슈
      - 로그아웃 시 초기화면( ' / ' )으로 이동하도록 수정
      - MainPage
    - 로그인 시 상단바의 사용되지 않는 아이콘 삭제
      - 'chat', 'alarm' 아이콘
      - MainPage
    - '예방해요' 페이지 행동요령 탭 내용이 일치하지 않거나 없는 탭 수정 및 추가
      - ActionTips
    - '후원현황' 누적후원금 차트 x축 최근 5개월로 출력되도록 코드 수정
      - DonationDetail
    - '이웃해요' 페이지 내에서 검색 결과의 계정아이디가 긴 경우 UI 가로가 길어지는 이슈
      - 한 줄 말줌임 처리하여 해결
      - SearchPage
    - '소통해요' 페이지
      - 여러 개의 이미지를 포함한 게시글의 경우 이미지가 제대로 출력되지 않던 이슈
        - 이미지가 한 장인 경우와 여러 개인 경우를 판단하여 출력하도록 코드를 수정하여 해결
        - PostPage, PostDetail
      - 작성된 게시글이 없는 경우 빈 화면이 출력되던 이슈
        - '작성된 게시글이 없습니다.' 문구가 출력되도록 함.
        - PostPage

### 🐰남현희

- **PreventPage 마크업 초안**
  - PreventPage
  - EmergencySuppliesPage
  - ActionTipsPage

### 🐻안양진

- **App Intro**
  - IntroScreenPage
  - Login&SignUpStartPage
- **Login&SignUpPage**

  - Login
    - LoginPage
  - SignUpPage
    - AccountSettingPage
    - AccountNameForm
    - ProfileSettingPage
    - ProfileSettingEndPage

- **ETC**
  - LoginPageCommonStyle

### 🐸홍수지

- **MainPage 마크업 초안**
- **CommonComponent**
  - BottomNavBar
  - PostDetailModal
  - PostNavBar
  - SectionHeader
  - TopBar
- **App UIUX Design**
- **Service Planning**

## 기술 및 개발 환경

### 사용 기술

- Front-end : <br />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=ESlint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
- Back-end : 멋쟁이 사자처럼 제공 API 사용

### 협업 툴

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/googlecalendar-4285F4?style=for-the-badge&logo=googlecalendar&logoColor=white">

### Git-flow 전략

<img width="400" src="https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/24099c3e-1750-482d-83a4-93d8ad39867e"> <br />

- 기본적으로 5가지 브랜치를 활용하는 Git-flow 전략이나, 프로젝트 규모에 맞춰서 3가지로 축소해 활용했습니다.
  - `main` : 배포하기 위한 브랜치
  - `develop` : 기능 구현, 버그 수정과 같은 기능 단위별 브랜치
  - `feature` : 세부 기능을 위한 브랜치
    - 각 브랜치의 이름은 feature/#이슈번호-세부기능으로 이름 지어 어떠한 기능의 브랜치인지를 알 수 있도록 했습니다.
    - push 완료 후에는 해당 브랜치를 삭제하여 브랜치를 잘못 사용하는 경우를 방지했습니다.

### 컨벤션

#### Git Commit Convention

```
- Initial : 시스템 초기 설정
- Feat : 새로운 기능 추가
- Design: HTML, CSS 등 UI 디자인 변경
- Perf: 성능 개선
- Refactor: 프로덕션 코드 리팩토링
- Fix: 버그(코드 오류 수정)
- Docs: 문서 작성 및 수정
- Remove: 파일만 삭제
- Rename: 파일 및 폴더명 수정
- Dir: 파일 및 폴더 구조 변경 시(추가, 삭제)
- Style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- Merge: 파일 또는 브랜치 병합할 경우
- Wip: 완료되지 않은 중간에 커밋이 필요한 경우
- Chore : 빌드 업무 수정, 패키지 매니저 수정, 개발 환경 세팅
- Assets : Image, Icon 등 Assets 파일 변동 사항이 있을 경우
```

#### ESLint

```
{
  "plugins": ["react", "react-hooks", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    // 들여쓰기를 강제하지 않고, 코드 스타일에 따라 들여쓰기를 자유롭게 사용
    "indent": ["off"],
    // var 키워드를 금지
    "no-var": "error",
    // async 함수에서 항상 await를 사용
    "require-await": "error",
    // ==와 != 연산자 대신 ===와 !== 연산자를 사용
    "eqeqeq": "warn",
    // React 컴포넌트의 prop 타입 체크를 무시
    "react/prop-types": 0,
    // 사용되지 않은 변수에 대한 경고 끄기
    "no-unused-vars": "off",
    // 카멜 케이스 명명 규칙 강제
    "camelcase": "error",
    // DOM에서 document 객체 사용을 허용
    "dom/no-document": "off",
    // 문장 끝에 세미콜론을 사용하도록 설정
    "semi": ["error", "always"],
    // 추가적인 세미콜론 사용을 금지
    "no-extra-semi": "error"
    // Prettier와 연동하여 코드 포맷팅을 적용
    "prettier/prettier": ["error", { "endOfLine": "auto" }]
  }
}
```

#### prettier

```
{
  // 객체 리터럴의 중괄호 주위에 공백 추가
  "bracketSpacing": true,
  // JSX 요소의 여는 꺾쇠 괄호(<)를 같은 줄에 위치시킬지 여부
  "jsxBracketSameLine": false,
  //  JSX 속성 값에 싱글 쿼테이션(')을 사용
  "jsxSingleQuote": true,
  // 문자열에 싱글 쿼테이션(')을 사용
  "singleQuote": true,
  // 텍스트 길어질 경우 줄 바꿈 유지
  "proseWrap": "preserve",
  // 문장 끝에 세미콜론 추가
  "semi": true,
  // 한 줄의 최대 길이 설정, 코드가 이 길이를 초과하면 줄 바꿈 발생
  "printWidth": 100,
  // 줄 바꿈 문자로 LF(Line Feed)를 사용
  "endOfLine": "lf",
  // 들여쓰기에 탭을 사용할지 여부 설정
  "useTabs": false,
  // 탭 문자 하나의 너비 설정
  "tabWidth": 2,
  // 객체나 배열의 마지막 요소 뒤에 쉼표를 추가할지 여부 설정
  "trailingComma": "all",
  // 화살표 함수의 매개변수가 단일 매개변수인 경우 괄호를 사용할지 여부 설정
  "arrowParens": "always"
}
```

## UI

![UI](https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/122869001/2f8936fa-9802-46e8-94e0-881c7d880f00)

## 페이지 기능

### 로그인 & 회원가입

|                                                                             초기화면                                                                              |                                                                          로그인                                                                          |                                                                          회원가입                                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='스플래시이미지' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/122869001/23bb574a-9708-404c-90d4-71e4efe78b60'> | <img alt='로그인' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/b7131996-4cc7-4493-8fa2-1943daa7008f'> | <img alt='회원가입' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/d6dbe85d-e748-4254-83ed-58ec5278f491'> |

### 메인페이지

|                                                                          봉사일정                                                                          |                                                                         팔로우 목록                                                                          |                                                                          후원현황                                                                          |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='봉사일정' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/a93dc0fd-3331-4d9f-9ccd-73b7c9f7be86'> | <img alt='팔로우목록' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/61a094dc-b363-4aae-a788-b4e577f81d13'> | <img alt='후원현황' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/7354e33a-79b0-42a6-8cb5-223cd9dcaaca'> |

|                                                                          로그아웃                                                                          |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='로그아웃' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/ee4c88f1-22c8-4543-9846-9756d52f7891'> |

### 마이페이지

|                                                                           초기화면                                                                           |                                                                            팔로우 목록                                                                            |                                                                         프로필 수정                                                                          |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='마이페이지' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/046b1522-a98e-4615-8a1a-9ebd1130768d'> | <img alt='이웃 마이페이지' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/cb048fac-8a08-4203-b0eb-cf16090354df'> | <img alt='프로필수정' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/548c17a5-036e-4a1a-a7df-b989b028e65e'> |

|                                                                         이웃 프로필                                                                          |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='이웃프로필' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/30222037-c9cb-412d-a173-03bd548ac1f4'> |

### 예방해요

|                                                                             초기화면                                                                             |                                                                          재난별 비상용품 및 행동요령                                                                           |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='예방해요페이지' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/5933f055-ea58-4606-afe9-2a520723d451'> | <img alt='재난별 비상용품 및 행동요령 ' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/5075e30e-83c6-44c3-9c6a-0d23fc749d23'> |

### 소통해요

|                                                                          초기화면                                                                          |                                                                     이웃들의 글 상세보기                                                                      |                                                                     나의 글 상세보기                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='초기화면' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/67a72bb3-767f-4eb4-91f2-461cd223896b'> | <img alt='이웃들의 글' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/b0c6edd9-cd2d-4499-a61e-e6928d075643'> | <img alt='나의 글' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/f91d9774-7528-4d7f-b63e-fe4c0e1514c1'> |

|                                                                         댓글 작성                                                                          |                                                                         댓글 삭제                                                                          |                                                                          좋아요                                                                          |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='댓글작성' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/53ffc4cb-a975-482a-b6d6-ef57b5064059'> | <img alt='댓글삭제' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/014741b1-ba39-42af-8d15-b53389ba7fd0'> | <img alt='좋아요' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/b36d9dfd-66de-41ab-8cb7-8813a9198999'> |

|                                                                         글 작성 (이미지 한 장)                                                                         |                                                                         글 작성 (이미지 여러 장)                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='글 작성 이미지 한 장' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/d4bb8f18-d464-4332-936f-b3349894a91a'> | <img alt='글 작성 이미지 여러 장' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/7352335e-30a2-476b-9c08-82a78097b7d1'> |

### 이웃해요

|                                                                          이웃검색                                                                          |                                                                          이웃검색 및 팔로우 / 팔로우 취소                                                                          |                                                                         검색한 이웃 프로필 보기                                                                          |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='이웃검색' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/46493171-e046-4b23-aef4-e182f6b8f37e'> | <img alt='이웃검색 및 팔로우 / 팔로우 취소' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/f2dda15c-53ef-430c-923a-0fa3f15d55f8'> | <img alt='이웃검색 결과 상세보기' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/3d00b44a-ad2b-424f-8796-de9e391fb697'> |

### 도와줘요

|                                                                              초기화면                                                                               |                                                                          캐러셀 및 카테고리                                                                          |                                                                                기금 후원                                                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img alt='도와줘요 초기화면' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/87fd4930-a696-41d5-9cfd-afcd96a278fa'> | <img alt='캐러셀 및 카테고리' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/65ef989e-8f88-4a27-974f-f654a34cb92b'> | <img alt='이웃검색 결과 상세보기' width='200' height='400' src='https://github.com/FRONTENDSCHOOL5/final-09-Wewoo/assets/83650872/433162a2-751c-44be-9ce9-643f514596b7'> |

## 프로젝트 소감

### 🐯 홍승표

API를 사용하면서 백엔드와의 데이터 통신과 데이터 처리를 경험할 수 있었습니다. API를 통해 데이터를 요청하고 응답을 받아오는 과정에서 비동기 처리와 에러 핸들링 등을 다루며, 실제 서비스 개발에 필수적인 요소들을 배울 수 있었습니다. 이를 통해 프론트엔드와 백엔드 간의 협업 방식과 데이터 흐름을 이해하는 데 큰 도움이 되었습니다.
또, 커밋 컨벤션과 코드 컨벤션을 준수하며 프로젝트를 진행하였는데 일관된 커밋 메시지 형식과 코드 스타일을 유지하는 것을 통해 팀 내에서 일관성 있는 개발 환경을 유지할 수 있었고 코드 리뷰와 협업 과정에서 원활한 소통과 이해가 가능했습니다.
Git을 활용하여 코드 변경 사항을 추적하고 병합하는 과정에서 충돌 해결과 브랜치 관리를 배울 수 있었습니다.
이번 프로젝트를 통해 실제 개발 환경에서의 경험을 쌓을 수 있었고 개발 역량과 협업 능력, 문제 해결 능력 등을 향상시킬 수 있었습니다.

### 🐰 남현희

여러가지로 부족함이 많던 저에게 항상 다정하게 응원해준 남양홍 팀원 분들 다 너무너무 감사합니다. 첫 프로젝트라 걱정이 많았는데 너무 좋은 분들을 만나서 끝까지 달려올 수 있었던거같습니다! 이번 프로젝트를 계기로 저의 부족한 점을 돌아보고 더 성장할 수 있는 기회가 될거같아서 너무 뜻 깊은 경험이었습니다! 다들 더 멋진 곳으로 올라가는 그 날까지 파이팅입니다!

### 🐻 안양진

❤️ 9팀 “남양홍” 최고 최고 ❤️
첫 만남부터 범상치 않던 우리 팀
여러분들과 함께해서 너무 영광이자 행복했어요!!
팀원 한 명 한 명에게 배울 점들이 너무 많았고 서로 부족한 부분들을 알려주며 한층 더 성장하는 계기가 되었어요!😊
어려운 부분도 여러분들과 함께해서 해결하고 고쳐 나갈 수 있었던 것 같습니다!!
협업의 진정한 의미를 이해하게 되었어요🥹
이번 프로젝트를 진행하며 스스로 어떤 부분이 많이 부족한지 그리고 필요한 부분은 어떤 것들이 있는지 확실히 알 수 있는 계기가 되어 좋았고, 이를 계기로 좀 더 성장할 수 있는 기회가 되었습니다.
9팀 이번 프로젝트를 시작으로 모두가 개발자로서 최고의 자리로 올라가는 날까지 파이팅입니다!!🔥🔥

### 🐸 홍수지

지나치게 부족한 저를 옆에서 응원해주고 용기를 북돋아준 우리 남양홍 팀원들 너무너무 고맙습니다. 첫번째 팀개발프로젝트라 아무것도 몰라서 많이 버거웠지만 팀원분들 덕분에 버틸 수 있었습니다. 너무 많이 아쉽고 채우고싶었던게 많았던 프로젝트지만 이번 경험을 통해서 저에게 부족한 점이 무엇인지 확실히 짚고 넘어갈 수 있었던 기간이었습니다. 감사합니다.
