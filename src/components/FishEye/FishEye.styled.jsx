import styled from "styled-components";

export const FishEyeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  filter: url(#SphereMapTest);
  overflow: hidden;
`;

export const FishEyeSVG = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  id: "svg-root",
})`
  display: none;
  & def filter img{
  height: 150vh;
  width: 150vw;
  transform: translate(50% 50%);}
`;