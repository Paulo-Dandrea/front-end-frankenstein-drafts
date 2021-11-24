import styled from 'styled-components'

export const GridContainer = styled.div`
  border: 5px solid limegreen;
  display: grid;
  padding-inline: 1rem;
  place-content: center;
  place-items: center;
  text-align: center;

  * {
    max-width: 45ch;
  }

  gap: 10%;

  @media (min-width: 45em) {
    grid-template-columns: minmax(2em, 1fr) repeat(2, minmax(0, 40rem)) minmax(2em, 1fr);

    text-align: left;

    & > *:first-child {
      grid-column: 2;
      outline: 1px solid red;
    }

    & > *:last-child {
      grid-column: 3;
      outline: 1px solid yellow;
    }
  }
  & > *:first-child {
    outline: 1px solid red;
  }

  & > *:last-child {
    outline: 1px solid yellow;
  }
`

export const GridContainerHome = styled(GridContainer)`
  /* background-color: red; */
  padding-bottom: 6rem;
  align-items: end;
`
