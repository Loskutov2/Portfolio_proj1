import styled from "styled-components";

export const Particle = styled.div<{ left: number; top: number; speed: number; opacity: number; floatx: number; floaty: number}>`
  position: absolute;
  z-index: -1;
  width: 6px;
  height: 6px;
  animation: float calc(4s + 2s * ${({ speed }) => speed}) ease-in-out infinite;
  left: ${({ left }) => left}px; 
  top: ${({ top }) => top}px;
  opacity: ${({ opacity }) => opacity};
  &::before, &::after {
    content: '';
    position: absolute;
    background-color: white;
  }
  &::before {
    width: 100%;
    height: 100%;
    display: block;
  }
  &::after {
    width: 10px;
    height: 10px;
    filter: blur(10px);
    transform: translate(-25%, -25%);
  }
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(calc(-25px + 50px * ${({floatx }) => floatx}), calc(-25px + 50px * ${({ floaty }) => floaty}));
    }
  }
`;