import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    font-size: 10px;
  }
  // 전역 스타일
  * {
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard.woff') format('woff');
    font-style: normal;
}

  a {
    text-decoration: none;
    color: inherit;
  }

    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, input,button{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    ol, ul{
        list-style: none;
    }

  input {
    all: unset;
  }

  textarea {
		border: none;
		overflow: auto;
		outline: none;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		resize: none;
		font: inherit;
	}

  button {
    all: unset;
    cursor: pointer;
  }

  img {
    vertical-align: top;
    width: 100%;
    height: auto;
  }

  /* 숨김 텍스트 처리 */
  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  /* 한줄 말줄임 */
  .sl-ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 두줄 말줄임 */
  .multi-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /* 공통 Layout */
  .container {
    display: flex;
    justify-content: center;
    max-width: 375px;
    margin: 0 auto;
    margin-top: 80px;
  } 

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
