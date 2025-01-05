import React, { useEffect } from 'react';
import { Header } from './Header/Header.tsx';
import { Intro } from './Main/Intro.tsx';

export const App: React.FC = () => {
  useEffect(() => {
    const body = document.body;
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
      body.appendChild(p);
    }
  }, []);

  return(
    <>
      <Header />
      <Intro />
    </>
  );
};