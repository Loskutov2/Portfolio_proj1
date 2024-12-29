import React, { useEffect } from 'react';
import { AppContainer } from './App.styled.tsx';

export const App: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.app-container')!;
    const [w, h] = [window.innerWidth, window.innerHeight];
    const count = Math.floor((w * h) / 3600);

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
};