import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import CountryPage from './components/CountryPage/CountryPage';
import NotFound from './components/Helper/NotFound/NotFound';

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/search_countries" element={<Feed />} />
          <Route
            path="/search_countries/country/:name"
            element={<CountryPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
