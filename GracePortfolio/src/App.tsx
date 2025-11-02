import { ThemeProvider } from "styled-components";
import Header from "./components/Headers.tsx";
import { GlobalStyle } from "./styles/GlobalStyle";
import { baseTheme } from "./styles/theme";
import Home from "./pages/Home";

export function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  );
}


