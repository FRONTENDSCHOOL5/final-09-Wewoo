import React from 'react';
import earthquake from '../../../assets/icons/PreventPage/header-earthquake.png';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #ffcc00;
  width: 100%;
  padding: 40px 0 30px 20px;

  div {
    position: relative;
    &::before {
      position: absolute;
      content: '';
      background: url(${earthquake}) no-repeat 0, 0 / contain;
      top: -20px;
      right: 30px;
      width: 85px;
      height: 85px;
      opacity: 0.5;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
  }
`;

const FieldsetWrapper = styled.div`
  max-width: 304px;
  margin: 0 auto;

  span {
    font-weight: 400;
    font-size: 12px;
  }
`;

const Fieldset = styled.fieldset`
  display: flex;
  border: none;
  gap: 36px;
  justify-content: center;
  position: relative;
  padding: 0;
  margin: 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 95%;
    border: 1px solid #eee;
    z-index: -100;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.input.attrs({ type: 'radio', name: 'check' })`
  appearance: none;
  border: 2px solid #eee;
  background: #fff;
  border-radius: 50%;
  outline: none;
  vertical-align: middle;
  flex-shrink: 0;

  &.lg {
    width: 40px;
    height: 40px;
  }

  &.md {
    width: 30px;
    height: 30px;
  }

  &.sm {
    width: 20px;
    height: 20px;
  }

  &:checked {
    background-color: #ffcc00;
  }
`;

const TxtWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 7px 0;
  margin-bottom: 65px;
`;

const MainBox = styled.div`
  margin-top: 30px;
  margin-left: 20px;
`;

const LargeText = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 15px;
`;

const MediumText = styled.p`
  font-weight: 400;
  font-size: 14px;
  padding-bottom: 20px;
`;

export default function Checking() {
  return (
    <section className='container'>
      <div className='wrapper'>
        <Header>
          <span></span>
          <div>
            <h1>
              지진 안전, <br /> 지금 알려 드릴게요
            </h1>
          </div>
        </Header>
        <main>
          <MainBox>
            <LargeText>01.</LargeText>
            <MediumText>
              지진 피해를 예방하기 위해 천장이나 높은 곳의 떨어질 수 있는 물건을 치우고, 머리맡에
              깨지기 쉽거나 무거운 물품을 두지 않습니까?
            </MediumText>
            <Field />

            <LargeText>02.</LargeText>
            <MediumText>
              지진 피해를 예방하기 위해 천장이나 높은 곳의 떨어질 수 있는 물건을 치우고, 머리맡에
              깨지기 쉽거나 무거운 물품을 두지 않습니까?
            </MediumText>
            <Field />
          </MainBox>
        </main>
      </div>
    </section>
  );
}

const Field = () => {
  return (
    <FieldsetWrapper>
      <Fieldset>
        <Label>
          <Btn className='lg' />
        </Label>
        <Label>
          <Btn className='md' />
        </Label>
        <Label>
          <Btn className='sm' />
        </Label>
        <Label>
          <Btn className='md' />
        </Label>
        <Label>
          <Btn className='lg' />
        </Label>
      </Fieldset>
      <TxtWrapper>
        <span>아니다</span>
        <span>그렇다</span>
      </TxtWrapper>
    </FieldsetWrapper>
  );
};
