import styled from 'styled-components';

export const Container = styled.div`

  > h1 {
    margin-bottom: 15px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  @media(max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
