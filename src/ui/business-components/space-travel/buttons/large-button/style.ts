import styled from 'styled-components'

export const LargeButton = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colour.dark};
  background-color: ${({ theme }) => theme.colour.white};
  font-size: ${({ theme }) => theme.fontSizes.mobile.fs600};
  @media (min-width: 53em) {
    font-size: ${({ theme }) => theme.fontSizes.tablet.fs600};
  }
  @media (min-width: 45em) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.fs600};
  }
  font-family: 'Bellefair', serif;

  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  padding: 0 2em;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colour.white};
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
`
