import styled, { css } from 'styled-components'
export const Wrapper = styled.header`
  display: flex;
  height: 5rem;
`

export const Logo = styled.h1`
  ${({ theme }) => css`
    display: flex;
    font-size: 2.5rem;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary};
  `}
`

type MenuProps = {
  open: boolean
}

export const Menu = styled.div<MenuProps>`
  ${({ open }) => css`
    position: absolute;
    right: 0;
    display: flex;
    gap: 0.8rem;
    flex-direction: column;
    width: 5rem;
    height: 5rem;
    padding-right: 1rem;
    padding-top: 1rem;
    cursor: pointer;
    z-index: 3;

    ${open &&
    css`
      ${Line}:nth-child(1) {
        transform: translateY(13px) rotate(45deg);
        transform-origin: center;
      }

      ${Line}:nth-child(2) {
        opacity: 0;
      }

      ${Line}:nth-child(3) {
        transform: translateY(-19px) rotate(-45deg);
        transform-origin: center;
      }
    `}
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    height: 8px;
    background: ${theme.colors.white};
    opacity: 1;
    transition: 0.3s ease-out;

    &:nth-child(2) {
      transition: 0.1s ease-out;
    }
  `}
`

export const Nav = styled.nav<MenuProps>`
  ${({ theme, open }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    opacity: 1;
    visibility: visible;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.background};
    transition: 0.3s ease-out;
    z-index: 2;

    ${!open &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
  `}
`

type NavItemProps = {
  isSelected: boolean
}

export const NavItem = styled.a<NavItemProps>`
  ${({ theme, isSelected }) => css`
    padding: 1rem;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${isSelected ? theme.colors.primary : theme.colors.white};

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.backgroundHover};
    }
  `}
`
