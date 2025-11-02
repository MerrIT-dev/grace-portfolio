import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 1.2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  z-index: 10;
  box-shadow: 0 2px 8px rgba(255, 92, 138, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>Grace Hwang</Logo>
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </Nav>
    </HeaderWrapper>
  );
}
