import React, { useState } from 'react';
import NavBar from '../../../components/common/NavBar/NavBar';
import EmergencySupplies from './EmergencySupplies';
import PreventHeader from './PreventHeader';
import ActionTips from './ActionTips';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Main = styled.main`
  width: 100%;
`;

export default function Earthquake() {
  const [category, setCategory] = useState(0);
  const params = useParams();
  return (
    <section className='container'>
      <div className='wrapper'>
        <PreventHeader />
        <Main>
          <NavBar setType={setCategory} />
          {category === 0 && <EmergencySupplies />}
          {category === 1 && <ActionTips type={params.type} />}
        </Main>
      </div>
    </section>
  );
}
