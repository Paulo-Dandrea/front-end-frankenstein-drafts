import styled from 'styled-components'
import colors from '~/ui/theme/colors'
import space from '~/ui/theme/space'

export const PrimaryUL = styled.ul`
  display: flex;

  gap: 8rem;
  --underline-gap: 2 rem;
  list-style: none;
  padding: 0;
  margin: 0;

  * {
    color: ${colors.white};
    letter-spacing: ${space.tiny};
    text-transform: uppercase;
  }

  li {
    cursor: pointer;
    padding: ${space.xxxLarge} 0;
    border: 0;

    &:hover,
    &:focus {
      border-bottom: 0.2rem solid ${colors.darkGray2};
    }
  }

  .active,
  [aria-selected='true'] {
    border-bottom: 0.2rem solid ${colors.white};
  }

  a {
    text-decoration: none;

    & > span {
      font-weight: 700;
      margin-right: 0.5em;
    }
  }
`
