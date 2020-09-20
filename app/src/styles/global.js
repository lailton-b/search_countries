import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.875rem;
  }

  li, button {
    font-family: 'Nunito Sans', sans-serif;
    color: ${(props) => props.theme.colors.text};
  }

  ul {
    list-style: none;
  }
`;
