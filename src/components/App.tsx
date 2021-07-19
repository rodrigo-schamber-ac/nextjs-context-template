import React, { FC } from 'react';
import ThemeProvider from '../contexts/ThemeContext';
import ThemedContainer from './ThemedContainer';
import ThemedHeader from './ThemedHeader';

const App: FC = () => {
  return (
    <ThemeProvider>
      <ThemedContainer>
        <ThemedHeader />
      </ThemedContainer>
    </ThemeProvider>
  );
};

export default App;
