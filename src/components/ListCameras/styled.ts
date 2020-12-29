import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  gap: 1rem;

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, minmax(auto, 500px));
  `}
`

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    font-size: 1.6rem;
    height: 500px;

    &:hover ${Description} {
      visibility: visible;
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }

    &::before {
      content: '';
      position: absolute;
      border: 1.6rem solid ${theme.colors.background};
      border-top-color: ${theme.colors.primary};
      border-radius: 50%;
      width: 12rem;
      height: 12rem;
      top: 50%;
      left: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}
`

export const Description = styled.figcaption`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    padding: 1rem 0.5rem;
    bottom: 0;
    background-color: ${theme.colors.backgroundHover};
    visibility: hidden;
    opacity: 0;
    transition: 0.4s ease-out;
  `}
`

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
