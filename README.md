---App.tsx
import React, { useEffect } from 'react';
import { AppContainer } from './App.styled.tsx';

export const App: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.app-container')!;
    const [w, h] = [window.innerWidth, window.innerHeight];
    const count = (w * h) / 14400

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * w}px; top: ${Math.random() * h}px;
        --opacity: ${Math.random()}; --speed: ${Math.random()};
        --dx: ${Math.random()}; --dy: ${Math.random()};
      `;
      container.appendChild(p);
    }
  }, []);

  return <AppContainer className="app-container" />;

---App.styled.tsx
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(calc(-15px + 30px * var(--dx)), calc(-15px + 30px * var(--dy)));
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle, #001d3d, #000814);
  overflow: hidden;
  position: relative;

  .particle {
    position: absolute;
    width: 6px;
    height: 6px;
    opacity: calc(0.1 + 0.5 * var(--opacity));
    animation: ${float} calc(4s + 2s * var(--speed)) ease-in-out infinite;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: white;
    }

    &::before {
      width: 100%;
      height: 100%;
    }

    &::after {
      width: 10px;
      height: 10px;
      filter: blur(10px);
      transform: translate(-25%, -25%);
    }
  }
`;