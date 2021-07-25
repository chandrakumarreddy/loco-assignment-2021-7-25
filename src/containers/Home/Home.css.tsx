import styled from "@emotion/styled";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Container = styled.div`
  display: grid;
  grid-column-gap: var(--column-gutter);
  grid-column-gap: var(--column-gutter);
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  align-items: start;
  margin: 0 auto 2rem;
  max-width: 1200px;
  @media only screen and (max-width: 70.95em) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (max-width: 47.95em) {
    grid-template-columns: repeat(var(--columns-mobile), minmax(0, 1fr));
  }
`;

export const Image = styled(LazyLoadImage)`
  cursor: zoom-in;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--column-gutter);
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const Divider = styled.div`
  display: none;
  @media only screen and (max-width: 47.95em) {
    display: block;
    margin-bottom: 1rem;
  }
`;

export const HomeWrapper = styled.div`
  @media only screen and (max-width: 70.95em) {
    padding: 0 1rem;
  }
`;
