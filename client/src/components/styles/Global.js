import { createGlobalStyle } from 'styled-components';
import { object } from 'prop-types';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, #root, main {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    font-family: Roboto, Helvetica, sans-serif;
    min-height: 100vh;
    width: 100vw;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.title};
  }

  h1 {
    font-size: 3.5rem;
    color: #000;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.accent};
    line-height: 1em;
    margin-bottom: 0.2em;
    margin-top: 0.5em;
  }
  
  h3 {
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 1em;
  }
  
  h4 {
    font-size: 2rem;
    color: var(--accent-color);
    margin-bottom: 1em;
  }
  
  h5 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.accent};
    margin-bottom: 0.2em;
  }
  
  h6 {
    font-size: 1.3rem;
    margin-bottom: 0.2em;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.3em;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  } 
  
  strong {
    font-weight: bold;
    font-size: 1.25rem;
  }
  
  em {
    font-style: italic;
  }
`;

export default GlobalStyles;

GlobalStyles.propTypes = {
  theme: object,
};
