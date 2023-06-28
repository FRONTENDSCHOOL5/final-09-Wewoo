import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import AppRouter from './pages/Router';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <UserProvider>
          <section className='container'>
            <div className='wrapper'>
              <AppRouter />
            </div>
          </section>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
