export const baseTheme = {
  colors: {
    background: "#FFF5F7",   // 로즈 베이스
    primary: "#E2527D",      // 클래식 로즈 핑크 (메인)
    secondary: "#1B1464",    // 딥 네이비 (강한 대비)
    accent: "#F8C8DC",       // 로즈 하이라이트
    gradientStart: "#FFD9E2", // 로즈-라이트 시작
    gradientEnd: "#FFF5F9",   // 부드러운 크림핑크 끝
    text: "#2E2E2E",
  },
  fonts: {
    main: "'Inter', 'Pretendard', sans-serif",
  },
};

export type ThemeType = typeof baseTheme;
