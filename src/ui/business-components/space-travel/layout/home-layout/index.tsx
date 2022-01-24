import styled from 'styled-components'

export const TextContainerHome = styled.div`
  h1,
  span {
    text-transform: uppercase;
  }
  h1 {
    font-family: ${({ theme }) => theme.fontFamily.spaceTravel.sansCond};

    letter-spacing: ${({ theme }) => theme.space.medium};
    font-size: ${({ theme }) => theme.fontSizes.mobile.fs500};

    @media (min-width: 53em) {
      font-size: ${({ theme }) => theme.fontSizes.tablet.fs500};
    }
    @media (min-width: 45em) {
      font-size: ${({ theme }) => theme.fontSizes.desktop.fs500};
    }
    color: ${({ theme }) => theme.colour.spaceTravel.accent};

    & > span {
      font-family: ${({ theme }) => theme.fontFamily.spaceTravel.serif};

      font-size: ${({ theme }) => theme.fontSizes.clamp5remTo9375rem};
      color: ${({ theme }) => theme.colour.white};
      display: block;
    }
  }
`
