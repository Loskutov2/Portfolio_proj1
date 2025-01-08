import styled from "styled-components";

export const FishEyeSVG = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  id: "svg-root",
})`
  display: none;
`;

export const FilterContainer = styled.div`
  filter: url(#SphereMapTest);
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 4px,
      rgba(255, 255, 255, 0) 4px,
      rgba(255, 255, 255, 0) 8px
);
`
