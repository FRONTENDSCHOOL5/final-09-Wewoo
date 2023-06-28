import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0px auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const StyledContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const StyledBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 80px;
  min-height: 100vh;
  flex-direction: column;
  /* justify-content: space-between; */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const StyledCommonButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 55px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
`;

export const StyledNextButton = styled(StyledCommonButton)`
  background-color: #000000;
  color: white;
  width: 100%; /* margin: 0 20px 45px 20px; */
  &.disable {
    background-color: #eeeeee;
    color: black;
  }
`;

export const StyledHeader = styled.div`
  margin-top: 5px;
  margin-bottom: 30px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 64px;

  span {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
  }
`;

export const StyledBackButtonBox = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLoginTab = styled.div`
  align-self: flex-start;
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 6px;
  margin-bottom: 31px;
  border-bottom: 2px solid #333333;

  &.disable {
    border-bottom: none;
    color: #aaaaaa;
  }
`;

export const StyledInputText = styled.span`
  align-self: flex-start;
  font-weight: 600;
  font-size: 12px;
  color: #aaaaaa;
  margin-left: 2px;
  margin-bottom: 5px;

  &.mt-37 {
    margin-top: 37px;
  }
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 335px;
  height: 50px;
  background: #f6f6f6;
  border-radius: 8px;
  padding: 16px 20px;
  font-weight: 500;
  font-size: 14px;
  color: #000000;

  &::placeholder {
    color: #aaaaaa;
  }

  &.mb-37 {
    margin-bottom: 37px;
  }

  &.mb-20 {
    margin-bottom: 20px;
  }
`;

export const StyledErrorMessage = styled.span`
  color: #eb5757;
  align-self: flex-start;
  margin-top: 6px;
  font-weight: 500;
  font-size: 12px;

  &.mb-18 {
    margin-bottom: 18px;
  }
`;
