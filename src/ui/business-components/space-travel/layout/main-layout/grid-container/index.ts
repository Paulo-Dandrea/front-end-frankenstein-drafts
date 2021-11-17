import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2em repeat(2, minmax(0, 40rem)) 2em;

  & > *:first-child {
    grid-column: 2;
  }

  & > *:last-child {
    grid-column: 3;
  }
`