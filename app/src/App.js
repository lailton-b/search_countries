import React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';

function App() {
  const [theme, setTheme] = React.useState(() => {
    const storageValue = JSON.parse(localStorage.getItem('theme'));
    if (storageValue && storageValue.title === 'dark') return dark;
    else return light;
  });

  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header theme={theme} setTheme={setTheme} />
      <Feed />
    </ThemeProvider>
  );
}

export default App;
