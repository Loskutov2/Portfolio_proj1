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
    floatx: Math.random(),
    floaty: Math.random(),
    speed:Math.random()
  }));
  useEffect(() => {
    particles.forEach(({ left, top, opacity, floatx, floaty, speed}) => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      const root = createRoot(container);
      root.render(<Particle 
        left={left}
        top={top}
        opacity={opacity}
        floatx={floatx}
        floaty={floaty}
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