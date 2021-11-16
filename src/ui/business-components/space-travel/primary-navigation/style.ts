import styled from 'styled-components'
import colors from '~/ui/theme/colors'
import space from '~/ui/theme/space'

export const PrimaryNav = styled.nav`
  gap: 8rem;
  --underline-gap: 2 rem;
  list-style: none;
  padding: 0;
  margin: 0;

  cursor: pointer;
  padding: var(--underline-gap, 1rem) 0;
  border: 0;
  border-bottom: 0.2rem solid hsl( ${colors.white} / 0);



  /* &:hover, &:focus {
        border-color: hsl( var(--clr-white) / .5);

  } */

  * {
    color: ${colors.white};
    letter-spacing: ${space.small};
    text-transform: uppercase;
  }

  a {
    text-decoration: none;

    & > span {
      font-weight: 700;
      margin-right: 0.5em;
    }
  }
`
