import React from 'react';
import { UserProvider } from './UserContext';
import AppTest from './AppTest';

const IndexTest = () => {
  return (
    <UserProvider>
      <AppTest />
    </UserProvider>
  );
};

export default IndexTest;
