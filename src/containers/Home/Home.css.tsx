import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-column-gap: var(--column-gutter);
  grid-column-gap: var(--column-gutter);
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  align-items: start;
  margin: 2rem auto;
  max-width: 1200px;
`;

export const Image = styled.img`
  cursor: zoom-in;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--column-gutter);
`;
