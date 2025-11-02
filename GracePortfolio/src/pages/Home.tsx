// src/pages/Home/Home.tsx
import { ThemeProvider } from "styled-components";
import { styles } from "./Home.styles";
import { homeTheme } from "./Home.theme";

export default function Home() {
  return (
    <ThemeProvider theme={homeTheme}>
      <styles.container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <styles.title>Seongeun Hwang</styles.title>
        <styles.accent>Grace</styles.accent>
        <styles.subtitle>Created by Grace</styles.subtitle>
      </styles.container>
    </ThemeProvider>
  );
}
