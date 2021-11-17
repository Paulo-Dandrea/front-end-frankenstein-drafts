import styled from 'styled-components'

export const PrimaryUL = styled.ul`
  display: flex;

  gap: 8rem;
  --underline-gap: 2 rem;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Barlow Condensed", sans-serif;

  * {
    color: ${({ theme }) => theme.colour.white};
    letter-spacing: ${({ theme }) => theme.space.tiny};
    text-transform: uppercase;
  }

  li {
    cursor: pointer;
    padding: ${({ theme }) => theme.space.xxxLarge} 0;
    border: 0;

    &:hover,
    &:focus {
      border-bottom: 0.2rem solid ${({ theme }) => theme.colour.darkGray2};
    }
  }

  .active,
  [aria-selected='true'] {
    border-bottom: 0.2rem solid ${({ theme }) => theme.colour.white};
  }

  a {
    text-decoration: none;

    & > span {
      font-weight: 700;
      margin-right: 0.5em;
    }
  }
`
