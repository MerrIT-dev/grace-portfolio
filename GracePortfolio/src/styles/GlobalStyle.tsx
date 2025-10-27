// src/styles/GlobalStyle.tsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4 {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
