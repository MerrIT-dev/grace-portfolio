import styled from "styled-components";
import { motion } from "framer-motion";

export const styles = {
  container: styled(motion.section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(
      145deg,
      ${({ theme }) => theme.colors.gradientStart},
      ${({ theme }) => theme.colors.gradientEnd}
    );
    text-align: center;
    padding: 0 2rem;
    overflow: hidden;
  `,

  title: styled(motion.h1)`
    font-size: clamp(2.8rem, 6vw, 4rem);
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 10px rgba(255, 92, 138, 0.25);
  `,

  accent: styled(motion.span)`
    display: block;
    background: linear-gradient(90deg, #8ca8ff, #e7ecff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-weight: 900;
    margin-top: 0.4rem;
    transform: translateY(8px);
  `,

  subtitle: styled(motion.h2)`
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: 2rem;
    opacity: 0.85;
    font-weight: 500;
  `,
};
