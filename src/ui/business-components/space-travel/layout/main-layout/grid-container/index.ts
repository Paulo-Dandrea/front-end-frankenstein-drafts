import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;

  border: 5px solid limegreen;

  @media (min-width: 45em) {
    grid-template-columns: minmax(2em, 1fr) repeat(2, minmax(0, 40rem)) minmax(2em, 1fr);

    column-gap: 2rem;

    & > *:first-child {
      grid-column: 2;
      outline: 1px solid red;
    }

    & > *:last-child {
      grid-column: 3;
      outline: 1px solid yellow;
    }
  }
`
