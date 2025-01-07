import React, { useEffect } from 'react';
import { Header } from '../Header/Header.tsx';
import { Intro } from '../Main/Intro.tsx';
import { Particle, Scanlines } from './App.styled.tsx';
import { createRoot } from 'react-dom/client';
import { FishEye } from '../FishEye/FishEye.tsx';

export const App: React.FC = () => {
  const [w, h] = [window.innerWidth, window.innerHeight]
  const particles = Array.from({ length: (w*h) / 14400 }, () => ({
    left: Math.random() * w,
    top: Math.random() * h,
    opacity: Math.random(),
    floatX: Math.random(),
    floatY: Math.random(),
    speed:Math.random()
  }));
  useEffect(() => {
    const body = document.body;
    particles.forEach(({ left, top, opacity, floatX, floatY, speed}) => {
      const container = document.createElement('div');
      body.appendChild(container);
      const root = createRoot(container);
      root.render(<Particle 
        left={left}
        top={top}
        opacity={opacity}
        floatX={floatX}
        floatY={floatY}
        speed={speed}
      />);
    })
  }, []);

  return(
    <FishEye>
      <Scanlines>
        <Header />
        <Intro />
      </Scanlines>
    </FishEye>
  );
};